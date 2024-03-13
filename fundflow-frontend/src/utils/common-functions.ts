

interface CreditScore {
    loan_history: 'poor' | 'fair' | 'good' | 'excellent';
    collateral: 'yes' | 'no';
    income: number;
    employment_history: 'poor' | 'fair' | 'good' | 'excellent';
    dept_to_income_ratio: 'poor' | 'fair' | 'good' | 'excellent';
}

// Example usage:
const exampleCreditScore: CreditScore = {
    loan_history: 'poor',
    collateral: 'no',
    income: 0,
    employment_history: 'poor',
    dept_to_income_ratio: 'excellent'
};

function calculateCreditScore(creditScore: CreditScore): number {
    // Weight percentages
    const weights = {
        loan_history: 0.2,
        collateral: 0.1,
        income: 0.2,
        employment_history: 0.25,
        dept_to_income_ratio: 0.25
    };

    // Calculate total weighted score
    let totalScore = 0;
    for (const key in weights) {
        if (Object.prototype.hasOwnProperty.call(weights, key)) {
            const weight = weights[key as keyof typeof weights];
            const value = creditScore[key as keyof CreditScore];
            if (typeof value === 'number') {
                if(value > 1000){
                    totalScore += weight;
                }
            } else {
                switch (value) {
                    case 'poor':
                        totalScore += weight/4;
                        break;
                    case 'fair':
                        totalScore += weight/2;
                        break;
                    case 'good':
                        totalScore += weight/1.25;
                        break;
                    case 'excellent':
                        totalScore += weight/1;
                        break;
                    case 'yes':
                        totalScore += weight;

                        break;
                }
            }
        }
    }

    return totalScore;
}

export default calculateCreditScore;
