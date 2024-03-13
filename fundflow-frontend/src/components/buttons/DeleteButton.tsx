import styled from "styled-components";


interface DeleteButtonProps {
    color: string;
    fontSize: string;
}


export const DeleteButton = styled.button<DeleteButtonProps>`
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.color};
    font-size: ${props => props.fontSize};
    border: none;
    border-radius: 4px;
    padding: 8px;
    margin: 8px 0;
    :hover {
        background-color: ${props => props.theme.colors.secondary};
        cursor: pointer;
    }
`;