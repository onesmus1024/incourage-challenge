

CREATE OR ALTER PROCEDURE getLoanByUserId
@user_id VARCHAR ( 255 )
AS
BEGIN
    SELECT * FROM loans WHERE user_id = @user_id
END

