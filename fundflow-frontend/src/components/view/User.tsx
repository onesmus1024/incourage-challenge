import React from "react";
import { User } from "../../types/Use";
import styled from "styled-components";
import { Text } from "../StyledCommon";
import { AppLink } from "../StyledCommon";


const UserComponent = (props: User) => {


    const user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user") as string) : null;
    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        window.location.href = "/login";
    }





    return (
        <UserWrapper>
            <UseImage src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" />
            {/* capitalize name */}
            <Text>{user.name.charAt(0).toUpperCase() + user.name.slice(1)}</Text>
            <AppLink onClick={handleLogout} data-testId="logout" style={{ cursor: "pointer", color: "blue" }}>Logout</AppLink>
        </UserWrapper>
            
    );

}

const UserWrapper = styled.div`
    color: ${props => props.theme.colors.text};
    padding: 20px;
    margin-bottom: 20px;
    width: 100%;
`;

const UseImage = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin: 0 20px;
`;




export default UserComponent;