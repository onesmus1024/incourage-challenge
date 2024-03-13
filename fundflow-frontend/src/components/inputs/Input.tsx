import styled from "styled-components";

interface InputProps {
    width: string;
    height: string;
    fontSize: string;
    color: string;
}

export const Input = styled.input<InputProps>`
    width: ${props => props.width};
    height: ${props => props.height};
    font-size: ${props => props.fontSize};
    color: ${props => props.color};
    border: none;
    border-radius: 10px;
    padding: 8px;
    margin: 8px 0;
    :focus {
        outline: none;
    }
`;


