const asyncHandler = require("express-async-handler")
const { successResponseBuilder } = require('../middleware/responseBuilder.js')
const cloudinary = require("../middleware/cloudinary");
const Galeri = require("../models/galeriModel")
const multer = require("multer")
const streamifier = require("streamifier");

const storage = multer.memoryStorage();
const upload = multer({ storage });
const uploadMiddleware = upload.single("file");

function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}
async function handler(req, res) {
  await runMiddleware(req, res, uploadMiddleware);
  console.log(req.file.buffer);
  const stream = await cloudinary.uploader.upload_stream(
    {
      folder: "galeri",
    },
    (error, result) => {
      if (error) return console.error(error);
      res.status(200).json(result);
    }
  );
  streamifier.createReadStream(req.file.buffer).pipe(stream);
}

const createGaleri = asyncHandler(async (req, res) => {
  if(!req.body) {
    res.status(400)
    throw new Error("gagal")
  }
  // const file = req.files.gambar

  // const uploadedResponse = await cloudinary.uploader.upload_stream(file.tempFilePath, {
  //   upload_preset: "galeriKalirejo",
  // }); 
  const file = req.files.gambar;
  await cloudinary.uploader.upload(file.tempFilePath,(err,result)=>{
    galeri = new Galeri({
      penulis: req.body.penulis,
      judul: req.body.judul,
      teks: req.body.teks,
      gambar: result,
    });
    galeri.save()
    .then(result=>{
      res.status(200).json({
        new_product:result
      })
    })
    .catch(err=>{
      res.status(500).json({
        error:err
      })
    })
  });
  // await runMiddleware(req, res, uploadMiddleware);
  // console.log(req.file.buffer);
  // const stream = await cloudinary.uploader.upload_stream(
  //   {
  //     folder: "galeri",
  //   },
  //   (error, result) => {
  //     if (error) return console.error(error);
  //     res.status(200).json(result);
  //   }
  // );
  // const uploadedResponse = streamifier.createReadStream(req.file.buffer).pipe(stream);

  // const galeri = await Galeri.create({
  //   penulis: req.body.penulis,
  //   judul: req.body.judul,
  //   teks: req.body.teks,
  //   gambar: uploadedResponse,
  // })
  // res.status(200).json(galeri)
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
  console.log(req.params.id);
  const file = req.files.gambar;
  cloudinary.uploader.upload(file.tempFilePath,(err,result)=>{
    Galeri.findOneAndUpdate({_id:req.params.id},{
      $set:{
        penulis: req.body.penulis,
        judul: req.body.judul,
        teks: req.body.teks,
        gambar: result,
      }
    })
    .then(result=>{
      res.status(200).json({
        updated_product:result
      })
    })
    .catch(err=>{
      console.log(err);
      res.status(500).json({
        error:err
      })
    })
  })
  // try {
  //   const currentGaleri = await Galeri.findById(req.params.id);
  //   const file = req.files.gambar;

  //   const galeri = {
  //     penulis: req.body.penulis,
  //     judul: req.body.judul,
  //     teks: req.body.teks,
  //   }

  //   // if (req.body.gambar !== '') {
  //   //   const gambarId = currentGaleri.gambar.public_id;
  //   //   if (gambarId) {
  //   //     await cloudinary.uploader.destroy(gambarId);
  //   //   }
  //   //   const uploadedResponse = await cloudinary.uploader.upload_stream(file, {
  //   //     upload_preset: "galeriKalirejo",
  //   //   });
  //   //   galeri.gambar = uploadedResponse;
  //   // }

  //   const galeriUpdate = await Galeri.findByIdAndUpdate(req.params.id, galeri, { new: true }).select({ gambar: 0 })

  //   res.status(200).json({
  //     success: true,
  //     galeriUpdate
  //   })
  // } 
  // catch (error) {
  //   console.log(error);
  // }
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