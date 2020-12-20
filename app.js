const express = require("express");
const bodyParser = require("body-parser");

const date = require(__dirname + "/date.js");

const app = express();

let items = ["Buy Groceries","Water Plants"," Complete Assignments"];
const workItems=[];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));


app.get("/",function(req,res){
  let day = date.getDate();
  res.render("list",{
    TitleList: day,
    newItemsInList:items
  });

});

app.post("/",function(req,res){
  let item = req.body.new;

  if(req.body.new === "Work"){
    workItems.push(item);
    res.redirect("/work");
  }
  else{
  items.push(item);
  res.redirect("/");}
});

app.get("/work", function(req,res){
  res.render("list",{
    TitleList:"Work List",
    newItemsInList: workItems
  });

});
app.get("/about",function(req,res){
  res.render("about");
});
app.listen(3000,function(){
  console.log("Server is running at port 3000");
});

// var day="";
//   if(today.getDay()==0|| today.getDay()==6){
//     day = "weekend";
//     res.render("list",{kindOfDay: day});
//   }
//     else{
//     day="weekday";
//       res.render("list",{kindOfDay: day});}
// });
// OR
//   if(today.getDay()==0|| today.getDay()==6)
//       day = "weekend";
//   else
//       day="weekday";
//
