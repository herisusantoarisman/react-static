"use strict";

const express = require("express");
const path = require("path");
const cors = require("cors");
// Google Cloud Defaults to 8080
const PORT = 8080;
const app = express();

// set up a template controller to serve the HTML fragments on /template routes
const templateController = require("./server/controllers/templateController.js");

app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

// `use` will tell Express to default to the templateController for any URL request
// starting with /template
app.use("/template", templateController);

// for any other route default to serving up index.html (this will
// allow browserhistory routing with React Router v3)
app.use("/", (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`App listening on ${PORT}`);
});
