// const express = require('express');
import express from "express";
import mongoose from "mongoose";
// const mongoose = require('mongoose');
import bodyParser from "body-parser";
// const bodyParser = require('body-parser');
import multer from "multer";
// const multer = require('multer');
import path from "path";
// const path = require('path');
import { setAppRoutes } from "./src/shared/utils/setAppRoutes";
import { DbService } from "./src/shared/database/db.service";

const cors = require("cors");

require("dotenv").config();

const db = DbService.connect();

const app = express();

// Middlewares
app.use(
  cors({
    origin: process.env.CLIENT_APP_ROOT_URL,
    credentials: true,
  })
);
app.use(multer({ dest: path.join(__dirname, ".", "/uploads/") }).any());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

// Swagger
const swaggerUi = require("swagger-ui-express");
const swaggerJSDoc = require("swagger-jsdoc");
const YAML = require("yamljs");
const swaggerDocument = YAML.load("./src/openapi.yaml");

// Swagger UI
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Routes
setAppRoutes(app);

/* final catch-all route to index.html defined last */
app.get("/*", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// Catch 404 errors and forward them to error handler
app.use((req, res, next) => {
  const err = new Error("Not Found");
  // err.status = 404;
  next(err);
});

// Error Handler function
app.use((err: any, req: any, res: any, next: any) => {
  // const error = app.get('env') === 'development' ? err : {};
  const error = err;
  const status = err.status || 500;
  console.log(err);
  // Respond to client
  res.status(status).json({
    error: {
      message: error.message,
    },
  });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));

// var db;

// MongoClient.connect('mongodb://localhost:27017', (err, client) => {
//     if (err) return console.log(err)
//     db = client.db('desi_mingle_dev');
//     app.listen(3000, () => {
//         console.log('listening on 3000')
//     })
// });
