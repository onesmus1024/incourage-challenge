CREATE OR ALTER TRIGGER create_creditscore_record
ON users
AFTER INSERT
AS
BEGIN
    SET NOCOUNT ON;
    
    INSERT INTO creditscore (id,user_id, loan_history, collateral, income, employment_history, dept_to_income_ration)
    select 
    NEWID(),id,'poor', 'yes', 0.0, 'poor', 'poor' 
    from inserted;
END;


