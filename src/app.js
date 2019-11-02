import express from "express";
import { resolve } from "path";

import routes from "./routes";

import "./database";

class App {
    constructor() {
        this.server = express();

        this.middlwares();
        this.routes();
    }

    middlwares() {
        this.server.use(express.json());
        this.server.use(
            "/files",
            express.static(resolve(__dirname, "..", "temp", "uploads"))
        );
    }

    routes() {
        this.server.use(routes);
    }
}

const app = new App();
export default app.server;
