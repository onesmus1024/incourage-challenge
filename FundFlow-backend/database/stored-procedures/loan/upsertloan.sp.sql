
CREATE OR ALTER PROCEDURE upsertLoan
@id VARCHAR ( 255 ),
@user_id VARCHAR ( 255 ),
@amount DECIMAL ( 18 , 2 ),
@interest_rate DECIMAL ( 18 , 2 ),
@created_at DATE,
@updated_at DATE,
@is_deleted BIT,
@is_paid BIT,
@paid_at DATE,
@due_at DATE
AS

BEGIN
    IF EXISTS (SELECT * FROM loans WHERE id = @id)
    BEGIN
        UPDATE loans
        SET user_id = @user_id,
        amount = @amount,
        interest_rate = @interest_rate,
        created_at = @created_at,
        updated_at = @updated_at,
        is_deleted = @is_deleted,
        is_paid = @is_paid,
        paid_at = @paid_at,
        due_at = @due_at
        WHERE id = @id
        SELECT * FROM loans WHERE id = @id
    END
    ELSE
    BEGIN
        INSERT INTO loans (id, user_id, amount, interest_rate, created_at, updated_at, is_deleted, is_paid, paid_at, due_at)
        VALUES (@id, @user_id, @amount, @interest_rate, @created_at, @updated_at, @is_deleted, @is_paid, @paid_at, @due_at)
        SELECT * FROM loans WHERE id = @id
    END
END
