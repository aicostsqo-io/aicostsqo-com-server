const mongoose = require("mongoose");

const DiscontinuitiesModelSchema = new mongoose.Schema(
  {
    slope: Number,
    slopeAngle: Number,
    slopeDirection: String,
    point: {
      x: Number,
      y: Number,
      z: Number,
    },
    vector: {
      x: Number,
      y: Number,
      z: Number,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const DiscontinuitiesModel = mongoose.model(
  "DiscontinuitiesModel",
  DiscontinuitiesModelSchema
);

module.exports = DiscontinuitiesModel;
