import { render } from "ejs"
import userServices from "../services/userServices"
import session from "express-session"


// Login, Register
const formLogin = (req, res) => {
    res.render('formLogin')
}

const formRegister = (req, res) => {
    res.render('formRegister')
}

//Handle
const handleRegister = async (req, res) => {
    let { username, password, password_repeat } = req.body
    const role = "1";
    await userServices.insertUser1(username, password, role)
    res.send('okem')
}

const handleLogin = async (req, res) => {
    let { username, password } = req.body
    let passtrue = await userServices.checklogin(username, password)
    if (passtrue == true) {

        req.session.user = {
            username: username
        }
        console.log(req.session)
        res.redirect('homeClient')
    }
    else if (passtrue == 'trueadmin') {
        req.session.admin = {
            username: username
        }
        console.log(req.session)
        res.redirect('homeAdmin')

    }
    else if (passtrue == false) {
        res.send('Sai mật khẩu')
    }
    else {
        res.send('Tài khoản không tồn tại')
    }
}

const handleLogout = (req, res) => {
    req.session.destroy()
    res.redirect('/')
    console.log(req.session)
}
export default { formRegister, formLogin, handleRegister, handleLogin, handleLogout }