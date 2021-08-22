import cors from "cors";
import http from "http";
import express from "express";
import jwt from "jsonwebtoken";
import bodyParser from "body-parser";

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  /**
   * TO BE REFACTORED LATER
   */
  if (email === "firmino.changani@gmail.com" && password === "123") {
    const token = jwt.sign({ email }, String(Date.now()), { expiresIn: "1d" });
    return res.json({ email, token, name: "Firmino Changani" });
  }

  return res.status(401).json({ message: "Please verify your auth details." });
});

http.createServer(app).listen(Number(process.env.PORT) || 4000, () => {
  console.log("Server is running");
});
