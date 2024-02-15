const Mongoose = require("mongoose");
const FieldModel = require("./FieldModels/FieldModel");
const RPModel = require("./FieldModels/RPModel");

const FieldSchema = new Mongoose.Schema(
  {
    projectId: { type: Mongoose.Schema.Types.ObjectId, ref: "Project" },
    fieldModel: { type: Mongoose.Schema.Types.ObjectId, ref: "FieldModel" },
    rpModel: [{ type: Mongoose.Schema.Types.ObjectId, ref: "RPModel" }],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Field = Mongoose.model("Field", FieldSchema);

module.exports = Field;
