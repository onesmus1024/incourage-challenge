
CREATE OR ALTER PROCEDURE getCreditScoreByUserId
@user_id VARCHAR ( 255 )

AS
BEGIN
    SELECT * FROM creditscore WHERE user_id = @user_id
END
