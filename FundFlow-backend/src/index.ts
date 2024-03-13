import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import morgan from "morgan";
import logger from "./utils/logger";
import userRoutes from "./routes/user.routes";
import loanRoutes from "./routes/loan.routes";
import creditScoreRoutes from "./routes/creditscore.routes";
import session from "express-session";
import dotenv from "dotenv";
import path from "path";
import { Request, Response } from "express";
import { notFound,errorHandler } from "./middlewares/error.middleware";
import getUser from "./utils/currentUser";
import { Session, SessionData } from "express-session";
dotenv.config({ path: path.resolve(__dirname, '../.env') });
export const app = express();

app.use(express.json());
app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: false
}));

// Middleware to set user information in session
declare module "express-session" {
    interface SessionData {
        user: any;
    }
}

app.use((req, res, next) => {
    // Check if user is logged in (you need to implement your authentication logic here)
    const token = req.headers.authorization as string;
    const user = getUser(token);
    if (user) {
        req.session.user = user; // Store user information in session
    }
    next();
});
const morganFormat = (tokens: any, req: Request, res: Response) => {
    return [
        tokens.method(req, res),
        tokens.url(req, res),
        tokens.status(req, res),
        tokens.res(req, res, "content-length"),
        "-",
        tokens["response-time"](req, res),
        "ms",
    ].join(" ");
};

app.use(morgan(morganFormat, logger.stream as any));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
    cors({
        origin: ["http://localhost:4200", "http://localhost:3001"],
        credentials: true,
    })
    );
    

app.get("/", (req, res) => {
    res.send(" Welcome to the fundflow API");
});

// user routes
app.use("/api/v1/user", userRoutes);
// loan routes
app.use("/api/v1/loan", loanRoutes);
// credit score routes
app.use("/api/v1/creditscore", creditScoreRoutes);
// Error handling middleware

app.use(notFound);
app.use(errorHandler);
const PORT = process.env.PORT || 8002;
app.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}`,{user : "admin"   })



});