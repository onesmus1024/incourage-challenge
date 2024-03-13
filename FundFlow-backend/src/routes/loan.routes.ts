import { Router } from "express";
import { verifyToken } from "../middlewares/verify.middleware";
import { getAllLoans,getLoadByUserId,applyLoan,deleteLoan } from "../controllers/loan.controller";


const loanRoutes = Router();


loanRoutes.get("/",verifyToken, getAllLoans);
loanRoutes.get("/:user_id",verifyToken, getLoadByUserId);
loanRoutes.post("/", applyLoan);
loanRoutes.delete("/:loan_id",verifyToken, deleteLoan);
loanRoutes.put("/:loan_id",verifyToken, applyLoan);


export default loanRoutes;




