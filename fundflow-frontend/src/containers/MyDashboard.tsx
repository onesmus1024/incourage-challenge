import React, { useState,useEffect } from 'react';
import { selectUser } from '../store/user/selectors';
import { selectLoan } from '../store/loan/selectors';
import { selectCreditScore } from '../store/creditScore/selectors';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { FlexRowSpaceBetween } from '../components/StyledCommon';
import { Text } from '../components/StyledCommon';
import { Button } from '../components/buttons/Button';
import { FlexRowSpaceBetweenWithProps } from '../components/StyledCommon';
import CreditScoreComponent from '../components/view/CreditScore';
import LoanComponent from '../components/view/loan';
import { PageContainer } from '../components/StyledCommon';
import ApplyLoanModal from '../components/modals/applyloanModal';
import calculateCreditScore from '../utils/common-functions';
import ErrorModal from '../components/modals/ErrorModal';







const MyDashboard = () => {
    const user1 = useSelector(selectUser) as unknown as any;
    const loansFromStore = useSelector(selectLoan) as unknown as any;
    const creditScoreFromStore = useSelector(selectCreditScore) as unknown as any;
    const [user, setUser] = useState(user1);
    const [loans, setLoans] = useState(useSelector(selectLoan));
    const [creditScore, setCreditScore] = useState(creditScoreFromStore);
    const [creditScoreValue, setCreditScoreValue] = useState(0);
    const [isEligible, setIsEligible] = useState(true);


    useEffect(() => {
        setUser(user1[0]);
        
    });

    useEffect(() => {
        setLoans(loansFromStore);
        
    }, [loansFromStore]);

    useEffect(() => {
        setCreditScore(creditScoreFromStore);
        console.log(creditScore);
        if(creditScoreFromStore.length > 0){
            const creditScoreValue = calculateCreditScore({
                loan_history: creditScoreFromStore[0].loan_history,
                collateral: creditScoreFromStore[0].collateral,
                income: creditScoreFromStore[0].income,
                employment_history: creditScoreFromStore[0].employment_history,
                dept_to_income_ratio: creditScoreFromStore[0].dept_to_income_ration
            });
            setCreditScoreValue(creditScoreValue);

        }
        
    }, [creditScoreFromStore]);

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const openModal = () => setModalIsOpen(true);
    const closeModal = () => setModalIsOpen(false);


    const applyLoan = () => {
        if (creditScoreValue < 0.3) {
            setIsEligible(false);
        }else{
            openModal();
        }
    }
 

    return (
  
    

        <PageContainer heightToTakeAway={0}>
            <LoanWrapper>
                <FlexRowSpaceBetweenWithProps width='100%'>
                    <Button color='primary' fontSize='16px' onClick={applyLoan} data-testid='apply-loan'>Apply loan</Button>
                    <div>
                        <Text>Credit Score</Text>
                        <CreditScoreComponent></CreditScoreComponent>
                    </div>
                </FlexRowSpaceBetweenWithProps>
            {loans.length > 0 ? loans.map((loan:any) => {
                return <LoanComponent key={loan.id} {...loan}></LoanComponent>
            }) : <Text>No loans</Text>}
        </LoanWrapper>
            <ApplyLoanModal isOpen={modalIsOpen} onRequestClose={closeModal} minHeight='300px' width='900px' label='Apply for a loan'></ApplyLoanModal>
            <ErrorModal isOpen={!isEligible} onRequestClose={() => setIsEligible(true)} minHeight='300px' width='400px' label='Error' message='You are not eligible for a loan your credit score is too low'></ErrorModal>
        </PageContainer>


        
    );
    }
const LoanWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
   

`;
export default MyDashboard;