const express =require("express")
const cors=require("cors")
const app=express()
const todos=[{
    id:1,
    title:"hello",
    description:"ji"
},
{
    id:2,
    title:"hello2",
    description:"ji2"
},
{
    id:3,
    title:"hello3",
    description:"ji3"
},
{
    id:4,
    title:"hello4",
    description:"ji4"
}]
app.use(express.json())
app.use(cors())
app.get("/",(req,res)=>{
    const id=req.query.id
    console.log(id)
    let todo=todos.find(x=>x.id==id)
    console.log(todo)
    res.json(todo)
})

    app.listen(3000)