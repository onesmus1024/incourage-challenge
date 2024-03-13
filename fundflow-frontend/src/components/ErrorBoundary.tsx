import { Component,ReactNode } from "react";
import styled from "styled-components";
import { TbAlertCircle } from "react-icons/tb";
import theme from "../theme/theme";

import { 
    CenteredFlex, 
    AppLink, 
    HorizontalSpacer,
    IconColorFillWrapper,
    SubHeaderTitle,
    Text,
    VerticalSpacer, 
    } from "../components/StyledCommon";

interface Props{
    children?: ReactNode;
}

interface State{
    hasError: boolean;
}


const handleRefresh = () => {
    window.location.reload();
}


class ErrorBoundary extends Component<Props,State>{
    constructor(props:Props){
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error:Error){
        return { hasError: true };
    }

   

    render(){
        if(this.state.hasError){
            return (
            <Wrapper data-testid="generic-error">
                <CenteredFlex>
                    <IconColorFillWrapper color={theme.colors.primary}>
                        <TbAlertCircle size={20} />
                    </IconColorFillWrapper>
                    <HorizontalSpacer width="6px" />
                    <SubHeaderTitle>Something went wrong</SubHeaderTitle>
                </CenteredFlex>
                <VerticalSpacer height="12px" />
                <Text>
                    Please try refreshing the page or contact support if the problem persists.
                </Text>
                <VerticalSpacer height="12px" />

                <AppLink onClick={handleRefresh}>Refresh</AppLink>
            </Wrapper>
            );
        }
        return this.props.children;
    }
}

const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: ${theme.fonts.primary};
    `;


export default ErrorBoundary;