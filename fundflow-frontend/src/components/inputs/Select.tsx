import styled from "styled-components";

interface selectProps {
    width: string;
    height: string;
    fontSize: string;
    color: string;
    items: [];
}

export const Select = styled.select<selectProps>`
    width: ${props => props.width};
    height: ${props => props.height};
    font-size: ${props => props.fontSize};
    color: ${props => props.color};
    background-color: ${props => props.theme.colors.primary};
    border: none;
    border-radius: 4px;
    padding: 8px;
    margin: 8px 0;
    :focus {
        outline: none;
    }
`;


