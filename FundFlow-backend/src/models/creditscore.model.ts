
class CreditScoreModel {
    id: string;
    user_id: string;
    created_at: string;
    updated_at: string;
    loan_history: string;
    collateral: string;
    income: number;
    employment_history: string;
    dept_to_income_ration: string;

    constructor(id: string, user_id: string, created_at: string, updated_at: string, loan_history: string, collateral: string, income: number, employment_history: string, dept_to_income_ration: string) {
        this.id = id;
        this.user_id = user_id;
        this.created_at = created_at;
        this.updated_at = updated_at;
        this.loan_history = loan_history;
        this.collateral = collateral;
        this.income = income;
        this.employment_history = employment_history;
        this.dept_to_income_ration = dept_to_income_ration;
    }
}


export default CreditScoreModel