const asyncHandler = require("express-async-handler")
const { successResponseBuilder } = require('../middleware/responseBuilder.js')
const Galeri = require("../models/galeriModel")

const createGaleri = asyncHandler(async (req, res) => {
  if(!req.body) {
    res.status(400)
    throw new Error("gagal")
  }

  const galeri = await Galeri.create({
    penulis: req.body.penulis,
    judul: req.body.judul,
    teks: req.body.teks,
    gambar: req.body.gambar,
  })
  res.status(200).json(galeri)
})

const readGaleri = async (req, res, next) => {
  try {
    const galeri = await Galeri.find({});
    res.json(successResponseBuilder({ galeri: galeri }));
  } catch (err) {
    next(err);
  }
};

const updateGaleri = asyncHandler(async (req, res) => {
  const galeri = await Galeri.findById(req.params.id)

  if(!galeri) {
    res.status(400)
    throw new Error("not found")
  }

  const updatedGaleri = await Galeri.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })

  res.status(200).json(updatedGaleri)
})

const deleteGaleri = asyncHandler(async (req, res) => {
  const galeri = await Galeri.findById(req.params.id)

  if(!galeri) {
    res.status(400)
    throw new Error("not found")
  }

  await Galeri.findOneAndDelete(req.params.id);

  res.status(200).json({ id: req.params.id })
})



module.exports = {
  readGaleri, createGaleri, updateGaleri, deleteGaleri
}