import express from 'express';
import getHome from '../controllers/HomeController'
import getAbout from '../controllers/AboutController'
import getContact from '../controllers/ContactController'
import list_User from '../controllers/UserController'

const Router = express.Router();
const initWebRouter = (app) => {
    Router.get("/", getHome)

    Router.get('/about', getAbout)

    Router.get('/contact', getContact)

    Router.get('/users', list_User)
    
    return app.use('/', Router)
}
    
export default initWebRouter;