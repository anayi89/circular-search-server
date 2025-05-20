const express = require("express")
const router = express.Router()
const { getAllItems, getItem, createItem, updateItem, deleteItem } = require("../controllers/itemControllers")

router.get("/", getAllItems)

router.get("/:id", getItem)

router.post("/create/new", createItem)

router.put("/update/:id", updateItem)

router.delete("/delete/:id", deleteItem)

module.exports = router