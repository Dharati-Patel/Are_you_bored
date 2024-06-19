import express from "express";
import cors from "cors";
import fs from "fs";

const app = express();

let { PORT, CROSS_ORIGIN } = process.env;

PORT = PORT || 8081;

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

app.get("/", (_req, res) => {
  res.send("HELLO WORLD");
});

function readActivities() {
  const activityFile = fs.readFileSync("./data/activities.json");
  const activityData = JSON.parse(activityFile);
  return activityData;
}

app.get("/activity", (_req, res) => {
  const activityData = readActivities();
  res.json(activityData);
});

app.get("/activity/random", (_req, res) => {
  const activityData = readActivities();
  const randomIndex = Math.floor(Math.random() * activityData.length);
  const randomActivity = activityData[randomIndex];
  res.json(randomActivity);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
