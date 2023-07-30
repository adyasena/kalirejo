const mongoose = require("mongoose")

const galeriSchema = mongoose.Schema(
  {
    penulis: {
      type: String,
      required: true
    },
    judul: {
      type: String,
      required: true
    },
    teks: {
      type: String,
      required: true
    },
    gambar: {
      type: String,
      required: true
    },
  },
)

module.exports = mongoose.model("Galeri", galeriSchema)