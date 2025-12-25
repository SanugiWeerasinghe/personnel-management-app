"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandler = (err, req, res, next) => {
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
exports.default = errorHandler;
