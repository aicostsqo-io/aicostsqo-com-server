const express = require("express");
// const helmet = require("helmet");
// const csp = require("helmet-csp");
const cors = require("cors");
const path = require("path");

const config = require("./config");
const loaders = require("./loaders");

// Routes
const {
  CompanyRoutes,
  SiteRoutes,
  ProjectRoutes,
  FieldRouter,
} = require("./routes");

const handleResponse = require("./middlewares/handleResponseMiddleware");

config();
loaders();

const app = express();
const publicPath = path.join(__dirname, "..", "..", "public");

app.use(express.json());
// app.use(helmet());

// app.use(
//   csp({
//     directives: {
//       defaultSrc: ["'self'"],
//       scriptSrc: [
//         "'self'",
//         "https://polyfill.io",
//         "https://maps.googleapis.com",
//         "'unsafe-inline'",
//       ],
//       // add any other directives as needed
//     },
//     reportOnly: false, // set to true to only report CSP violations without blocking them
//     // add any other options as needed
//   })
// );

app.use(cors());
app.use(express.static(publicPath));

app.listen(process.env.APP_PORT, () => {
  app.use(handleResponse);
  app.use("/company", CompanyRoutes);
  app.use("/site", SiteRoutes);
  app.use("/project", ProjectRoutes);
  app.use("/field", FieldRouter);

  app.get("/", (req, res) => {
    res.sendFile(path.join(publicPath, "index.html"));
  });
  app.get("*", (req, res) => {
    res.sendFile(path.join(publicPath, "404.html"));
  });
});
