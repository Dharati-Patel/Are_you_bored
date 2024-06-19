import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();

let { PORT, CROSS_ORIGIN } = process.env;

PORT = PORT || 8081;

app.use(cors({ origin: CROSS_ORIGIN }));
app.use(express.json());

app.get("/", (_req, res) => {
  res.send("HELLO WORLD");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
