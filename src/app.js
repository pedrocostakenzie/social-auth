import "dotenv/config";
import express from "express";
import router from "./routes/auth";

const app = express();
app.use(express.json());

app.use("", router);

app.get("/", async (req, res) => {
  res.send(`
  <a href="/login/google" target="_blank">Login Google</a> <br/>
  <a href=/login/github target="_blank">Login GitHub</a> <br/>
  `);
});

export default app;
