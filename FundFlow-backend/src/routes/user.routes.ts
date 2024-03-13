import { Router } from "express";
import { verifyToken } from "../middlewares/verify.middleware";
import { login, register, getUserById, updateUser, deleteUser,getAllUsers } from "../controllers/user.controller";

const userRoutes = Router();

userRoutes.post("/login", login);
userRoutes.post("/register", register);
// pass id as a parameter
userRoutes.get("/:id",verifyToken, getUserById);
userRoutes.put("/:id",verifyToken, updateUser);
userRoutes.delete("/:id",deleteUser);
userRoutes.get("/", getAllUsers);


export default userRoutes;