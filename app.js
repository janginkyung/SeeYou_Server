var express=require('express') ;
var app = express();

var bodyParser = require('body-parser');
var session = require('express-session')
var mysql=require('mysql') ;

app.use(session({
  secret: 'keyboard cat'
, cookie: { maxAge: 60000 }}))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var connection =mysql.createConnection({
host:'localhost',
port: 3306,
user:'root' ,
password:'wkd30518!!',
database:'SeeYou'
});

connection.connect(function(){
    console.error("SeeYou connection");

});

app.get('/UserId/:UserId',function (req, res) {
  res.send("get과 연결 됬습니다. ") ;
  console.log("get 발생");
  var table='User';
  var colums=['UserId','UserName'] ;
  var id=req.params.UserId
  connection.query("SELECT ?? FROM ?? WHERE UserId=?",[colums,table,id],function(err){}) ;
  console.log(results);
})

app.post('/User', function (req, res) {
	// Create book information
  var userid=req.body.UserId || req.query.UserId;
  var username=req.body.UserName || req.query.UserName;
  var user={UserId: userid,UserName: username} ;


  connection.query('INSERT INTO User SET ?', user, function() {
      console.log("post 발생");
      res.send("post 발생")
  });
})

app.delete('/UserId/:UserId', function (req, res) {
	// Delete book information

})
var server=app.listen(23023) ;
