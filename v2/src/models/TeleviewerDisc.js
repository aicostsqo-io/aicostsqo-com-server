const Mongoose = require('mongoose');

const TeleviewerDiscSchema = Mongoose.Schema(
  {
    siteId: {
      type: Mongoose.Types.ObjectId,
      ref: 'Site',
    },
    dip: Number,
    dipDirection: Number,
    pX: Number,
    pY: Number,
    pZ: Number,
    nX: Number,
    nY: Number,
    nZ: Number,
    holeNumber: Number,
    typeOfHole: String,
    imageOrMeshOfFractureInterpolation: String,
    explanation: String,
    zAdjust: Number,
  },
  { timestamps: true, versionKey: false }
);

const TeleviewerDisc = Mongoose.model('TeleviewerDisc', TeleviewerDiscSchema);
module.exports = TeleviewerDisc;