const mongoose = require("mongoose");

const RpDiscModelSchema =new mongoose.Schema(
  {
    rpId: {
      type: mongoose.Types.ObjectId,
      ref: 'rps',
    },
    dip: {
      type: Number,
      required: false,
    },
    dipDirect: {
      type: Number,
      required: false,
    },
    pX: {
      type: Number,
      required: false,
    },
    pY: {
      type: Number,
      required: false,
    },
    pZ: {
      type: Number,
      required: false,
    },
    nX: {
      type: Number,
      required: false,
    },
    nY: {
      type: Number,
      required: false,
    },
    nZ: {
      type: Number,
      required: false,
    },
    type: {
      type: String,
      enum: ['Deterministic', 'Stochastic'],
      required: false,
    },
  },
  { timestamps: true, versionKey: false }
);

const RPDiscModel = mongoose.model("RPDiscModel", RpDiscModelSchema);
module.exports = RPDiscModel;