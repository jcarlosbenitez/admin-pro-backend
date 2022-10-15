// getting-started.js

require("dotenv").config();
const mongoose = require("mongoose");


const dbConnection = async () => {
  try {
    await mongoose.connect(
      process.env.DB_CNN
    );
  } catch (e) {
    console.error(e);

    throw new Error("Error al iniciar base de datos");
  }
  console.log('DB Online')
};

module.exports = {
    dbConnection: dbConnection
}