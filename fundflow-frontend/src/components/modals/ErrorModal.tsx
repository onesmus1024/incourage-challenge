import React from "react";
import Modal from "./modal";
import { CenteredFlex } from "../StyledCommon";



const ErrorModal = ({ isOpen, onRequestClose, minHeight, width, label, message }: any) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            minHeight={minHeight}
            width={width}
            label={label}
        >
            <CenteredFlex>
                <p>{message}</p>
            </CenteredFlex>
        </Modal>
    );
}


export default ErrorModal;