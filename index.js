const { faker } = require( '@faker-js/faker');
const mysql=require('mysql2');
const express=require('express');
const app=express();
const path=require('path');

// app.use(express.urlencoded({extented: true}));
// app.use(express.json());
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

let port=3000;
//object
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'Delta_app',
    password: '@MONIKA72068j'
  });
  let getRandomUser=()=> {
    return [
      faker.string.uuid(),
      faker.internet.userName(),
     faker.internet.email(),
    //   avatar: faker.image.avatar(),
       faker.internet.password(),
    //   birthdate: faker.date.birthdate(),
    //   registeredAt: faker.date.past(),
    ];
    
    };
  
//   let q="Insert into user(id,username,email,password) Values ?";
//   let data=[];
//   for(let i=1;i<=100;i++){
//     data.push(getRandomUser());
//   }
// //   let users=[["123d","123_newuserd","abc@gmail.comd","abcd"],["123c","123_newuserc","abc@gmail.comc","abcc"]];
  

// // 
// try{
//     connection.query(q,[data],(err,result)=>{
//         console.log(result);
//         // console.log(result.length);
//         // console.log(result[0]);
//         // console.log(result[1]);
  
  
  
//         if(err){
//           throw err;
//         }
//       })
//   }
//       catch(err){
//           console.log(err);
  
//       }


//   console.log(getRandomUser());
app.get("/",(req,res)=>{
  let q="Select count(*) from user";
  try{
    connection.query(q,(err,result)=>{
      if(err) throw err;
      console.log(result[0]["count(*)"]);
      // res.send("success");

      let count= result[0]["count(*)"];

      res.render("home.ejs",{count});
    })

  }catch(err){
    res.send("some error occured");

  }

});
app.listen(port,()=>{
  console.log("Listening to port");
});
// try{
  //   connection.query(q,[data],(err,result)=>{
  //       console.log(result);
  //       // console.log(result.length);
  //       // console.log(result[0]);
  //       // console.log(result[1]);
  
  
  
  //       if(err){
  //         throw err;
  //       }
  //     })
  // }
  //     catch(err){
  //         console.log(err);
  
  //     }
      // connection.end();