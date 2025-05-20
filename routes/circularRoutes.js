const express = require("express")
const router = express.Router()
const { getAllCirculars, getCircular, createCircular, updateCircular, deleteCircular } = require("../controllers/circularControllers")

router.get("/", getAllCirculars)

router.get("/:id", getCircular)

router.post("/create/new", createCircular)

router.put("/update/:id", updateCircular)

router.delete("/delete/:id", deleteCircular)

module.exports = router