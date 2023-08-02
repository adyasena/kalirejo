const mongoose = require("mongoose")

const umkmSchema = mongoose.Schema(
  {
    produk: {
      type: String,
      required: true
    },
    deskripsi: {
      type: String,
      required: true
    },
    gambar: {
      type: String,
      required: true
    },
  },
)

module.exports = mongoose.model("UMKM", umkmSchema)