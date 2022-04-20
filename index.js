const express = require('express');
const cors=require('cors');

const app= express();
const port = process.env.PORT || 5000;
 
app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('hello from my smarty choosy personal Pant!!')
})

const users=[
    {id:1,name:'Shabana',email:'sabana@gmail.com',phone:'0178888888'},
    {id:2,name:'Shabnoor',email:'Shabnoor@gmail.com',phone:'0178888888'},
    {id:3,name:'Shuchorita',email:'suchorita@gmail.com',phone:'0178888888'},
    {id:4,name:'Shuchanda',email:'suchanda@gmail.com',phone:'0178888888'},
    {id:5,name:'Shrabony',email:'srabony@gmail.com',phone:'0178888888'},
    {id:6,name:'Shrabonti',email:'srabonti@gmail.com',phone:'0178888888'},
    {id:7,name:'Shohani',email:'sohani@gmail.com',phone:'0178888888'},

]

app.get('/users',(req,res)=>{
    if(req.query.name){
        const search=req.query.name;
        const matched=users.filter(user=>user.name.toLowerCase(). includes(search))
        res.send(matched);
    }
    else{

    }
    res.send(users)
})
app.get('/user/:id',(req,res)=>{
    console.log(req.params);
    const id= parseInt(req.params.id);
    const user=users.find(user=>user.id===id);
    res.send(user)
});

app.post('/user',(req,res)=>{
    console.log(req.body);
    const user=req.body;
    users.push(user);
    user.id= users.length+ 1;
    res.send(user);
})


app.listen(port,()=>{
    console.log('listening to port',port);
})