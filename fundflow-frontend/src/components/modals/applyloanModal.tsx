import React from "react";
import Modal from "./modal";
import LoadingSpinner from "../Spinner";
import { Input } from "../inputs/Input";
import { Button } from "../buttons/Button";
import { FormContainer } from "../StyledCommon";
import { useState } from "react";
import axios from "axios";

interface ApplyLoanModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
    minHeight: string;
    width: string;
    label: string;
}


const ApplyLoanModal = ({ isOpen, onRequestClose, minHeight, width, label }: ApplyLoanModalProps) => {
    const [loading, setLoading] = useState(false);
    const [amount, setAmount] = useState(0);
    const [dueAt, setDueAt] = useState("");
    const user = JSON.parse(localStorage.getItem("user") || '{}');
    const userId = user.id;
    const handleApplyLoan = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        await axios.post("http://localhost:8080/api/v1/loan", { user_id: userId, amount, interest_rate: "0.08", due_at: dueAt }).then((response) => {
            console.log(response.data);
            setLoading(false);
            onRequestClose();
         
        }
        ).catch((error) => {
            console.log(error);
            setLoading(false);
            onRequestClose();
        }
        );

        
    }
    return (


        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            minHeight={minHeight}
            width={width}
            label={label}
        >
        {loading? <LoadingSpinner></LoadingSpinner> :
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <h2>Apply for a loan</h2>
        <FormContainer width='80%'  style={{backgroundColor: 'white', borderRadius: '4px', boxShadow: 'none'}}>
            <Input width='100%' height='40px' fontSize='16px' color='black' placeholder='Amount' type='number' style={{border : '1px solid black'}} onChange={(e) => setAmount(parseInt(e.target.value))}data-testId="amount" />
            <Input width='100%' height='40px' fontSize='16px' color='black' placeholder='Due at' type='date' style={{border : '1px solid black'}} onChange={(e) => setDueAt(e.target.value)} data-testId="due-at" />
            <Button color='primary' fontSize='16px' type='submit' data-testid='apply-loan-button' style={{width: '100%', marginTop: '16px'}} onClick={handleApplyLoan}>Apply</Button>
        </FormContainer>
    </div>
    }
        
        </Modal>
    );
}

export default ApplyLoanModal;