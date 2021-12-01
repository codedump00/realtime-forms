import { Server, Socket } from "socket.io";
import { events } from "../data/events.data";
import { onFormChange } from "./onFormChange.events";
import { onJoin } from "./onJoin.events";

export const handleConnection = (socket: Socket, io: Server) => {
    onJoin(socket, io);
    onFormChange(socket, io);
    emitDisconnet(socket, io);

    socket.on("disconnect", () => {
        emitDisconnet(socket, io)
    });
}

export const emitDisconnet = (socket: Socket, io: Server) => {
    //@ts-ignore
    io.to(socket.meta.opportunityId).emit(events.LEAVE, socket.id);
    // socket.on("disconnecting", (reason) => {
    //     //@ts-ignore
    //     socket.to(socket.meta.opportunityId).emit("LEAVE", socket.id, reason);
    // });
}