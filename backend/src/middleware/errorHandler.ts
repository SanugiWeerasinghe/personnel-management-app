import { Request, Response, NextFunction } from 'express';

interface CustomError extends Error {
    status?: number;
    message: string;
}

const errorHandler = (
    err: CustomError,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const status = err.status || 500;
    const message = err.message || 'Internal Server Error';

    console.error(`[${status}] ${message}`);

    res.status(status).json({
        success: false,
        status,
        message,
        timestamp: new Date().toISOString(),
    });
};

export default errorHandler;
