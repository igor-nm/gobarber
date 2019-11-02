import multer from "multer";
import crypto from "crypto";
import { extname, resolve } from "path";

export default {
    storage: multer.diskStorage({
        destination: resolve(__dirname, "..", "..", "temp", "uploads"),
        filename: (request, file, callback) => {
            crypto.randomBytes(16, (error, buffer) => {
                if (error) {
                    return callback(error);
                }

                return callback(
                    null,
                    buffer.toString("hex") + extname(file.originalname)
                );
            });
        },
    }),
};
