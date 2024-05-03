const express = require("express");
const router = new express.Router();
const MensRanking = require("../models/mens");
router.post("/mens",async(req,res)=>{
    try{
      const addingMensrecords = new MensRanking(req.body)
      console.log(req.body);
      const insertMens = await addingMensrecords.save();
      res.status(201).send(insertMens);
    }catch(e){
        res.status(400).send(e);
    }
})
router.get("/mens",async(req,res)=>{
    try{
      
      const getMens = await MensRanking.find({}).sort({"ranking":1 });
      res.status(200).send(getMens);
    }catch(e){
        res.status(400).send(e);
    }
})
router.get("/mens/:id",async(req,res)=>{
    try{
      const _id = req.params.id;
      const getMen = await MensRanking.findById({_id});
      res.status(200).send(getMen);
    }catch(e){
        res.status(400).send(e);
    }
})
// we will handle patch req of individual
router.patch("/mens/:id",async(req,res)=>{
    try{
      const _id = req.params.id;
      const getMen = await MensRanking.findByIdAndUpdate(_id,req.body,{
      new:true
      })
      
      res.status(200).send(getMen);
    }catch(e){
        res.status(400).send(e);
    }
})
// we will handle delete req
router.delete("/mens/:id",async(req,res)=>{
    try{
      const _id = req.params.id;
      const getMen = await MensRanking.findByIdAndDelete(req.params.id);
      res.status(200).send(getMen);
      
      
      
    }catch(e){
        res.status(400).send(e);
    }
})
module.exports = router;