import React from "react";
import styled from "styled-components";
import { Footer } from "../components/layout/footer";
import { Header } from "../components/layout/Header";




const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <LayoutWrapper>
            <HeaderWrapper>
                <Header />
            </HeaderWrapper>
            <ContentWrapper>
                {children}
            </ContentWrapper>
            <FooterWrapper>
                <Footer />
            </FooterWrapper>
        </LayoutWrapper>
    );
}

const HeaderWrapper = styled.header`
    flex: 0 1 auto;
`;

const ContentWrapper = styled.section`
    flex: 1 1 auto;
`;

const FooterWrapper = styled.footer`
    flex: 0 1 40px;
`;

const LayoutWrapper = styled.main`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 80%;
    margin: 0 auto;
    padding: 20px;
    color: ${props => props.theme.colors.text};
    
    `;


export default Layout;






