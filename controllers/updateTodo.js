//import the Model

const Todo = require("../models/Todo");


//Update is a PUT request


exports.updateTodo = async(req,res) => {
    try{

        //extract todo item by id
        const {id} = req.params;  //fetch the id
        const {title , description} = req.body;

        const todo = await Todo.findByIdAndUpdate(
            {_id:id},
            {title, description , updateAt:Date.now()}
        );


        res.status(200).json({
            success:true,
            data:todo,
            message:`Todo ${id} data succesfully Updated`,
        })

    } 
    catch(err){
        console.error(err),
        res.status(500).json({
            success:false,
            error:err.message,
            message:"Server Error",
        })
    }
}