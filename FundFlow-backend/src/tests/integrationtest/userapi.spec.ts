import { getAllUsers } from '../../controllers/user.controller';
import db from '../../db/dbconnector';


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
        const mockedResult = [
            {
                id: '692e677d-1ba3-42a4-960c-6be5e1c0135c',
                name: 'Onesmus',
                email: 'onesmus1024@gmail.com',
                password: '$2b$10$7my139DXtHVUlRZIFvczwuM5p466wnfmhgbXRBkYe7ZNG.w0WJgsG',
                is_admin: '0',
                is_deleted: '0',
                is_sent: '0',
                created_at: '2024-03-09T16:00:17.620Z',
                updated_at: '2024-03-09T16:00:17.620Z'
            }
        ];

        const mockedExecute = jest.fn().mockResolvedValue({ recordset: mockedResult });
        const mockedPool = {
            request: jest.fn().mockReturnThis(),
            exec: mockedExecute
        };

        // Mock db.exec to return mockedPool
        jest.spyOn(db, 'exec').mockResolvedValue(mockedPool as never);

        await getAllUsers({} as any, res);

        expect(res.json).toHaveBeenCalledWith(mockedResult);
    });
});
