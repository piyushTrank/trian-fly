const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const path = require("path");

// const AppError = require("./utils/appError");
// const globalErrorHandler = require("./controllers/errorController");
// const budgetRouter = require("./routes/budgetRoutes");
const flightRouter = require("./routes/flightRoutes");

const app = express();

//Helmet
//app.use(helmet());
// app.use(
//   helmet.contentSecurityPolicy({
//     directives: {
//       defaultSrc: ["'self'", 'https:', 'http:', 'data:', 'ws:'],
//       baseUri: ["'self'"],
//       fontSrc: ["'self'", 'https:', 'http:', 'data:'],
//       scriptSrc: ["'self'", 'https:', 'http:', 'blob:'],
//       styleSrc: ["'self'", 'https:', 'http:', 'unsafe-inline'],
//     },
//   })
// );

app.options(
  "*",
  cors({
    origin:
      process.env.NODE_ENV === "development"
        ? process.env.APP_URL_FRONT
        : process.env.APP_URL,
    credentials: true,
  })
);

// app.use(cors());

// Add headers
app.use(function (req, res, next) {
  //console.log('Req Heraders', req.headers);
  // Website you wish to allow to connect

  console.log("Testing", req.get("origin"));

  if (process.env.NODE_ENV === "development") {
    res.setHeader("Access-Control-Allow-Origin", process.env.APP_URL);
    // res.setHeader("Access-Control-Allow-Origin", req.get("origin"));
  } else {
    // res.setHeader("Access-Control-Allow-Origin", process.env.APP_URL);
    // res.setHeader("Access-Control-Allow-Origin", req.get("origin"));
  }

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type,Set-Cookie,access-control-allow-credentials,Authorization"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});

//Morgan for Dev only
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//Body Parser - reading data from body into req.body
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));

//Data Sanitization against noSQL query injection
//app.use(mongoSanitize());

//Mounting Router
// app.use("/api/v1/budget", budgetRouter);
app.use("/api/v1/flight", flightRouter);

//If Production then serve from build
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));

  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

// app.all("*", (req, res, next) => {
//   next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
// });

//Global Error Handler

// app.use(globalErrorHandler);

module.exports = app;
