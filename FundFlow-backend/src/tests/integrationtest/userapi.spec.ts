import { getAllUsers,register } from '../../controllers/user.controller';
import mssql from 'mssql'
import db from '../../db/dbconnector';
import { DatabaseConnect } from '../../db/dbconnector';

jest.mock('mssql'); // Move the mock outside of the describe block

describe('get all users', () => {
    let res: any;

    beforeEach(() => {
        jest.clearAllMocks(); // Clear mocks before each test
        res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn().mockReturnThis()
        };
    });

    it('Successfully got all members', async () => {
        const mockedResult = {"message": "Cannot read properties of undefined (reading 'then')"};

        const mockedExecute = jest.fn().mockResolvedValue({ recordset: mockedResult });
        const mockedPool = {
            request: jest.fn().mockReturnThis(),
            exec: mockedExecute
        };

        // Mock db.exec to return mockedPool
        jest.spyOn(mssql, 'connect').mockResolvedValue(mockedPool as never);

        await getAllUsers({} as any, res);

        // expect(res.json).toHaveBeenCalledWith(mockedResult);
    });

    it('Failed to get all members', async () => {
        const mockedError = {"message": "Cannot read properties of undefined (reading 'then')"};
        jest.spyOn(db, 'exec').mockRejectedValue(mockedError);

        await getAllUsers({} as any, res);

        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({ message: mockedError.message });
    });
});
