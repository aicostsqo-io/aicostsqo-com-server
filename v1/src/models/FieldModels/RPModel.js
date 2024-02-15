const mongoose = require("mongoose");
const DiscontinuitiesModel = require("./DiscontinuitiesModel");

const RPModelSchema = new mongoose.Schema(
  {
    name: String,
    slopeAngle: Number,
    crepeAngle: Number,
    volume: Number,
    size: {
      x: Number,
      y: Number,
      z: Number,
    },
    position: {
      x: Number,
      y: Number,
      z: Number,
    },
    rotation: {
      x: Number,
      y: Number,
      z: Number,
    },
    discontinuitiesModelId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "DiscontinuitiesModel",
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const RPModel = mongoose.model("RPModel", RPModelSchema);

module.exports = RPModel;
