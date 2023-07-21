const mongoose = require("mongoose")

const umkmSchema = mongoose.Schema(
  {
    nama: {
      type: String,
      required: true
    },
    produk: {
      type: String,
      required: true
    },
    alamat: {
      type: String,
      required: true
    },
    dusun: {
      type: String,
      required: true
    },
    noHP: {
      type: String,
      required: true
    },
    img: {
      data: Buffer,
      contentType: String,
    },
  },
)

module.exports = mongoose.model("UMKM", umkmSchema)