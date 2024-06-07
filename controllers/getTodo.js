//import model


const Todo = require("../models/Todo");

//define route handler

exports.getTodo = async(req,res) => {
    try{
        //fetch all todo data from database  (Todo is model name)
        const todos = await Todo.find({});

        //response

        res.status(200)
        .json({
            success:true,
            data:todos,
            message:"Entire Todo Data is Fetched"
        });
    }
    catch(err){
         console.error(err);
         res.status(500)
         .json({
            success:false,
            error:err.message,
            message:"Server Error",
         });
    }
}



exports.getTodoById = async(req,res) => {
    try{
        //extract todo item by id
        const id = req.params.id;  //fetch the id
        const todo = await Todo.findById({_id:id});

        //data forgiven id not found
        if(!todo){
            return res.status(404).json({
                success:false,
                message:"No Data found with Given Id",
            })
        }

        //data for given id found

        res.status(200).json({
            success:true,
            data:todo,
            message:`Todo ${id} data succesfully fetched`,
        })

    }
    catch(err){
        console.log(err)
        res.status(500).json({
            success:false,
            error:err.message,
            message:"Server Error",
        })
    }
}