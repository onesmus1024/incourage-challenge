import jwt from 'jsonwebtoken';
import logger from './logger';

function getUser(token: string) {
    try {
        // const decodedToken = jwt.verify(token, 'your-secret-key'); 
        // const userId = (decodedToken as any).id;
        const user = { id: "userId", username: 'exampleUser' }; 
        return user;
    } catch (error) {
        console.error('Error decoding token:', error);
        return null;
    }
}

export default getUser;
