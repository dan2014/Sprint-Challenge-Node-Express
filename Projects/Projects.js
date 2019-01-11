const express = require("express");
const projectsDB = require("../data/helpers/projectModel")
const router = express.Router();

router.get("/", async (req,res) => {
    try{
        const dbRes = await projectsDB.get();
        res.status(200).json(dbRes);
    } catch(error) {
        res.status(500).json([{error:{name:error.name,message:error.message,stack:error.stack}}]);
    }
})

/////////////////////

router.get("/id",async (req,res) => {
    console.log(req.body)
    const {id} = req.body;
    try{
        const dbRes = await projectsDB.get(id);
        res.status(200).json(dbRes);

    } catch(error) {
        res.status(500).json([{error:{name:error.name,message:error.message,stack:error.stack}}]);
    }
})

router.get("/id/actions",async (req,res) => {
    console.log(req.body)
    const {id} = req.body;
    try{
        const dbRes = await projectsDB.getProjectActions(id);
        res.status(200).json(dbRes);

    } catch(error) {
        res.status(500).json([{error:{name:error.name,message:error.message,stack:error.stack}}]);
    }
})

router.post("/create",async (req,res) => {
    console.log(req.body)
    try{
        const dbRes = await projectsDB.insert(req.body);
        res.status(201).json(dbRes);

    } catch(error) {
        res.status(500).json([{error:{name:error.name,message:error.message,stack:error.stack}}]);
    }
})


router.put("/edit",async (req,res) => {
    const {id,body} = req.body;
    try{
        const dbRes = await projectsDB.update(id,body);
        res.status(200).json(dbRes);

    } catch(error) {
        res.status(500).json([{error:{name:error.name,message:error.message,stack:error.stack}}]);
    }
})

router.delete("/delete",async (req,res) => {
    const {id} = req.body;
    try{
        const dbRes = await projectsDB.remove(id);
        res.status(200).json(dbRes);

    } catch(error) {
        res.status(500).json([{error:{name:error.name,message:error.message,stack:error.stack}}]);
    }
})

module.exports = router;