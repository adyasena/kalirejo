const express = require("express")
const router = express.Router()
const multer = require("multer")
const UMKM = require("../models/umkmModel")
const fs = require("fs")
const { readUMKM, createUMKM, updateUMKM, deleteUMKM } = require("../controllers/umkmControllers")

const storage = multer.diskStorage ({
  destination:(req,file,cb) => {
    cb(null, "uploads")
  },
  filename:(req,file,cb) => {
    cb(null,file.originalname)
  }
})

const upload = multer({storage: storage})

// router.post("/", createUMKM)
router.post("/", upload.single("test"), (req, res) => {
  const saveImage =  UMKM({
    nama: req.body.nama,
    img: {
      data: fs.readFileSync("uploads/" + req.file.filename),
      contentType: "image/png",
    },
  });
  saveImage
    .save()
    .then((res) => {
      console.log("image is saved");
    })
    .catch((err) => {
      console.log(err, "error has occur");
    });
    res.send('image is saved')
});

router.get("/", readUMKM)

router.put("/:id", updateUMKM)

router.delete("/:id", deleteUMKM)

module.exports = router