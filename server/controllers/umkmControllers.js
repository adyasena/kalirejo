const asyncHandler = require("express-async-handler")

const createtUMKM = asyncHandler(async (req, res) => {
  if(!req.body) {
    res.status(400)
    throw new Error("gagal")
  }
  console.log(req.body)
  res.status(200).json({ fak: "cr" })
})

const readUMKM = asyncHandler(async (req, res) => {
  res.status(200).json({ fak: "lmao" })
})

const updateUMKM = asyncHandler(async (req, res) => {
  res.status(200).json({ fak: "up" })
})

const deleteUMKM = asyncHandler(async (req, res) => {
  res.status(200).json({ fak: "dd" })
})

module.exports = {
  readUMKM, createtUMKM, updateUMKM, deleteUMKM
}