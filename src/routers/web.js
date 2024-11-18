import express from 'express'
import getHome from '../controllers/homeController'
import getAbout from '../controllers/aboutController'
import getContact from '../controllers/contactController'
import userController from '../controllers/userController'
import authController from '../controllers/authController'


const router = express.Router()




router.get('/', getHome)


// login, register

router.get('/login', authController.formLogin)

router.get('/register', authController.formRegister)

router.post('/handleLogin', authController.handleLogin)

// Admin
router.get('/homeAdmin', userController.gethome_Admin)



// Client
router.post('/handleRegister', authController.handleRegister)

router.get('/homeClient', userController.gethome_Client)

router.get('/logout', authController.handleLogout)

router.get('/listUsers_Client', userController.getListUsers_Client)

// View
router.get('/about', getAbout)

router.get('/contact', getContact)

router.get('/formAdd_User', userController.getFormAdd_User)

router.get('/listUsers', userController.getList_Users)

router.get('/formUpdate_User/:username', userController.getFormUpdate_User)



// CRUD
router.post('/addUser', userController.addUser)

router.post('/updateUser/:username', userController.updateUser)

router.get('/deleteUser/:username', userController.deleteUser)





export default router