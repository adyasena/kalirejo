const express = require("express")
const router = express.Router()
const { readUMKM, createUMKM, updateUMKM, deleteUMKM } = require("../controllers/umkmControllers")

router.post("/", createUMKM)

router.get("/", readUMKM)

router.put("/:id", updateUMKM)

router.delete("/:id", deleteUMKM)

module.exports = router