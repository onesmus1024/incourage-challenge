import React from "react";
import axios from "axios";
import styled from "styled-components";
import { useState } from "react";
import {useDispatch} from "react-redux";
import { AppDispatch } from "../store";
import { getUserSuccess } from "../store/user/actionCreators";

import { FormContainer } from "../components/StyledCommon";
import { Input } from "../components/inputs/Input";
import { AppLink } from "../components/StyledCommon";
import { Button } from "../components/buttons/Button";




const Auth = () => {
    const dispatch: AppDispatch = useDispatch();
    const [isLoggingIn, setIsLoggingIn] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [error, setError] = useState("");






    const handleSignUp = async (e: React.FormEvent) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/api/v1/user/register", { name, email, password }).then((response) => {
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("user", JSON.stringify(response.data.user[0]));
            console.log(response.data);
            dispatch(getUserSuccess(response.data));
            window.location.href = "/";
        
        }
        ).catch((error) => {
            setError("User already exists");
            console.log(error);
        }
        );
    }
   

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/api/v1/user/login", { email, password }).then((response) => {
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("user", JSON.stringify(response.data.user[0]));
            console.log(response.data);
            dispatch(getUserSuccess(response.data));
            window.location.href = "/";
        }
        ).catch((error) => {
            setError("Invalid email or password");
            console.log(error);
        }
        );

     
        
    }
    


    if (isLoggingIn) {
        return (
            <AuthWrapper >
                <FormContainer width="300px" data-testId="login-form">
                    <h1>Log in</h1>
                    {error && <p color="red" >{error}</p>}
                    <Input type="text" required placeholder="email" width="100%" height="40px" fontSize="16px" color="black" data-testId="email" onChange={(e) => setEmail(e.target.value)} />
                    <Input type="password" required placeholder="password" width="100%" height="40px" fontSize="16px" color="black"data-testId="password" onChange={(e) => setPassword(e.target.value)} />
                    <Button onClick={handleLogin} color="black" fontSize="16px" data-testId="login-button" >Log in</Button>
                    <AppLink onClick={() => setIsLoggingIn(false)} data-testId="signup-link">Don't have an account?</AppLink>
                </FormContainer>
            </AuthWrapper >
        )
    }

        return (
            <AuthWrapper >
                <FormContainer width="300px" data-testId="signup-form">
                    <h1>Sign up</h1>
                    {error && <span color="red" >{error}</span>}
                    <Input type="text" required placeholder="name" width="100%" height="40px" fontSize="16px" color="black" data-testId="name" onChange={(e) => setName(e.target.value)} />
                    <Input type="text" required placeholder="email" width="100%" height="40px" fontSize="16px" color="black" data-testId="email" onChange={(e) => setEmail(e.target.value)} />
                    <Input type="password" required placeholder="password" width="100%" height="40px" fontSize="16px" color="black" data-testId="password" onChange={(e) => setPassword(e.target.value)} />
                   
                    <Button onClick={handleSignUp} color="black" fontSize="16px" data-testId="signup-button">Sign up</Button>

                    <AppLink onClick={() => setIsLoggingIn(true)} data-testId="login-link">Have an account?</AppLink>
                    
                </FormContainer>
            </AuthWrapper >
        )
    
 

}

const AuthWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;


export default Auth;