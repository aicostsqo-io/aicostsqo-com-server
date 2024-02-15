const Mongoose = require("mongoose");

const ProjectSchema = new Mongoose.Schema(
  {
    projectName: String,
    userId: { type: Mongoose.Schema.Types.ObjectId, ref: "Company" },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Project = Mongoose.model("Project", ProjectSchema);

module.exports = Project;
