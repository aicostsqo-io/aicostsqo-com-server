const express = require("express");
const router = express.Router();

const ProjectController = require("../controllers/ProjectController");
const authenticate = require("../middlewares/authenticate");

router.use(authenticate);
router.route("/create").post(ProjectController.create);
router.route("/getAllByUserId").get(ProjectController.getAllByUserId);
router.route("/getById/:projectId").get(ProjectController.getById);
router.route("/removeById").delete(ProjectController.removeById);

module.exports = router;
