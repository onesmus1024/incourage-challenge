

export interface CreditScore {
    id: string;
    user_id: string;
    created_at: Date;
    updated_at: Date;
    loan_history: string;
    collateral: string;
    income: number;
    employment_history: string;
    dept_to_income_ration: string;
}