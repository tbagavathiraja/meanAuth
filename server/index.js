var express=require("express")
var db=require("./config/database")
var cors = require('cors')
var app=express();
var bodyParsre=require('body-parser');
var jwt=require("jsonwebtoken")


var connection=db.connection;
app.use(bodyParsre.urlencoded({extend:false}));
app.use(require("./config/database" ))
app.use(cors())
app.post("/connect",(req,res)=>{
  console.log("inside")
 let username=req.body.name;
  let password=req.body.password;
  //console.log(req.body.name)
  let user={
    name:username,
    password:password
  }
//  console.log(JSON.stringify(req.body))
  //res.json("success");
      connection.query("select * from test", (err, result, fields) => {
        if (!err) {
          for (let iloop = 0; iloop < result.length; iloop++) {
            if (result[iloop].name == username) {
              console.log("welcome " + username)
              let token = jwt.sign(user, "this-is-my-secret-key", {expiresIn: 1440});
              res.json({error:false, token: token});
            }
          }
        }
        else
        {
          throw err;
        }
      })
  console.log("congrats from node herer it is")

 //res.json('success')

  })

app.listen(3000,()=>{
  console.log("app is running at port 3000");
});


