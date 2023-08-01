const express = require("express")
const mongoose = require("mongoose")
const colors = require("colors")
const dotenv = require("dotenv").config()
const cors = require('cors');
const { errorHandler } = require("./middleware/errorMiddleware")
const port = process.env.PORT
const mongodb_uri = process.env.MONGODB_URI
const fileupload = require('express-fileupload'); 

const app = express()

mongoose
  .connect(mongodb_uri)
  .then(() => console.log('Connected to mongodb'))
  .catch((err) => {
    console.error(`Can't connect to mongodb`);
    console.error(err);
    process.exit(1);
  });

mongoose.connection.once('open', () => {
  app.use(fileupload({useTempFiles: true}))
  app.use(cors({
    methods: ['GET', 'PUT', 'POST', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  }));
  app.use(express.json())
  app.use(express.urlencoded({ extended: false }))
  app.use(express.static('public'));

  app.use("/umkm", require("./routes/umkmRoutes"))
  app.use("/wisata", require("./routes/wisataRoutes"))
  app.use("/galeri", require("./routes/galeriRoutes"))

  app.use(errorHandler)

  app.listen(port, () => console.log(`Server ${port}`))
});