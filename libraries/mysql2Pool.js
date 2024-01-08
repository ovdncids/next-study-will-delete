import mysql2 from "mysql2/promise"

const mysql2Pool = async () => {
  if (!global.mysql2Pool) {
    try {
      const mysql2Pool = mysql2.createPool({
        host: process.env.MYSQL_HOST,
        database: process.env.MYSQL_DATABASE,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
  
        connectionLimit: 1,
        maxIdle: 1,
        enableKeepAlive: true
      })
      const [rows, fields] = await mysql2Pool.execute(`
        select 'MySQL Connected' as Result
      `)
      console.log(rows)
      global.mysql2Pool = mysql2Pool
    } catch (error) {
      console.error(error)
    }
  }
  return global.mysql2Pool
}

export default mysql2Pool
