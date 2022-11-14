const {getAdd ,deleteItem,editItem} = require("./list.service")
const {getlist} = require("./list.service")

const read = async (req, res, next) =>{
    const foundlist =await getlist()
    res.json({data: foundlist});
};

const add =async (req, res, next) =>{
    const text=req.body.item
    const addList = await getAdd(text);
    res.json({data : addList});
};

const remove =async (req, res, next) =>{
    const removeId= Number(req.params.removeId);
    const removeList = await deleteItem(removeId);
};

const edit =async (req, res, next) =>{
    const editId= Number(req.params.editId)
    const editValue= req.params.editValue
    const editList = await editItem(editId,editValue);
};
module.exports = { add ,read,remove, edit}