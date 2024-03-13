import styled from "styled-components";

interface ColorProps {
    color: string;
}

interface PageContainerProps {
    heightToTakeAway:number;
}

interface WidthProps {
    width : string;
    
}

interface HeightProps {
    height : string;
}

interface FontSizeProps {
    fontSize ?: string;
}

interface TextProps {
    color ?: string;
    fontSize ?: string;
    weight ?: string;
}

interface FormContainerProps {
    width: string;
}


export const PageContainer = styled.div<PageContainerProps>`
   
    width: 100%;
    min-height: calc(100vh - ${props => props.heightToTakeAway}px);

`;

export const section = styled.section`
    padding: 16px 120px 0;
`;

export const sectionWithHeight = styled.section<HeightProps>`
    padding: 16px 120px 0;
    height: ${props => props.height};
`;


export const ContentWrapper = styled.div<WidthProps>`
    width: ${props => props.width};
    margin: auto;
    font-size: 14px;
    color: ${props => props.theme.colors.text};
    border-radius: 4px;
    border-bottom: 1px solid ${props => props.theme.colors.primary};
    :hover {
        cursor: pointer;
        background-color: ${props => props.theme.colors.background};
    }
`;

export const AppLink = styled.a<FontSizeProps>`
    font-weight: 400;
    font-size: ${props => props.fontSize ? props.fontSize : '14px'};
    color: ${props => props.theme.colors.primary};
    cursor: pointer;
    text-decoration: none;
    :hover {
        text-decoration: underline;
    }
`;

export const CenteredFlex = styled.div`
    display: flex;
    align-items: center;
`;

export const HorizontalSpacer = styled.div<WidthProps>`
    width: ${props => props.width};
`;

export const IconColorFillWrapper = styled.span<ColorProps>`
    color: ${props => props.color};
`;

export const SubHeaderTitle = styled.h2<TextProps>`
    font-size: ${props => props.fontSize ? props.fontSize : '24px'};
    font-weight: ${props => props.weight ? props.weight : '500'};
    line-height: 10px;
    color: ${props => props.color ? props.color : props.theme.colors.text};
`;

export const Text = styled.p<TextProps>`
    font-size: ${props => props.fontSize ? props.fontSize : '14px'};
    color: ${props => props.color ? props.color : props.theme.colors.text};
    line-height: ${props => props.fontSize ? props.fontSize : '14px'};
    font-weight: ${props => props.weight ? props.weight : '400'};
`;

export const VerticalSpacer = styled.div<HeightProps>`
    height: ${props => props.height};
`;


export const FormContainer = styled.form<FormContainerProps>`
    width: ${props => props.width};
    margin: auto;
    margin-top: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 24px;
    border-radius: 4px;
    background-color: ${props => props.theme.colors.background};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

`;

export const FormContainerWithHeight = styled.form<HeightProps>`
    margin: auto;
    margin-top: 24px;
    height: ${props => props.height};
`;


// flex direction row

export const FlexRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

`;

export const FlexRowCenter = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const FlexColumn = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const FlexRowSpaceBetween = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: ${props => props.theme.colors.background};
    width: 50%;
    padding: 24px;
`;

// flex row with space between props
export const FlexRowSpaceBetweenWithProps = styled.div<WidthProps>`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: ${props => props.width};
    padding: 24px;
`;

export const Actions = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;


interface DateProps {
    color: string;
}

export const StyledDate = styled.p<DateProps>`
    font-size: 14px;
    color: ${props => props.color};
    font-weight: 400;
`;
