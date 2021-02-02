const { response } = require("express");
const uploadFile = require("../src/functions/upload")

const createItem = async (itemType, itemObject) => {
    const item = await itemType(itemObject)
    try{
        const newItem = await item.save();
        response.body = newItem;
        response.success = true;
    } catch (err) {
        response.success = false;
        response.error = err._message;
    }
    return response;
};

const sendError = (errorMessage, errorObject) => {
    let response = {}
    console.log(errorObject);
    response.error = errorObject.errors[0]._message
    
    return response;
}

const listAll = async (itemType) => {
    try{
        const response = await itemType.find()
        return {
            data: response,
            success: true
        }
    }
    catch (err){
        return { error: err }
    }
       
}

const list = async (itemType, parameters) => {
    let response = {}
    try{
        response = await itemType.find(parameters)
        if(response.length) {
            response.success = true;
        } else {
            response.success = false;
            response.error = "No recipes found for this user"
        }
    }
    catch (err){
        response.error = err
        response.success = false
    }
    return response;
}

const deleteById = async (itemType, parameters) => {
    let response = {}
    try{
        let deletedStatus = await itemType.deleteOne(parameters)
        if(deletedStatus.deletedCount) {
            response.success = true
        } else {
            response.error = "Recipe not found"
        }
    }
    catch (err){
        response.error = err
        response.success = false
    }
    return response;
}

const updateItem = async (itemType, itemId, itemObject, errorMessage) => {
    let response = {}
    try {
        await itemType.updateOne(itemId, itemObject)
        response.item =  await itemType.findById(itemId)
        response.success = true
    } catch (err) {
        const errorObject = sendError(errorMessage, err)
        response.error = errorObject.error
        response.success = false
    }
    return response;
};

const find = async (itemType, parameters) => {
    let response = {}
    try{
        response = await itemType.findById(parameters)
        if(response._id) {
            response.success = true;
        } else {
            response.success = false;
            response.error = "No recipe found for this id"
        }
    }
    catch (err){
        response.error = err
        response.success = false
    }
    return response;
}

module.exports = {
    createItem,
    listAll,
    list,
    deleteById,
    updateItem,
    find,
}