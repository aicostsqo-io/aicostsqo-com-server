const Mongoose = require("mongoose");

const LidarPointCloudSchema = Mongoose.Schema(
  {
    siteId: {
      type: Mongoose.Types.ObjectId,
      ref: "Site",
    },
    vertexId: Number,
    jointSetNumber: Number,
    discontiunityPlaneNumber: Number,
    positionX: {
      type: Number,
      required: true,
    },
    positionY: {
      type: Number,
      required: true,
    },
    positionZ: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);

const LidarPointCloud = Mongoose.model("LidarPointCloud", LidarPointCloudSchema);
module.exports = LidarPointCloud