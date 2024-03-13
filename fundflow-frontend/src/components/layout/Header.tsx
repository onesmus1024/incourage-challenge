import React from "react";
import styled from "styled-components";
import { selectUser } from "../../store/user/selectors";
import { useSelector } from "react-redux";
import { User } from "../../types/Use";
import { FlexRowSpaceBetweenWithProps } from "../StyledCommon";
import { Text } from "../StyledCommon";
import { CenteredFlex } from "../StyledCommon";
import { AppLink } from "../StyledCommon";
import UserComponent from "../view/User";
import { FlexColumn } from "../StyledCommon";


export const Header = () => {
    const user = useSelector(selectUser) as unknown as User;
    console.log(user);
    return (
        <HeaderWrapper>
            <FlexColumn>
            <FlexRowSpaceBetweenWithProps width="100%" style={{ borderBottom: "3px solid #f0f0f0",backgroundColor: "#f0f0f0"}}>
                    <h2>FundFlow</h2>
                    <div>
                        <AppLink >Dashboard</AppLink>
                        <AppLink >Loans</AppLink>
                    </div>
                    <div>
                        <UserComponent {...user} />
                    </div>
            </FlexRowSpaceBetweenWithProps>
            <FlexColumn>
                <h2>Loans Dashboard</h2>
                <Text>Interact with your loans</Text>
            </FlexColumn>
            </FlexColumn>
        </HeaderWrapper>

    );
}


const HeaderWrapper = styled.div`
    color: ${props => props.theme.colors.text};
    width: 100%;
    border-bottom: 1px solid ${props => props.theme.colors.background};

   

`;

