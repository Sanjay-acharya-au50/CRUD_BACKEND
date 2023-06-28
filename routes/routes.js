const express = require('express');

const router = express.Router();

const PostingSchema = require('../model/postSchema');

router.get("/", (req,res)=>{
    // console.log("from router");
    res.json("from router")
})

    router.post("/register", async (req,res)=>{
        // console.log(req.body)
        const { name,email, bike } = req.body;
        // console.log(req.body.name)
        // console.log(req.body.email)
        // console.log(req.body.email)

        if(!name || !email || !bike){
            return res.status(404).json( "fill the field");
        }

        try {
            const preuser = await PostingSchema.findOne({email : email})
            // console.log(preuser);

            if(preuser){
                return res.status(404).json("already exist");
            }
            else{
                const addUser = await  PostingSchema.create({name,email, bike})
                return res.status(200).json(addUser);
                // console.log(addUser)

        }
        } catch (error) {
            return res.status(404).json({error : error.message})
        }
    })

    // get all user
    router.get("/getUser", async (req,res)=>{
        try {
            const getData = await PostingSchema.find();
            res.status(200).json(getData);
            // console.log(getData)
        } catch (error) {
            return res.status(404).json(error)

        }
    })

    // individual user
    router.get("/getUser/:id", async (req,res)=>{
        
        try {
             // console.log(req.params)
            // res.json(req.params)
            const {id} = req.params;
            const individualUser = await PostingSchema.findById({_id : id})
            res.status(200).json(individualUser);

            // console.log(id)
        } catch (error) {
            res.status(404).json(error);

            
        }
       
    })

    // edit user

    router.put("/update/:id", async (req,res)=>{
        const {id} = req.params;
        const {name, email, bike } = req.body
        // res.json(id)
        if(!name || !email || !bike){
            return res.status(404).json( "fill the field");
        }


        try {
            const getUser = await PostingSchema.findByIdAndUpdate(id, req.body, {
                new : true,
            })
            console.log(getUser)
            // res.json(getUser)
        } catch (error) {
            res.json(error)
        }
    })

    // delete

    router.delete("/delete/:id", async (req,res)=>{
        const {id} = req.params;
        // console.log(id)
        // res.json(id);
        try {
            const deleteUser = await PostingSchema.findByIdAndDelete({_id : id})
            // console.log(deleteUser)
            res.json(deleteUser);
        } catch (error) {
            console.log(error)
        }
    })

module.exports = router;