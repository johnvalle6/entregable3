const path=require('path');
const express=require('express');
const morgan=require('morgan');
const mongoose=require('mongoose');


const app=express();
//conectting db

//mongoose.connect('mongodb://localhost/ReservaHotel')
mongoose.connect('mongodb+srv://johnvalle829:QboxMZ5eZiuH61dc@cluster0-fb5sv.mongodb.net/DBejemplo1')
.then(db => console.log('Db connected'))
.catch(err => conosle.log(err));

 //import routs
const indexRoutes=require('./routes/index');
 

 //settings

app.set('port', process.env.PORT||3000);
app.set('views', path.join(__dirname,'views'));
app.set('views engine', 'ejs');
app.set('public engine', 'css');

 
 //middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use( express.static( "public" ));
app.use(express.static(__dirname + "public"));
app.use(express.static(__dirname + 'index.css'));


 //routes 

app.use('/',indexRoutes);

//starting server 
 app.listen(app.get('port'),()=>{
     console.log(`server on port ${app.get('port')}`);
 });  



 