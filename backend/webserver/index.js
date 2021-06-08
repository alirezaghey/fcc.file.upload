const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
require("dotenv").config();

const app = express();
app.use(cors());
const staticRoot = path.join(__dirname, "public/static/");
app.use(express.static(staticRoot));
const upload = multer();

app.use((req, res, next) => {
  res.sendFile(path.join(staticRoot, "index.html"));
  next();
});
// app.get("/", (req, res) => {
//   res.json({ hello: "hello" });
// });
app.get("/api/fileanalyse", (req, res) => {
  res.json({ hello: "hahah" });
});
app.post("/api/fileanalyse", upload.single("upfile"), (req, res) => {
  const result = {
    name: req.file.originalname,
    type: req.file.mimetype,
    size: req.file.size,
  };
  console.log("hello", result);
  return res.json(result);
});

const port = process.env["EXPRESS_PORT"];
app.listen(port || 3000, () => {
  console.log(`Listening on port ${port || 3000}`);
});
