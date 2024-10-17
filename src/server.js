import express from 'express';
import initWebRouter from './routers/webRouter';
import viewEngine from './config/viewEngine';
import dotenv from 'dotenv/config';

const app = express();
const port = process.env.PORT || 3000;  // Cung cấp giá trị mặc định nếu không có PORT trong .env

viewEngine(app);
initWebRouter(app);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
