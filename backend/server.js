// backend/server.js
const express = require("express");
const cors = require("cors");
const clientsRouter = require("./routes/clients");
const tattooArtistsRouter = require("./routes/tattooArtists");
const appointmentsRouter = require("./routes/appointments");

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use("/clients", clientsRouter);
app.use("/tattoo-artists", tattooArtistsRouter);
app.use("/appointments", appointmentsRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
