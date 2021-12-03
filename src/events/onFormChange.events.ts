import { Server, Socket } from "socket.io"
import { events } from "../data/events.data"
import { IFormFocusPayload } from "../data/index.data"

export const onFormChange = (socket: Socket, io: Server) => {
    socket.on("FORM_FOCUS", (payload: IFormFocusPayload) => {
        //@ts-ignore
        // socket.to(socket.meta.opportunityId).emit(events.FORM_FOCUS, payload);
        socket.broadcast.to(socket.meta.opportunityId).emit(events.FORM_FOCUS, {
            ...payload,
            //@ts-ignore
            user: socket.meta.user,
        })
    })
}