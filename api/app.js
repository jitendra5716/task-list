import express from "express"
import { createTasks, deleteTasks, fetchTasks, updateTasks } from "./task.js";
const app = express();
const port = 8000;
import cors from "cors";
import serverless from "serverless-http";

app.use(express.json());

if(process.env.DEVELOPMENT){
    app.use(cors());
}

app.get('/',(req,res)=>{
    res.send("Hello World!");
});

app.get('/task',async(req,res)=>{
    try{
        const tasks = await fetchTasks();

        res.status(200).send(tasks.Items)
    }catch(err){
       res.status(401).send("Error in fetching tasks ",err);
    }
});

app.post("/task",async(req,res)=>{
    try{
        const task = req.body;
        const response = await createTasks(task);

        res.send(response);
    }catch(err){
        res.status(400).send("Error in Creating task ",err);
    }
});

app.put("/task",async(req,res)=>{
    try{
        const task = req.body;
        const response = await updateTasks(task);

        res.send(response);
    }catch(err){
        res.status(400).send("Error in Updating tasks",err);
    }
});

app.delete("/task/:id",async(req,res)=>{
    try{
        const {id} = req.params;
        const response = await deleteTasks(id);
        res.send(response);
    }catch(err){
        res.status(400).send("Error in deleting task ",err);
    }
})





app.listen(port,()=>{
    console.log("Express server is running on port ",port);
})

export const handler = serverless(app);