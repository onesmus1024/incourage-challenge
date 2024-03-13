
declare namespace NodeJS {
    interface ProcessEnv {
        NODE_ENV: 'dev' | 'prod' | 'test';
        PUBLIC_URL: string;
        REACT_APP_ENV: 'dev' | 'prod' | 'test';
        REACT_APP_API_URL: string;
        
    }
}