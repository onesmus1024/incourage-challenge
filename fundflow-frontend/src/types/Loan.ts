
export interface Loan {
    id: string;
    user_id: string;
    amount: number;
    interest_rate: number;
    created_at: Date;
    updated_at: Date;
    is_deleted: boolean;
    is_paid: boolean;
    paid_at: Date;
    due_at: Date;
}


