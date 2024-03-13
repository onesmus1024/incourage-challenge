import validateLoan from "../helpers/loan.validate";
import { Request, Response, NextFunction } from "express";
import LoanModel from "../models/loan.model";
import db from "../db/dbconnector";
import { v4 as uuidv4 } from "uuid";
import logger from "../utils/logger";



export const applyLoan = async (req: Request, res: Response) => {
    try {
        const { user_id, amount, interest_rate, due_at } = req.body;
        const loan = new LoanModel(
            uuidv4(),
            user_id,
            amount,
            interest_rate,
            new Date().toISOString(),
            new Date().toISOString(),
            false,
            false,
            new Date().toISOString(),
            due_at
        );

        const { error } = validateLoan(loan);
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }

        // check for connection to db
        if (!db.checkConnection()) {
            return res.status(500).json({ message: "Internal server error db connection" });
        }

        const loanApplied = await db.exec("upsertLoan", {
            id: loan.id,
            user_id: loan.user_id,
            amount: loan.amount.toString(),
            interest_rate: loan.interest_rate.toString(),
            created_at: loan.created_at.toString(),
            updated_at: loan.updated_at.toString(),
            is_deleted: loan.is_deleted.toString(),
            is_paid: loan.is_paid.toString(),
            paid_at: loan.paid_at.toString(),
            due_at: loan.due_at.toString()
        });

        if (loanApplied) {
            return res.status(200).json({ message: "Loan applied successfully", loan: [loanApplied] });
        }
        return res.status(500).json({ message: "Internal server error" });
    } catch (error) {
        logger.error(`Error occured in applyLoan: ${error}`);
        return res.status(500).json({ message: "Internal server error" });
    }
}


export const getLoadByUserId = async (req: Request, res: Response) => {
    try {
        const { user_id } = req.params;
        if (!user_id) {
            return res.status(400).json({ message: "User id is required" });
        }

        if (!db.checkConnection()) {
            return res.status(500).json({ message: "Internal server error db connection" });
        }

        const loan = await db.exec("getLoanByUserId", { user_id });
        if (loan) {
            return res.status(200).json({message : "Loan fetched successfully", loan});
        }
        return res.status(500).json({ message: "Internal server error" });
    } catch (error) {
        logger.error(`Error occured in getLoadByUserId: ${error}`);
        return res.status(500).json({ message: "Internal server error" });
    }
}





export const deleteLoan = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ message: "Loan id is required" });
        }

        if (!db.checkConnection()) {
            return res.status(500).json({ message: "Internal server error db connection" });
        }

        const loan = await db.exec("deleteLoan", { id });
        if (loan) {
            return res.status(200).json({ message: "Loan deleted successfully" });
        }
        return res.status(500).json({ message: "Internal server error" });
    } catch (error) {
        logger.error(`Error occured in deleteLoan: ${error}`);
        return res.status(500).json({ message: "Internal server error" });
    }
}

export const getAllLoans = async (req: Request, res: Response) => {
    try {
        if (!db.checkConnection()) {
            return res.status(500).json({ message: "Internal server error db connection" });
        }

        const loans = await db.exec("getAllLoans", {});
        if (loans) {
            return res.status(200).json({message: "Loans fetched successfully", loans});
        }
        return res.status(500).json({ message: "Internal server error" });
    } catch (error) {
        logger.error(`Error occured in getAllLoans: ${error}`);
        return res.status(500).json({ message: "Internal server error" });
    }
}


