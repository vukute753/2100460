import pool from '../config/connDB'
//select user
const listUser = async (user) => {
    const [rows, fields] = await pool.execute('SELECT * FROM users')
    console.log(rows)
    return rows;
}

export default listUser