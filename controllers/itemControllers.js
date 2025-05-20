const itemsData = require("../inventory/items")

const getAllItems = async (req, res, next) => {
    try {
        const items = itemsData
        return res.status(200).json({
            success: { message: "This route points to the Items page with all of the items." },
            data: items
        })
    }
    catch (error) {
        return res.status(400).json({
            error: { message: "Items not found. Try again." }
        })
    }
}

const getItem = async (req, res, next) => {
    const { _id } = req.params
    try {
        const item = itemsData.find((item) => item._id === _id)
        return res.status(200).json({
            success: { message: `This route points to the Book page that has ID ${item._id}.` },
            data: item
        })
    }
    catch (error) {
        return res.status(400).json({
            error: { message: "Item not found. Try again." }
        })
    }
}

const createItem = async (req, res, next) => {
    const { name, original, current, discount, store, image, category } = req.body

    try {
        const newItem = { name, original, current, discount, store, image, category }
        return res.status(201).json({
            success: { message: "A new item is created." },
            data: newItem
        })
    }
    catch (error) {
        return res.status(400).json({
            error: { message: "There is an error when creating an item." }
        })
    }
}

const updateItem = async (req, res, next) => {
    const { name, original, current, discount, store, image, category } = req.body
    const { _id } = req.params

    try {
        const updatedItem = { name, original, current, discount, store, image, category }
        return res.status(201).json({
            success: { message: `This route points to the Item page that has ID ${_id}.` },
            data: updatedItem
        })
    }
    catch (error) {
        return res.status(400).json({
            error: { message: `There is an error when updating the item with ID ${_id}.` }
        })
    }
}

const deleteItem = async (req, res, next) => {
    const { _id } = req.params

    try {
        const item = itemsData.filter((item) => item._id !== _id)
        return res.status(200).json({
            success: { message: `The item with ID ${_id} has been deleted.` },
            data: item
        })
    }
    catch (error) {
        return res.status(400).json({
            error: { message: `There is an error when deleting the item with ID ${_id}.` }
        })
    }
}

module.exports = { getAllItems, getItem, createItem, updateItem, deleteItem }