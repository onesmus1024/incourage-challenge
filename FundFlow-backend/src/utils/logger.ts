import winston from 'winston';

// Define a custom log format
const customFormat = winston.format.printf(({ level, message, timestamp, user }) => {
    return `${timestamp} : ${level.toUpperCase()} : ${user ? `User: ${user} - ` : ''}${message}`;
});

const logger = winston.createLogger({
    level: 'info', // Set the minimum log level to display
    format: winston.format.combine(
        winston.format.timestamp(), // Add timestamp to logs
        customFormat
    ),
    transports: [
        new winston.transports.Console(), // Log to the console
        new winston.transports.File({ filename: 'logs/app.log' }) // Log to a file
    ]
});

export default logger;
