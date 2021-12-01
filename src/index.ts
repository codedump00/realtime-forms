import { config } from "./configs/config";
import { server } from "./configs/server.config";
import { io } from "./configs/socketio.config";
import { handleConnection } from "./events/index.events";


function bootstrap() {
    try {
        server.listen(config.port, () => {
            console.log(`Server started on port ${config.port}`)
        });

        io.attach(server);

        io.on('connection', (socket) => handleConnection(socket, io));
    } catch (error) {
        console.log("Error starting server...", error);

        io?.close();
        server?.close();
    }
}

bootstrap();