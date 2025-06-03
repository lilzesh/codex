import express from 'express';

const app = express();
const [,, port] = process.argv;

app.use(express.static('public'));
app.use(express.static('dist'));

app.listen(port || 8080);
