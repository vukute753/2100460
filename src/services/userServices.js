import connection from "../config/connDB";
import bcrypt from "bcryptjs"

// Handle hashpass
const hashpass = (password) => {
    var salt = bcrypt.genSaltSync(10);
    let hashpassword = bcrypt.hashSync(password, salt);
    return hashpassword
}

const checkhash_pass = (hashpass) => {
    let passtrue = bcrypt.compareSync(password, gethash_pass);
    return passtrue
}

const checklogin = async (username, password) => {
    const [rows, fields] = await connection.execute('SELECT * FROM `users` WHERE username=?', [username])
    let fail = 3
    if (rows.length > 0) {
        let role = rows[0].role;
        if (role == 1) {
            let gethash_pass = rows[0].password;
            let passtrue = bcrypt.compareSync(password, gethash_pass);
            console.log(passtrue)
            return passtrue
        }
        else if (role == 0) {
            if (password == 'admin') {
                return role = 'trueadmin'
            }
            else {
                return role = false
            }
        }

    }
    else {
        return fail
    }
}
const getAll_Users = async () => {
    const [rows, fields] = await connection.execute('SELECT * FROM `users`')
    return rows
}

const getUser_By_Username = async (username) => {
    const [rows, fields] = await connection.execute('SELECT * FROM `users` WHERE username=?', [username])
    return rows
}





const insertUser = async (username, password, fullname, sex, address, email) => {
    await connection.execute('INSERT INTO users (username, password, fullname, address, sex, email) VALUES (?,?,?,?,?,?)', [username, password, fullname, sex, address, email])
}




const insertUser1 = async (username, password, role) => {

    const hashpassword = hashpass(password)
    await connection.execute('INSERT INTO users (username, password, role) VALUES (?,?,?)', [username, hashpassword, role])
}

const updateUser = async (fullname, sex, address, email, username) => {
    await connection.execute(
        'UPDATE users SET fullname = ?, address = ?, sex = ?, email = ? WHERE username = ?',
        [fullname, address, sex, email, username]
    );
}

const deleteUser = async (username) => {
    await connection.execute('DELETE FROM users WHERE username = ?', [username])
}
export default { getAll_Users, getUser_By_Username, insertUser, insertUser1, updateUser, deleteUser, checklogin }