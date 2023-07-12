const express = require('express');
const router = express.Router();
const Message= require("../models/Message")
const Todo=require("../models/Todo")



router.post("/a",async (req,res)=>{
    let message=req.body.data

    let newMessage= new Message({
        message:message
    })

    await newMessage.save().then(response=>{
        res.send(response)
        console.log(response)
    }).catch(error=>{
        res.send(error)
    })
    console.log(req.body.data)
})

router.get("/read",async(req,res)=>{

    let allMessages=await Message.find().then(response=>{
        res.send(response)
    }).catch(error=>{
        res.send(error)
    })
})

router.post("/add",async(req,res)=>{

    let todo=req.body.body
    
    let newTodo= new Todo({
        todo:todo.task,
        id:todo.id,
        completed:todo.completed
    })
    
    await newTodo.save().then(response=>{
        res.send(response)
        console.log(response)
    }).catch(error=>{
        res.send(error)
    })
   
})

router.get("/allTodo",async (req,res)=>{

    let alltodo=await Todo.find().then(response=>{
        res.send(response)
    }).catch(error=>{
        res.send(error)
    })

})
router.post("/delete",async (req,res)=>{
    let toDelete= req.body.id
    
    let deletee=await Todo.deleteOne({id:toDelete}).then(response=>{
        res.send(response)
    }).catch(error=>{
        res.send(error)
    })

})




module.exports = router;