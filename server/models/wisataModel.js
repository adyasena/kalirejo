const mongoose = require("mongoose")

const wisataSchema = mongoose.Schema(
  {
    nama: {
      type: String,
      required: true
    },
    lokasi: {
      type: String,
      required: true
    },
    htm: {
      type: Number,
      required: true
    },
    jam: {
      type: String,
      required: true
    },
    fasilitas: {
      type: String,
      required: true
    },
  },
)

module.exports = mongoose.model("Wisata", wisataSchema)