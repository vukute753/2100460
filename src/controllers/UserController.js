import { render } from "ejs"
import userServices from "../services/userServices"
import session from "express-session"


// Get

const getFormAdd_User = (req, res) => {
    if (req.session.admin) {
        res.render('formAdd_User')
    }

    else {
        res.redirect('login')
    }
}

const getFormUpdate_User = async (req, res) => {

    if (req.session) {
        const username = req.params.username
        let row = await userServices.getUser_By_Username(username)
        let rows = row.length > 0 ? row[0] : {}
        res.render('formUpdate_User', {
            detailUser: rows
        })
    }

    else {
        res.redirect('login')
    }
}

const getList_Users = async (req, res) => {

    if (req.session.admin) {
        let rows = await userServices.getAll_Users()
        res.render('listUsers', {
            data: { listUsers: rows }
        })
    }

    else {
        res.redirect('login')
    }
}

const getListUsers_Client = async (req, res) => {
    let rows = await userServices.getAll_Users()
    res.render('listUsers_Client', {
        data: { listUsers: rows }
    })
}

const gethome_Client = (req, res) => {
    if (req.session.user) {
        res.render('homeClient')
    }
    else {
        res.render('home')
    }
}

const gethome_Admin = (req, res) => {
    if (req.session.admin) {
        res.render('homeAdmin')
    }
    else {
        res.render('home')
    }
}


// Insert, Update, Delete
const addUser = async (req, res) => {
    let { username, password, fullname, sex, address, email } = req.body

    await userServices.insertUser(username, password, fullname, sex, address, email)

    res.send("Thêm thành công")
}

const updateUser = async (req, res) => {
    const username = req.params.username
    let { fullname, sex, address, email } = req.body
    console.log(username)
    await userServices.updateUser(fullname, sex, address, email, username)
    res.send('Update thành công')
}

const deleteUser = async (req, res) => {
    const username = req.params.username
    await userServices.deleteUser(username)
    res.send('Xóa thành công')
}
export default { gethome_Client, gethome_Admin, getFormAdd_User, getList_Users, getListUsers_Client, addUser, updateUser, deleteUser, getFormUpdate_User }