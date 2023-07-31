const asyncHandler = require("express-async-handler")
const { successResponseBuilder } = require('../middleware/responseBuilder.js')
const cloudinary = require("../middleware/cloudinary");
const UMKM = require("../models/umkmModel")

const createUMKM = asyncHandler(async (req, res) => {
  if(!req.body) {
    res.status(400)
    throw new Error("gagal")
  }
  const file = req.files.gambar

  const uploadedResponse = await cloudinary.uploader.upload(file.tempFilePath, {
    upload_preset: "umkmKalirejo",
  });

  const umkm = await UMKM.create({
    produk: req.body.produk,
    deskripsi: req.body.deskripsi,
    gambar: uploadedResponse,
  })
  res.status(200).json(umkm)
})

const readUMKM = async (req, res, next) => {
  try {
    const umkm = await UMKM.find({});
    res.json(successResponseBuilder({ umkm: umkm }));
  } catch (err) {
    next(err);
  }
};

const updateUMKM = asyncHandler(async (req, res) => {
  try {
    const currentUmkm = await UMKM.findById(req.params.id);
    const file = req.files.gambar;

    const umkm = {
      produk: req.body.produk,
      deskripsi: req.body.deskripsi,
    }

    if (req.body.gambar !== '') {
      const gambarId = currentUmkm.gambar.public_id;
      if (gambarId) { 
        await cloudinary.uploader.destroy(gambarId);
      }
      const uploadedResponse = await cloudinary.uploader.upload(file.tempFilePath, {
        upload_preset: "galeriKalirejo",
      });
      umkm.gambar = uploadedResponse;
    }

    const umkmUpdate = await UMKM.findByIdAndUpdate(req.params.id, umkm, { new: true })

    res.status(200).json({
      success: true,
      umkmUpdate
    })
  } 
  catch (error) {
    console.log(error);
  }
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