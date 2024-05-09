import express from "express";

const app = express()

const port = process.env.PORT || 4000

app.get("/", (req, res) => {
  res.json({message: "OK!"})
})

app.listen(port)
