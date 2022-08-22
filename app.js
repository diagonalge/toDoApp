//jshint esversion: 6

const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + "/date.js");


const app = express();

let items = ['CICD Pipeline example 2', 'Cook Food 11111', 'Eat Food','Hillo'];
let workItems = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

app.get('/', function(req, res){

    let day = date.getDate();
    res.render('list', {ListTitle: day, newListItems: items})
})

app.post('/', function(req, res){

    item = req.body.newItem;

    if(req.body.list === 'Work'){

        workItems.push('item');
        res.redirect('/work');

    }else{

        items.push(item);
        res.redirect('/');
    }

   
})

app.get('/work', function(req, res){
    res.render('list', {ListTitle: 'Work List', newListItems: workItems})
})

app.get('/about', function(req, res){
    res.render('about');
})


app.listen(3000, function(){
    console.log('Server is Up and running!');
})
