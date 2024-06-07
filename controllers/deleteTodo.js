//import Model

const Todo = require("../models/Todo");

//create Controller
exports.deleteTodo = async(req,res) => {

    try{

        //extract todo item by id
        const {id} = req.params;  //fetch the id

        const todo = await Todo.findByIdAndDelete(id)
        res.status(200).json({
            success:true,
           
            message:`Todo ${id} data succesfully deleted`,
        })
    }
    catch(err){
        console.error(err),
        res.status(500).json({
            success:false,
            error:err.message,
            message:"Server Error",
        });

    }
}