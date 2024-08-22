import { Request, Response, NextFunction } from "express";
import { upload } from "../config/multer/multer.config";
import { MulterError } from "multer";
import { errors, handleResponse } from "../helpers/responseCodec";

export const isFileExist = (req: Request, res: Response, next: NextFunction) => {
  upload.single("json")(req, res, (err) => {
    if (err instanceof MulterError) {
      if (err.code === "LIMIT_UNEXPECTED_FILE") {
        return handleResponse(res, 400, errors.file_error);
      }
    }
    next();
  });
};
