const express = require("express");
const mongoose = require("mongoose");
const PostingSchema = require("./model/postSchema");
const cors = require("cors");
require("dotenv").config();
require("./db/conn");
const router = require("./routes/routes");

const app = express();

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

// app.use(cors())

app.use(express.json());

app.use(router);

app.put("/post/:id", async (req, res) => {
  const documentId = req.params.id;
  const updateData = req.body; // Assuming the update data is in the request body
  console.log(updateData);

  PostingSchema.findOneAndUpdate({ _id: documentId }, updateData)
    .then(() => {
      console.log("Document updated successfully");
      res.json({ message: "Document updated successfully" });
    })
    .catch((err) => {
      console.error("Error updating the document", err);
      res.status(500).json({ error: "An error occurred" });
    });
});

app.get("/data", async (req, res) => {
  const data = await PostingSchema.find();
  return res.json(data);
});

const port = 5000;

app.listen(port, () => {
  console.log("Server Loading || 5000");
});
