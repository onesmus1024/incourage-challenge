
import dotenv from 'dotenv'
import { dot } from 'node:test/reporters'


dotenv.config()
const DBconfig = {
    user: process.env.DBUSER,
    password: process.env.DBPASS,
    database: process.env.DBNAME,
    server: 'localhost',
    pool: {
      max: 10,
      min: 0,
      idleTimeoutMillis: 30000
    },
    options: {
      encrypt: true, 
      trustServerCertificate: true,
    }
  }

  export default DBconfig