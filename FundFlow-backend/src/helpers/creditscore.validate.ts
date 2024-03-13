import Joi from "joi";
import CreditScoreModel from "../models/creditscore.model";

const creditScoreSchema = Joi.object({
    id: Joi.string().required(),
    user_id: Joi.string().required(),
    created_at: Joi.string().required(),
    updated_at: Joi.string().required(),
    loan_history: Joi.string().required(),
    collateral: Joi.string().required(),
    income: Joi.number().required(),
    employment_history: Joi.string().required(),
    dept_to_income_ration: Joi.string().required()
})

const validateCreditScore = (creditScore:CreditScoreModel) => {
    return creditScoreSchema.validate(creditScore)
}

export default validateCreditScore