const asyncHandler = require("express-async-handler")

const UMKM = require("../models/umkmModel")

const createUMKM = asyncHandler(async (req, res) => {
  if(!req.body) {
    res.status(400)
    throw new Error("gagal")
  }

  const umkm = await UMKM.create({
    nama: req.body.nama
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