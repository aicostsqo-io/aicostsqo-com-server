const mongoose = require("mongoose");

const GeoJSONSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      enum: ["Polygon"],
      required: true,
    },
    coordinates: {
      type: [[[Number]]],
      required: true,
    },
  },
  {
    _id: false,
  }
);

const FieldModelSchema = new mongoose.Schema(
  {
    geometry: {
      type: GeoJSONSchema,
      required: true,
    },
    properties: {
      fieldName: String,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const FieldModel = mongoose.model("FieldModel", FieldModelSchema);

module.exports = FieldModel;
