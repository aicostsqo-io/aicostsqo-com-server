const Mongoose = require("mongoose");

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
