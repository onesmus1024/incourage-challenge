
USE fundflow;

IF NOT EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = 'loans')
BEGIN
CREATE TABLE loans
(
    id VARCHAR ( 255 ) PRIMARY KEY ,
    user_id VARCHAR ( 255 ) NOT NULL ,
    amount DECIMAL ( 18 , 2 ) NOT NULL ,
    interest_rate DECIMAL ( 18 , 2 ) NOT NULL ,
    created_at DATE NOT NULL DEFAULT GETDATE(),
    updated_at DATE NOT NULL DEFAULT GETDATE(),
    is_deleted BIT DEFAULT  0,
    is_paid BIT DEFAULT  0,
    paid_at DATE,
    due_at DATE,
    FOREIGN KEY (user_id) REFERENCES users(id),
    CONSTRAINT FK_loans_user_id_users_id FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
END


-- -- delete everything from the table

-- DELETE FROM loans;