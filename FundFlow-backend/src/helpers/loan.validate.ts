import Joi from "joi";
import LoanModel from "../models/loan.model";




const loanSchema = Joi.object({
    id: Joi.string().required(),
    user_id: Joi.string().required(),
    amount: Joi.number().required(),
    interest_rate: Joi.number().required(),
    created_at: Joi.string().required(),
    updated_at: Joi.string().required(),
    is_deleted: Joi.boolean().required(),
    is_paid: Joi.boolean().required(),
    paid_at: Joi.string().required(),
    due_at: Joi.string().required()
})

const validateLoan = (loan:LoanModel) => {
    return loanSchema.validate(loan)
}

export default validateLoan
    