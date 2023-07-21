const express = require("express")
const router = express.Router()
const { createWisata, readWisata, updateWisata, deleteWisata } = require("../controllers/wisataControllers")

router.post("/", createWisata)

router.get("/", readWisata)

router.put("/:id", updateWisata)

router.delete("/:id", deleteWisata)

module.exports = router