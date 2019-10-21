import express from "express";
import routes from "./routes";

class App {
    constructor() {
        this.server = express();

        this.middlwares();
        this.routes();
    }

    middlwares() {
        this.server.use(express.json());
    }

    routes() {
        this.server.use(routes);
    }
}

const app = new App();
export default app.server;
