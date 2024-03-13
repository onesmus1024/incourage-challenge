
class LoanModel {
    id: string;
    user_id: string;
    amount: number;
    interest_rate: number;
    created_at: string;
    updated_at: string;
    is_deleted: boolean;
    is_paid: boolean;
    paid_at: string;
    due_at: string;

    constructor(id: string, user_id: string, amount: number, interest_rate: number, created_at: string, updated_at: string, is_deleted: boolean, is_paid: boolean, paid_at: string, due_at: string) {
        this.id = id;
        this.user_id = user_id;
        this.amount = amount;
        this.interest_rate = interest_rate;
        this.created_at = created_at;
        this.updated_at = updated_at;
        this.is_deleted = is_deleted;
        this.is_paid = is_paid;
        this.paid_at = paid_at;
        this.due_at = due_at;
    }
}


export default LoanModel