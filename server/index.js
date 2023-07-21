const express = require("express")
const mongoose = require("mongoose")
const colors = require("colors")
const dotenv = require("dotenv").config()
const { errorHandler } = require("./middleware/errorMiddleware")
const port = process.env.PORT
const mongodb_uri = process.env.MONGODB_URI

const app = express()

mongoose
  .connect(mongodb_uri)
  .then(() => console.log('Connected to mongodb'))
  .catch((err) => {
    console.error(`Can't connect to mongodb`);
    console.error(err);
    process.exit(1);
  });

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use("/api/umkm", require("./routes/umkmRoutes"))
app.use("/api/wisata", require("./routes/wisataRoutes"))

app.use(errorHandler)

app.listen(port, () => console.log(`Server ${port}`))