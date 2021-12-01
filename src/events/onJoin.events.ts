import { Server, Socket } from "socket.io";
import { events } from "../data/events.data";

export const onJoin = (socket: Socket, io: Server) => {
    const { opportunityId, user } = socket.handshake.query;

    if (!opportunityId || !user) throw new Error("Required metadata not supplied.");
    //@ts-ignore
    socket.meta = { opportunityId, user }

    socket.join(opportunityId);

    socket.broadcast.to(opportunityId).emit(events.JOIN, user);
}