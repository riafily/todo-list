
const knexInstance=require('../database/connection')


const getlist=async (listId) =>{
    const result = await knexInstance('list').select('*')
    return result; }


const getAdd =async (items) =>{
    const result = await knexInstance('list').insert({listitem:items})
    return result;
}

const deleteItem =async (removeId) =>{
    const result = await knexInstance('list').where('id',removeId).del() 
    return result;
}

const editItem =async (editId, editValue) =>{
    const result = await knexInstance('list').where({ id: editId}).update({ listitem: editValue }, ['id', 'listitem']);
    return result;
}

module.exports= {
    getlist,getAdd,deleteItem,editItem
}