import mssql from 'mssql';
import Emailconfig from '../config/email-config';
import sendMail from '../helper/transporter.helper';
import ejs from 'ejs';
import path from 'path';
import dotenv from 'dotenv';
import DBconfig from '../config/db-config';

dotenv.config({ path: path.resolve(__dirname, '../../../.env') });

export const sendRemindEmail = async () => {
    try{

        const pool = await mssql.connect(DBconfig);
        const unpaidLoans = await pool.request().query(`SELECT * FROM loans WHERE is_paid = '0' AND due_at < GETDATE() OR due_at > DATEADD(DAY, -1, GETDATE())`);
        const unpaidLoansList = unpaidLoans.recordset;
        console.log("unpaidLoansList",unpaidLoansList);

        for(let i = 0; i < unpaidLoansList.length; i++){
            let URL = `https://molynew.com`;
            // get the user id from the accepted answer
            const userId = unpaidLoansList[i].user_id;
            const due = unpaidLoansList[i].due_at;
            // get the user email from the user id
            const usersUnpaidLoans = await pool.request().query(`SELECT * FROM users WHERE id = '${userId}'`);
            const usersUnpaidLoansList = usersUnpaidLoans.recordset;
            console.log("usersUnpaidLoansList",usersUnpaidLoansList);
            // if email is unhappyuser@gmail.com or happyuser@gmail.com or email contains the word test skip
            if (usersUnpaidLoansList[0].email === 'unhappyuser@gmail.com' || usersUnpaidLoansList[0].email === 'happyuser@gmail.com' || usersUnpaidLoansList[0].email.includes('test')) {
                continue;
            }
            ejs.renderFile(path.resolve(__dirname, '../templates/loanDue.ejs'), { name: usersUnpaidLoansList[0].name,URL:URL,due:due }, async (err, data) => {
                if (err) {
                    console.log(err);
                } else {
                    let mainOptions = {
                        from: process.env.EMAIL,
                        to: usersUnpaidLoansList[0].email,
                        subject: 'Remind',
                        html: data
                    }
                    await sendMail(mainOptions);
                }
            })

            console.log(usersUnpaidLoansList[0].name);

        }
    }
    catch(err){
        console.log(err);
    }

}