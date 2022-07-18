import multer from "multer";
import path from "path";
import crypto from "crypto";

import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// export const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, path.resolve("..", "..", "..", "public", "images"));
//       },
//       filename: (req, file, cb) => {
//         crypto.randomBytes(16, (err, hash) => {
//           if (err) cb(err);
  
//           const fileName = `${hash.toString("hex")}-${file.originalname}`;
  
//           cb(null, fileName);
//         });
//       },
// })

export const teste = {
  dest: path.resolve(__dirname, "..", "..", "..", "public", "images"),
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.resolve(__dirname, "..", "..", "..", "public", "images"));
    },
    filename: (req, file, cb) => {
      crypto.randomBytes(16, (err, hash) => {
        if (err) cb(err);

        const fileName = `${hash.toString("hex")}-${file.originalname}`;

        cb(null, fileName);
      });
    },
  }),
  limits: {
    fileSize: 2 * 1024 * 1024,
  },
  fileFilter: (req, file, cb) => {
    const allowedMimes = [
      "image/jpeg",
      "image/pjpeg",
      "image/png",
      "image/gif",
      "image/webp",
    ];

    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Invalid file type."));
    }
  },
};