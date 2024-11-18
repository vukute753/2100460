import http from 'http';
import { myDateTime } from './date.js';
import { getPath, getParamsURL } from './getURL.js';

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
    res.write(myDateTime() + "<br>");
    res.write(getPath(req) + "<br>");
    res.write(getParamsURL(req) + "<br>");
    res.write('Hello KTPM0121, chúc bạn thành công với Nodejs');
    res.end();
});

server.listen(8080, () => {
    console.log('Server is listening on port 8080');
});
