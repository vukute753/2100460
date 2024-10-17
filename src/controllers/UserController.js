import listUser from '../services/userService'

const list_User = async (req, res) => {
    let dataUser = await listUser()
    return res.render('listUser', {rows: dataUser} )
}   

export default list_User;