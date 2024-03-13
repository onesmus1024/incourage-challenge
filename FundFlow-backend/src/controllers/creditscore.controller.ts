import validateCreditScore from "../helpers/creditscore.validate";
import { Request, Response, NextFunction } from "express";
import CreditScoreModel from "../models/creditscore.model";
import db from "../db/dbconnector";
import { v4 as uuidv4 } from "uuid";
import logger from "../utils/logger";


export const getAllCreditScores = async (req: Request, res: Response) => {
    try {
        // check for connection to db
        if (!db.checkConnection()) {
            return res.status(500).json({ message: "Internal server error db connection" });
        }
        const creditScores = await db.exec("getAllCreditScore", {});
        logger.info("fetch all creditscore",{user : req.session.user.userId  })
        return res.status(200).json({ creditScores });
    } catch (error) {
        logger.error(`Error occured in getAllCreditScores: ${error}`,{user:req.session.user.userId});
        return res.status(500).json({ message: "Internal server error" });
    }
}


export const getCreditScoreByUserId = async (req: Request, res: Response) => {
    try {
        const { user_id } = req.params;
        // check for connection to db
        if (!db.checkConnection()) {
            return res.status(500).json({ message: "Internal server error db connection" });
        }

        const creditScore = await db.exec("getCreditScoreByUserId", {
            user_id
        });
        return res.status(200).json({ creditScore });
    } catch (error) {
        logger.error(`Error occured in getCreditScoreByUserId: ${error}`);
        return res.status(500).json({ message: "Internal server error" });
    }
}



export const createCreditScore = async (req: Request, res: Response) => {
    try {
        const { user_id, loan_history, collateral, income, employment_history, dept_to_income_ration } = req.body;
        const creditScore = new CreditScoreModel(
            uuidv4(),
            user_id,
            new Date().toISOString(),
            new Date().toISOString(),
            loan_history,
            collateral,
            income,
            employment_history,
            dept_to_income_ration
        );

        const { error } = validateCreditScore(creditScore);
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }

        // check for connection to db
        if (!db.checkConnection()) {
            return res.status(500).json({ message: "Internal server error db connection" });
        }

        const creditScoreCreated = await db.exec("upsertCreditScore", {
            id: creditScore.id,
            user_id: creditScore.user_id,
            created_at: creditScore.created_at,
            updated_at: creditScore.updated_at,
            loan_history: creditScore.loan_history,
            collateral: creditScore.collateral,
            income: creditScore.income.toString(),
            employment_history: creditScore.employment_history,
            dept_to_income_ration: creditScore.dept_to_income_ration
        });

        if (creditScoreCreated) {
            return res.status(200).json({ message: "Credit score created successfully" });
        }
        return res.status(500).json({ message: "Internal server error" });
    } catch (error) {
        logger.error(`Error occured in createCreditScore: ${error}`);
        return res.status(500).json({ message: "Internal server error" });
    }
}

export const deleteCreditScore = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ message: "Id is required" });
        }

        // check for connection to db
        if (!db.checkConnection()) {
            return res.status(500).json({ message: "Internal server error db connection" });
        }

        const creditScoreDeleted = await db.exec("deleteCreditScore", {
            id
        });

        if (creditScoreDeleted) {
            return res.status(200).json({ message: "Credit score deleted successfully" });
        }
        return res.status(500).json({ message: "Internal server error" });
    } catch (error) {
        logger.error(`Error occured in deleteCreditScore: ${error}`);
        return res.status(500).json({ message: "Internal server error" });
    }
}


    