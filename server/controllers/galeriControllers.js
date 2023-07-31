const asyncHandler = require("express-async-handler")
const { successResponseBuilder } = require('../middleware/responseBuilder.js')
const cloudinary = require("../middleware/cloudinary");
const Galeri = require("../models/galeriModel")

const createGaleri = asyncHandler(async (req, res) => {
  if(!req.body) {
    res.status(400)
    throw new Error("gagal")
  }
  const file = req.files.gambar

  const uploadedResponse = await cloudinary.uploader.upload(file.tempFilePath, {
    upload_preset: "galeriKalirejo",
  });

  const galeri = await Galeri.create({
    penulis: req.body.penulis,
    judul: req.body.judul,
    teks: req.body.teks,
    gambar: uploadedResponse,
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
  try {
    const currentGaleri = await Galeri.findById(req.params.id);
    const file = req.files.gambar;

    const galeri = {
      penulis: req.body.penulis,
      judul: req.body.judul,
      teks: req.body.teks,
    }

    if (req.body.gambar !== '') {
      const gambarId = currentGaleri.gambar.public_id;
      if (gambarId) {
        await cloudinary.uploader.destroy(gambarId);
      }
      const uploadedResponse = await cloudinary.uploader.upload(file.tempFilePath, {
        upload_preset: "galeriKalirejo",
      });
      galeri.gambar = uploadedResponse;
    }

    const galeriUpdate = await Galeri.findByIdAndUpdate(req.params.id, galeri, { new: true })

    res.status(200).json({
      success: true,
      galeriUpdate
    })
  } 
  catch (error) {
    console.log(error);
  }
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