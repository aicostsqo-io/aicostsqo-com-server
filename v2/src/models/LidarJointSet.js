const Mongoose = require("mongoose");

const LidarJointSetSchema = Mongoose.Schema(
  {
    siteId: {
      type: Mongoose.Types.ObjectId,
      ref: "sites",
      required: true,
    },
    discontinuitySetId: Number,
    shape: String,
    dip: Number,
    dipDirection: Number,
    expectationTraceLength: Number,
    spacing: Number,
    fisherK: Number,
    frictionAngle: Number,
    fractureIntensity: String,
    positionX: Number,
    positionY: Number,
    positionZ: Number,
    numberOfFracture: Number,
  },
  { timestamps: true, versionKey: false }
);

const LidarJointSet = Mongoose.model("LidarJointSet", LidarJointSetSchema);
module.exports = LidarJointSet