const Mongoose = require('mongoose');

const SeismicDiscProfileSchema = Mongoose.Schema(
  {
    siteId: {
      type: Mongoose.Types.ObjectId,
      ref: 'Site',
    },
    rectangleLineNumber: { type: Number },
    profileType: {
      type: String,
      enum: ['Longitudinal', 'Traversal', 'Line'],
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

const SeismicDiscProfile = Mongoose.model(  'SeismicDiscProfile',  SeismicDiscProfileSchema);
module.exports = SeismicDiscProfile;