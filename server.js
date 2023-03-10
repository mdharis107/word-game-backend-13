const express = require("express");
const cors = require("cors");
const { connection } = require("./config/db");
const { playerRoute } = require("./routes/player.route");
const { playzoneRoute } = require("./routes/playzone.route");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("This is the Home Page");
});

app.use("/players",playerRoute);

app.use("/playzone",playzoneRoute)

app.listen(PORT, async () => {
  try {
    await connection;
    console.log("Connected to db");
  } catch (err) {
    console.log("Error connecting to DB");
    console.log(err);
  }
  console.log(`listening on PORT ${PORT}`);
});
