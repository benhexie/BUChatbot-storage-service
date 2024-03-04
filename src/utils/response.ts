import { Response } from "express";

/**
 * @class AppResponse
 * @classdesc - Class for handling response from the server
 */
export class AppResponse {
  private res: Response;

  constructor(res: Response) {
    this.res = res;
  }

  /**
   *
   * @param message - Success message
   * @param data - Data to be returned
   * @param code - Status code (default 200)
   */
  success = (
    message: string,
    data: Object | null = null,
    code: number = 200,
  ) => {
    this.res.status(code).json({
      status: "success",
      message,
      data,
    });
  };

  /**
   *
   * @param error - Error message
   * @param message - Error message
   * @param code - Status code (default 400)
   */
  failed = (error: string, message: string, code: number = 400) => {
    this.res.status(code).json({
      status: "error",
      error,
      message,
    });
  };
}
