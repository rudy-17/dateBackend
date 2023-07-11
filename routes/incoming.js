const express = require('express');
const router = express.Router();
const Message= require("../models/Message")



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





module.exports = router;