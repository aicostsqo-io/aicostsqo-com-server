const express = require("express");
const router = express.Router();

const FieldController = require("../controllers/FieldController");
// const authenticate = require("../middlewares/authenticate");

// router.use(authenticate);
router.route("/create").post(FieldController.create);
router.route("/getAllByProjectId").post(FieldController.getAllByProjectId);
router.route("/getById").post(FieldController.getById);
// router.route("/removeById").delete(ProjectController.removeById);

module.exports = router;
