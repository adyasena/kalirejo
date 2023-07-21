const asyncHandler = require("express-async-handler")

const UMKM = require("../models/umkmModel")
const multer = require("multer")
const fs = require("fs")

const storage = multer.diskStorage ({
  destination:(req,file,cb) => {
    cb(null, "uploads")
  },
  filename:(req,file,cb) => {
    cb(null,file.originalname)
  }
})

const upload = multer({storage: storage})

const createUMKM = asyncHandler(async (req, res) => {
  if(!req.body) {
    res.status(400)
    throw new Error("gagal")
  }

  const umkm = await UMKM.create({
    nama: req.body.nama,
    produk: req.body.produk,
    alamat: req.body.alamat,
    dusun: req.body.dusun,
    noHP: req.body.noHP,
    img: {
      data: fs.readFileSync("uploads/", req.file.filename),
      contentType: "image/png"
    },
  })
  res.status(200).json(umkm)
})

const readUMKM = asyncHandler(async (req, res) => {
  const umkm = await UMKM.find()
  res.status(200).json(umkm)
})

const updateUMKM = asyncHandler(async (req, res) => {
  const umkm = await UMKM.findById(req.params.id)

  if(!umkm) {
    res.status(400)
    throw new Error("not found")
  }

  const updatedUMKM = await UMKM.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })

  res.status(200).json(updatedUMKM)
})

const deleteUMKM = asyncHandler(async (req, res) => {
  const umkm = await UMKM.findById(req.params.id)

  if(!umkm) {
    res.status(400)
    throw new Error("not found")
  }

  await UMKM.findOneAndDelete(req.params.id);

  res.status(200).json({ id: req.params.id })
})



module.exports = {
  readUMKM, createUMKM, updateUMKM, deleteUMKM
}