import { Server } from "socket.io";

export const io = new Server({
    cors: { origin: "*:*", methods: [ "GET", "PUT" ] },
});