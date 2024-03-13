USE fundflow;


IF NOT EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = 'creditscore')
BEGIN
CREATE TABLE creditscore
(
    id VARCHAR ( 255 ) PRIMARY KEY ,
    user_id VARCHAR ( 255 ) NOT NULL ,
    created_at DATE NOT NULL DEFAULT GETDATE(),
    updated_at DATE NOT NULL DEFAULT GETDATE(),
    loan_history VARCHAR ( 255 ) NOT NULL,
    collateral VARCHAR ( 255 ) NOT NULL,
    income DECIMAL ( 18 , 2 ) NOT NULL,
    employment_history VARCHAR ( 255 ) NOT NULL,
    dept_to_income_ration VARCHAR ( 255 ) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id),
    CONSTRAINT FK_creditscore_user_id_users_id FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    CHECK (loan_history IN ('poor', 'fair', 'good', 'excellent')),
    CHECK (collateral IN ('yes', 'no')),
    CHECK (employment_history IN ('poor', 'fair', 'good', 'excellent')),
    CHECK (dept_to_income_ration IN ('poor', 'fair', 'good', 'excellent'))
);
END


-- SELECT * FROM creditscore;

-- -- select all users

-- SELECT * FROM users;

-- DELETE FROM users WHERE id = '2e210b99-3c61-4377-b68e-f8528f137283';

-- -- update credit score where user is 2e210b99-3c61-4377-b68e-f8528f137283

-- UPDATE creditscore
-- SET loan_history = 'excellent', collateral = 'yes', income = 10000.00, employment_history = 'excellent', dept_to_income_ration = 'excellent'
-- WHERE user_id = '180769bb-7f75-4c94-be56-b1525e6849a4';
    