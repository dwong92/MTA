const path = require("path");

const express = require("express");

const app = express();
const PORT = 3000;

const ApiController = require("./src/apiController");

// app.use(express.static(path.resolve(__dirname, "../client/public")));

app.get("/", (req, res, next) => {
  res
    .status(200)
    .sendFile(path.resolve(__dirname, "../client/public/index.html"));
});

app.get("/", (req, res, next) => {
  res.status(200);
});

app.get("/subway", ApiController.getSubwayStatus, (req, res, next) => {
  res.status(200).json(res.locals.test);
});

app.all("*", (req, res) => {
  res.sendStatus(404);
});

app.use((err, req, res, next) => {
  const defaultError = {
    log: "Unknown error found in some middleware function",
    status: 500,
    message: { err: "An error occured" },
  };

  const errorObj = Object.assign(defaultError, err);
  res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
