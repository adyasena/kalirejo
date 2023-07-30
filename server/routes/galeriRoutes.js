const express = require("express")
const router = express.Router()
const { readGaleri, createGaleri, updateGaleri, deleteGaleri } = require("../controllers/galeriControllers")

router.post("/", createGaleri)

router.get("/", readGaleri)

router.put("/:id", updateGaleri)

router.delete("/:id", deleteGaleri)

module.exports = router