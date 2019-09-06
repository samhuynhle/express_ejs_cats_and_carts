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

app.get('/cat1', (request, response) => {
    
    var cat_data = {
        'name': 'Mat the Cat',
        'skill': 'Push the Cart',
        'friends': ['jon the prawn', 'bid the kid', 'rupper the pupper'],
    }

    response.render('cat1', {cat_data: cat_data});
});

app.get('/cat2', (request, response) => {

    var cat_data = {
        'name': 'Jat the Cat',
        'skill': 'Push the Cart',
        'friends': ['jon the prawn', 'bid the kid', 'rupper the pupper'],
    }

    response.render('cat2', {cat_data: cat_data});

});

app.get('/cat3', (request, response) => {

    var cat_data = {
        'name': 'Pat the Cat',
        'skill': 'Push the Cart',
        'friends': ['jon the prawn', 'bid the kid', 'rupper the pupper'],
    }

    response.render('cat3', {cat_data: cat_data});

});

app.use(express.static(__dirname + "/static"));

app.listen(50, ()=> console.log("I'm listening on port 50"));