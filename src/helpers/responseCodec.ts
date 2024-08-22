import { Response } from "express";

export const handleResponse = (
  res: Response,
  statusCode: number,
  value: object | null,
  meta: object | null = null
) => {
  if (statusCode > 205) {
    return res.status(statusCode).json({
      sucess: false,
      ...value,
      meta: meta,
    });
  } else {
    return res.status(statusCode).json({
      success: true,
      ...value,
    });
  }
};

export const errors = {
  file_error: {
    message: "File name not found; should be rawData",
  },
  data_not_found: {
    message: "Data not found",
  },
  data_not_stored: {
    message: "Data not stored",
  },
  catch_error: {
    message: "Something went wrong",
  },
};

export const success = {
  data_stored: {
    message: "Data stored successfully",
  },
};
