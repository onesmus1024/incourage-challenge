
CREATE OR ALTER PROCEDURE getUserByEmail
@email VARCHAR ( 255 )
AS
BEGIN
SELECT * FROM users WHERE email = @email
END