var express = require('express');
var router = express.Router();

var mysql=require('mysql')
var pool=mysql.createPool({
  host:'localhost',
  user:'root',
  password:'123456',
  database:'baobei'
})
/* GET home page. */
router.post("/list",function(req,res,next){
  var con=req.body.name;
  var con2=req.body.name2;
  console.log(con)
  res.header('Access-Control-Allow-Origin','*');
  pool.query('INSERT INTO list(name,suibian) VALUES ("'+con+'","'+con2+'")',function(err,rows){
    res.send(rows)
    console.log(rows)
  })
})
router.post("/select",function(req,res,next){
  res.header('Access-Control-Allow-Origin','*');
  pool.query('SELECT * FROM list',function(err,rows){
    res.send(rows)
  })
})
router.post("/delete",function(req,res,next){
  var nimeid = req.body.id
  res.header('Access-Control-Allow-Origin','*');
  pool.query('DELETE FROM list WHERE id='+nimeid,function(err,rows){
    res.send(rows)
  })
})
module.exports = router;

