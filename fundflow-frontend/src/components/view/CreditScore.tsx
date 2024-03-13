import React from "react";
import { CreditScore } from "../../types/CreditScore";
import { selectUser } from "../../store/user/selectors";
import { selectCreditScore } from "../../store/creditScore/selectors";
import { useEffect, useState} from "react";
import calculateCreditScore from "../../utils/common-functions";
import { useDispatch, useSelector } from "react-redux";

interface CreditScoreType {
    loan_history: 'poor' | 'fair' | 'good' | 'excellent';
    collateral: 'yes' | 'no';
    income: number;
    employment_history: 'poor' | 'fair' | 'good' | 'excellent';
    dept_to_income_ration: 'poor' | 'fair' | 'good' | 'excellent';
}

const CreditScoreComponent = () => {

    const creditScore = useSelector(selectCreditScore) as unknown as CreditScoreType[];
    const user = useSelector(selectUser);
    console.log("CreditScoreComponent: ", creditScore);
    const [creditScoreValue, setCreditScoreValue] = useState(0);

    useEffect(() => {
        if(creditScore.length > 0){
            const creditScoreValue = calculateCreditScore({
                loan_history: creditScore[0].loan_history,
                collateral: creditScore[0].collateral,
                income: creditScore[0].income,
                employment_history: creditScore[0].employment_history,
                dept_to_income_ratio: creditScore[0].dept_to_income_ration
            });
            setCreditScoreValue(creditScoreValue);
        }
    }, [creditScore]);

    return (
        <div>

            
            {/* round to 2 decimal places */}
            <p>{(Math.round(creditScoreValue * 100)).toFixed(2)} %</p>
        </div>
    );
}


export default CreditScoreComponent;