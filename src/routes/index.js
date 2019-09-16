 const express= require('express');
const router=express.Router();

const Task = require( '../models/task');

const Reserva = require( '../models/reservas');


router.get('/',async (req,res) =>{
  const tasks= await Task.find();
  res.render('index.ejs', {
  tasks
});
});

router.post('/add', async(req,res)=>{
    //console.log(new Task(req.body)); 
  const task = new Task(req.body);
  await task.save();
  res.render('./reserva.ejs');
});




router.get('/add',async (req,res) =>{
  const reservas= await Reserva.find();
  res.render('reserva.ejs', {
  reservas
});
});
router.post('/add/api', async(req,res)=>{
  //console.log(new Task(req.body)); 
const reserva = new Reserva(req.body);
await reserva.save();
res.render('./reserva.ejs');
});

module.exports=router;


