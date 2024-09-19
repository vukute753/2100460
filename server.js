import express from 'express';
import date from './date';
import getURL from './getURL';
import viewEngine from './viewEngine';
import dotenv from 'dotenv/config';

const app = express();
const port = process.env.PORT || 3000;  // Cung cấp giá trị mặc định nếu không có PORT trong .env

viewEngine(app);

app.get('/date', (req, res) => {
    res.send(date());
});

app.get('/geturl', (req, res) => {
    const path = getURL.getPath(req);
    const param = getURL.getParamsURL(req);
    res.send({ path, param });
});

app.get('/ejs', (req, res) => {
    res.render("test");  // Render file EJS
});

app.get('/', (req, res) => {
    res.render("home");  // Render file EJS
});

app.get('/about', (req, res) => {
    res.render("about");  // Render file EJS
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
