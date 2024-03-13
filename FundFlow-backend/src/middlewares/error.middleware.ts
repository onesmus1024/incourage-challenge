import { Request, Response, NextFunction } from "express";



const notFound = (req: Request, res: Response, next: NextFunction) => {
    const error = new Error(`Not found - ${req.originalUrl}`);
    res.status(404);
    next(error);
  };
  
  
  const errorHandler = ( err: any, req: Request, res: Response, next: NextFunction) => {
    let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    let message = err.message;
    if (err.name === "CastError" && err.kind === "ObjectId") {
      statusCode = 404;
      message = "Resource not Found";
    }
    res.status(statusCode).json({
      statusCode,
      message,
      stack: process.env.NODE_ENV === "development" ? err.stack : null,
    });
  };
  
  export { notFound, errorHandler };