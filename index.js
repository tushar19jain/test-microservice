import express from 'express';
const TEST = express();
TEST.get('/test',(req,res)=>{
    res.status(200).send({message:"Working fine with docker !"})
})
TEST.listen(process.env.PORT || 5000,()=>{
    console.log("RUNNING");
});
