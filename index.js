import express from 'express';
const TEST = express();
const PORT = 5000;
TEST.get('/test',(req,res)=>{
    res.status(200).send({message:"Working fine with docker !"})
})
TEST.listen(PORT,()=>{
    console.log("RUNNING");
});