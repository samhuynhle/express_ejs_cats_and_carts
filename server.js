const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get('/', (request, response)=> {
    response.render('index');
});

app.get('/carts1', (request, response) => {
    response.render('carts1');
});

app.get('/carts2', (request, response) => {
    response.render('carts2');
});

app.get('/form', (request, response) => {
    response.render('form');
});

app.use(express.static(__dirname + "/static"));

app.listen(50, ()=> console.log("I'm listening on port 50"));