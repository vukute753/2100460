import connection from "../config/connDB";
import bcrypt from "bcryptjs"


const insertUser = async (username, password, role) => {
    const hashpassword = hashpass(password)
    await connection.execute('INSERT INTO users (username, password, role) VALUES (?,?,?)', [username, hashpassword, role])
}




export default {
    insertUser
}