const asyncHandler = require("express-async-handler")

const Wisata = require("../models/wisataModel")

const createWisata = asyncHandler(async (req, res) => {
  if(!req.body) {
    res.status(400)
    throw new Error("gagal")
  }

  const wisata = await Wisata.create({
    nama: req.body.nama,
    lokasi: req.body.lokasi,
    htm: req.body.htm,
    jam: req.body.jam,
    fasilitas: req.body.fasilitas
  })
  res.status(200).json(wisata)
})

const readWisata = asyncHandler(async (req, res) => {
  const wisata = await Wisata.find()
  res.status(200).json(wisata)
})

const updateWisata = asyncHandler(async (req, res) => {
  const wisata = await Wisata.findById(req.params.id)

  if(!wisata) {
    res.status(400)
    throw new Error("not found")
  }

  const updatedWisata = await Wisata.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })

  res.status(200).json(updatedWisata)
})

const deleteWisata = asyncHandler(async (req, res) => {
  const wisata = await Wisata.findById(req.params.id)

  if(!wisata) {
    res.status(400)
    throw new Error("not found")
  }

  await Wisata.findOneAndDelete(req.params.id);

  res.status(200).json({ id: req.params.id })
})

module.exports = {
  createWisata, readWisata, updateWisata, deleteWisata
}