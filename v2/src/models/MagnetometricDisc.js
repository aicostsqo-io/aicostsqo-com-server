const Mongoose = require('mongoose');

const MagnetometricDiscProfileSchema = Mongoose.Schema(
  {
    siteId: {
      type: Mongoose.Types.ObjectId,
      ref: 'Site',
    },
    rectangleLineNumber: { type: Number },
    profileType: {
      type: String,
      enum: ['Longitudinal', 'Traversal'],
    },
    crackProfileNumber: Number,
    typeOfCrack: { type: String },
    typeOfDisc: { type: String },
    dip: { type: Number },
    dipDirection: { type: Number },
    mapReferenceSystem: { type: String },
    startingVertexX: Number,
    startingVertexY: Number,
    startingVertexZ: Number,
    endVertexX: Number,
    endVertexY: Number,
    endVertexZ: Number,
    nX: Number,
    nY: Number,
    nZ: Number,
  },
  { timestamps: true, versionKey: false }
);

const MagnetometricDiscProfile = Mongoose.model('MagnetometricDisc',  MagnetometricDiscProfileSchema);
module.exports = MagnetometricDiscProfile