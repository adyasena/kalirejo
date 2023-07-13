const express = require("express")
const router = express.Router()
const { readUMKM, createtUMKM, updateUMKM, deleteUMKM } = require("../controllers/umkmControllers")

router.post("/", createtUMKM)

router.get("/", readUMKM)

router.put("/:id", updateUMKM)

router.delete("/:id", deleteUMKM)

module.exports = router