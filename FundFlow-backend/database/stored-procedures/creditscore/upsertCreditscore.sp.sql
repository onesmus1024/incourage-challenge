
CREATE OR ALTER PROCEDURE upsertCreditScore
@id VARCHAR ( 255 ),
@user_id VARCHAR ( 255 ),
@created_at DATE,
@updated_at DATE,
@loan_history VARCHAR ( 255 ),
@collateral VARCHAR ( 255 ),
@income DECIMAL ( 18 , 2 ),
@employment_history VARCHAR ( 255 ),
@dept_to_income_ration VARCHAR ( 255 )
AS
BEGIN
    IF EXISTS (SELECT * FROM creditscore WHERE id = @id)
    BEGIN
        UPDATE creditscore
        SET user_id = @user_id,
        loan_history = @loan_history,
        collateral = @collateral,
        income = @income,
        employment_history = @employment_history,
        dept_to_income_ration = @dept_to_income_ration,
        updated_at = GETDATE()
        WHERE id = @id
        SELECT * FROM creditscore WHERE id = @id
    END
    ELSE
    BEGIN
        INSERT INTO creditscore (id, user_id,created_at, updated_at, loan_history, collateral, income, employment_history, dept_to_income_ration)
        VALUES (@id, @user_id, @created_at, @updated_at, @loan_history, @collateral, @income, @employment_history, @dept_to_income_ration)
        SELECT * FROM creditscore WHERE id = @id
    END
END
