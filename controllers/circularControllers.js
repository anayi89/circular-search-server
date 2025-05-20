const circularsData = require("../inventory/circulars")

const getAllCirculars = async (req, res, next) => {
    try {
        const circulars = circularsData
        return res.status(200).json({
            success: { message: "This route points to the Circulars page with all of the circulars." },
            data: circulars
        })
    }
    catch (error) {
        return res.status(400).json({
            error: { message: "Circulars not found. Try again." }
        })
    }
}

const getCircular = async (req, res, next) => {
    const { _id } = req.params
    try {
        const circular = circularsData.find((circular) => circular._id === _id)
        return res.status(200).json({
            success: { message: `This route points to the Book page that has ID ${circular._id}.` },
            data: circular
        })
    }
    catch (error) {
        return res.status(400).json({
            error: { message: "Circular not found. Try again." }
        })
    }
}

const createCircular = async (req, res, next) => {
    const { name, store, date, imageUrl } = req.body

    try {
        const newCircular = { name, store, date, imageUrl }
        return res.status(201).json({
            success: { message: "A new circular is created." },
            data: newCircular
        })
    }
    catch (error) {
        return res.status(400).json({
            error: { message: "There is an error when creating a circular." }
        })
    }
}

const updateCircular = async (req, res, next) => {
    const { name, store, date, imageUrl } = req.body
    const { _id } = req.params

    try {
        const updatedCircular = { name, store, date, imageUrl }
        return res.status(201).json({
            success: { message: `This route points to the Circular page that has ID ${_id}.` },
            data: updatedCircular
        })
    }
    catch (error) {
        return res.status(400).json({
            error: { message: `There is an error when updating the circular with ID ${_id}.` }
        })
    }
}

const deleteCircular = async (req, res, next) => {
    const { _id } = req.params

    try {
        const circular = circularsData.filter((circular) => circular._id !== _id)
        return res.status(200).json({
            success: { message: `The circular with ID ${_id} has been deleted.` },
            data: circular
        })
    }
    catch (error) {
        return res.status(400).json({
            error: { message: `There is an error when deleting the circular with ID ${_id}.` }
        })
    }
}

module.exports = { getAllCirculars, getCircular, createCircular, updateCircular, deleteCircular }