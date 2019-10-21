import { Router } from "express";

const routes = Router();

routes.get("/", (request, response) =>
{
    return response.json({ "status": true });
});

export default routes;