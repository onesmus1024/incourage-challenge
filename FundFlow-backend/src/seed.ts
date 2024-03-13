import * as fs from 'fs';
import * as path from 'path';
import * as sql from 'mssql';
import DBconfig from './config/db-config';
import logger from './utils/logger';
import dotenv from 'dotenv';

dotenv.config();



async function executeSqlFile(filePath: string): Promise<void> {
    const sqlQuery = fs.readFileSync(filePath, 'utf8');
    try {
        const pool = await new sql.ConnectionPool(DBconfig).connect();
        await pool.request().query(sqlQuery);
    } catch (error) {
        logger.error(`Error executing SQL file ${filePath}: ${error}`);
        console.error(`Error executing SQL file ${filePath}:`, error);
    }
}

async function executeSqlFilesInDir(dirPath: string): Promise<void> {
    const files = fs.readdirSync(dirPath);
    for (const file of files) {
        if (file.endsWith('.sql')) {
            const filePath = path.join(dirPath, file);
            await executeSqlFile(filePath);
        }
    }
}

(async () => {
    try {
        await executeSqlFilesInDir('database/tables');
        logger.info('Table creation SQL files executed successfully');
    } catch (error) {
        logger.error(`Error executing table creation SQL files: ${error}`);
        console.error('Error executing table creation SQL files:', error);
    }
})();

// create stored procedures

(async () => {
    try {
        await executeSqlFilesInDir('database/stored-procedures/creditscore');
        logger.info('Stored procedure SQL files executed successfully for creditscore');
    } catch (error) {
        logger.error(`Error executing stored procedure SQL files: ${error}`);
        console.error('Error executing stored procedure SQL files:', error);
    }
})();

(async () => {
    try {
        await executeSqlFilesInDir('database/stored-procedures/loan');
        logger.info('Stored procedure SQL files executed successfully for loan');
    } catch (error) {
        logger.error(`Error executing stored procedure SQL files: ${error}`);
        console.error('Error executing stored procedure SQL files:', error);
    }
})();

(async () => {
    try {
        await executeSqlFilesInDir('database/stored-procedures/user');
        logger.info('Stored procedure SQL files executed successfully for user');
    } catch (error) {
        logger.error(`Error executing stored procedure SQL files: ${error}`);
        console.error('Error executing stored procedure SQL files:', error);
    }
})();


// triggers

(async () => {
    try {
        await executeSqlFilesInDir('database/trigger');
        logger.info('Trigger SQL files executed successfully');
    } catch (error) {
        logger.error(`Error executing trigger SQL files: ${error}`);
        console.error('Error executing trigger SQL files:', error);
    }
})();
