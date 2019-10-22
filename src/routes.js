import { Router } from "express";

import User from "./app/models/User";

const routes = Router();

routes.get("/", async (request, response) => {
    const user = await User.create({
        provider: true,
        name: "Igor Martucelli",
        email: "martucelli.igor@gmail.com",
        password_hash: "dfinapdijnpiaOPNIOPAFGJN414E3Q1678",
    });

    return response.json(user);
});

export default routes;
