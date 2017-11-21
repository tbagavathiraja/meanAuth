var express=require("express")
var db=require("./config/database")
var cors = require('cors')
var app=express();
var bodyParser=require('body-parser');
var jwt=require("jsonwebtoken")


var connection=db.connection;
app.use(bodyParser.urlencoded({urlencoded:false}));

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
        else {
          res.send(err)
        }

      })
  console.log("congrats from node herer it is")


  })

app.get("/users",(req,res)=>{

  connection.query("select name from test", (err, result, fields) => {
    if (!err) {
      console.log("success")
        res.status(200).json(result);
    }
    else
    {

    }
  })


})




app.listen(3000,()=>{
  console.log("app is running at port 3000");
});


