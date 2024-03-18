const Mongoose = require("mongoose");

const LidarTraceSchema = Mongoose.Schema(
  {
    siteId: {
      type: Mongoose.Types.ObjectId,
      ref: "Site",
      required: true,
    },
    traceId: Number,
    shape: String,
    dip: Number,
    dipDirection: Number,
    persistence: String,
    traceInitialVertexX: Number,
    traceInitialVertexY: Number,
    traceInitialVertexZ: Number,
    traceEndingVertexX: Number,
    traceEndingVertexY: Number,
    traceEndingVertexZ: Number,
  },
  { timestamps: true, versionKey: false }
);

const LidarTrace = Mongoose.model("LidarTrace", LidarTraceSchema);
module.exports = LidarTrace