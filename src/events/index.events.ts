import { Server, Socket } from "socket.io";
import { events } from "../data/events.data";
import { ActiveList, opportunitiesRepository } from "../repositories/activeUser.repository";
import { onFormChange } from "./onFormChange.events";
import { onJoin } from "./onJoin.events";

export const handleConnection = (socket: Socket, io: Server) => {
    addToActiveList(socket);
    onJoin(socket, io);
    onFormChange(socket, io);
    // emitDisconnet(socket, io);

    socket.on("disconnect", () => {
        emitDisconnet(socket, io)
    });
}

export const emitDisconnet = (socket: Socket, io: Server) => {
    //@ts-ignore
    io.to(socket.meta.opportunityId).emit(events.LEAVE, socket.meta.user);
    removeFromActiveList(socket);
    // socket.on("disconnecting", (reason) => {
    //     //@ts-ignore
    //     socket.to(socket.meta.opportunityId).emit("LEAVE", socket.id, reason);
    // });
}

function addToActiveList(socket: Socket) {
    const { opportunityId, user } = socket.handshake.query;

    if (!opportunityId || !user) throw new Error("Required metadata not supplied.");
    // @ts-ignore
    opportunitiesRepository.addOpportunity = new ActiveList(opportunityId, [user]);
}

function removeFromActiveList(socket: Socket) {
    const { opportunityId, user } = socket.handshake.query;

    if (!opportunityId || !user) throw new Error("Required metadata not supplied.");
    // @ts-ignore
    opportunitiesRepository.removeUserOfOpportunity(opportunityId, user);
}