import express from 'express'
import dotenv from 'dotenv/config'
// import myDateTime from './public/date.js';
// import getURL from './public/getURL.js';
import viewEngine from './config/viewEngine.js';
import webRouters from './routers/web.js'
import apiRouters from './routers/apiRouter.js'
import staticFiles from './config/staticFiles.js';
import useBootstrap from './config/bootstrapIcon.js';
import bodyParser from 'body-parser'
import session from 'express-session';

const path = require('path')

const app = express()


// cau hinh ejs
viewEngine(app)

// session
app.set('trust proxy', 1) // trust first proxy
app.use(session({
    secret: 'hienvu',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))

// cau hinh static file
staticFiles(app)

// su dung bootstrap
useBootstrap(app)

// su dung req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT


app.use('/', webRouters)

app.use('/api/', apiRouters)





app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
