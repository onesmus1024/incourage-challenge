import React from 'react';
import { Loan } from '../../types/Loan';
import { ContentWrapper } from '../StyledCommon';
import { FlexRow } from '../StyledCommon';
import { FlexColumn } from '../StyledCommon';
import { StyledDate } from '../StyledCommon';
import { Text } from '../StyledCommon';


const LoanComponent = (props: Loan) => {

    const handleRepayment = (load_id: string) => {
        console.log("repaying loan ", load_id);
    }
    return (
        <ContentWrapper width="100%" key= {props.id}>
        <FlexRow>
            <FlexColumn>
                <Text> Amount </Text>
                <p> {props.amount} </p>
            </FlexColumn>
            <FlexColumn>
                <Text> Interest Rate </Text>
                <p> {props.interest_rate} </p>
            </FlexColumn>
            <FlexColumn>
                <Text> Created </Text>
                <StyledDate color='grey'> {new Date(props.created_at).toLocaleDateString()} </StyledDate>
            </FlexColumn>
            <FlexColumn>
                <Text> Status </Text>
                <p> {props.is_paid ? "Paid" : "Not Paid"} </p>
            </FlexColumn>
            <FlexColumn>
                <Text> Due </Text>
                <StyledDate color='grey'> {new Date(props.due_at).toLocaleDateString()} </StyledDate>
            </FlexColumn>
            <FlexColumn>
               
                <button data-testid="repayment-button" style={{ cursor: "pointer",border: "none"}} onClick={() => handleRepayment(props.id)}> Repay </button>
            </FlexColumn>
        </FlexRow>
        </ContentWrapper>
    );

}




export default LoanComponent;

