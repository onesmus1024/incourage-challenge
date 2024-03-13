

export enum UserType{
    ADMIN = 'admin',
    USER = 'user'
}



export interface User {
    id: string;
    name: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
    isSent: boolean;
    isAdmin: boolean;
    isDeleted: boolean;
}

export interface currentUser {
    id: string;
    name: string;
    email: string;
    isAdmin: boolean;
    accessToken: string;
}