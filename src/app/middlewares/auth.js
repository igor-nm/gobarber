import jwt from "jsonwebtoken";
import { promisify } from "util";

import authConfig from "../../config/auth";

export default async (request, response, next) => {
    const auth = request.headers.authorization;

    if (!auth) {
        return response.status(401).json({ error: "Token not provided" });
    }

    const [, token] = auth.split(" ");

    try {
        const decoded = await promisify(jwt.verify)(token, authConfig.secret);
        request.userId = decoded.id;

        return next();
    } catch (exception) {
        return response.status(401).json({ error: "Invalid token" });
    }
};
