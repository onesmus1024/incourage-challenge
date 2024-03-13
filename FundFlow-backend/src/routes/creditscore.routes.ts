import { Router } from "express";
import { verifyToken } from "../middlewares/verify.middleware";
import { getAllCreditScores,getCreditScoreByUserId,createCreditScore,deleteCreditScore } from "../controllers/creditscore.controller";


const creditScoreRoutes = Router();


creditScoreRoutes.get("/", getAllCreditScores);
creditScoreRoutes.get("/:user_id",verifyToken, getCreditScoreByUserId);
creditScoreRoutes.post("/",verifyToken, createCreditScore);
creditScoreRoutes.delete("/:credit_score_id",verifyToken, deleteCreditScore);
creditScoreRoutes.put("/:credit_score_id",verifyToken, createCreditScore);


export default creditScoreRoutes;