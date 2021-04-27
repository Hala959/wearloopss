
require("dotenv").config();
require("./config/db");

const express = require("express");
// const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

const authUserRoute = require("./routes/auth.route");
const ItemRoute  = require("./routes/Item.route");
const adminRoute    = require("./routes/admin.route");
const userPRoute    = require("./routes/user.route");


// app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/auth", authUserRoute);
app.use("/api/Item", ItemRoute);
app.use("/api/admin", adminRoute);
// app.use(userPRoute);




app.listen(port, () => console.log(`Listening on port ${port}`));