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

app.use(cors());
app.use(express.static(publicPath));

app.listen(process.env.APP_PORT, () => {
  console.log(`Proje ayağa kalktı. Port: ${process.env.APP_PORT}`);
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
