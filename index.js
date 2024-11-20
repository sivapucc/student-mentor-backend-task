import express from "express";
import { studentsRouter } from "./Routers/Students.js";

const app = express();

app.use(express.json());

app.use("/", studentsRouter);
app.get("/", (req, res) => {
  res.send("working fine...");
});

app.listen(9090, () => console.log("server running in localhost:9090"));
