const express=require("express");
const ejs = require("ejs")
const app=express()
const post=require(__dirname+"/postscontent.js")
app.set("view engine", "ejs");

app.use(express.static("public"));

const newpost=post.posts

app.get("/",function(req,res){
res.render("home",{allposts:newpost});

})

app.get("/posts/:id",function(req,res){
    const id=req.params.id;
    
    newpost.forEach((e)=>{
        if(e.id==id){
            res.render("posts",{title: e.title, content:e.content, image:e.image , id:e.id});
        }
    })
    
    
})



app.get("/about", function(req,res){
    res.render("about")
})

















app.listen(process.env.PORT || 3000,()=>console.log("sever started at 3000"))



   //https://floating-castle-05666.herokuapp.com/
   //https://floating-fjord-54923.herokuapp.com/