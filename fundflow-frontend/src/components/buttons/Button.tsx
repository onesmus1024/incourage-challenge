import styled from "styled-components";

interface Button {
    color: string;
    fontSize: string;
}

export const Button = styled.button<Button>`
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