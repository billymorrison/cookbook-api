const app = require("./src/app");
const mongoose = require("mongoose");
const path = require('path');

const APP_PORT = process.env.PORT || 3000;

require('dotenv').config({
    path: path.join(__dirname, './.env'),
  });

mongoose.connect(process.env.DATABASE_CONN, { useNewUrlParser: true });

app.listen(APP_PORT, () => {
    console.log(`Now serving your express app at http://localhost:${APP_PORT}`)
});

