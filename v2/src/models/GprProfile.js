const Mongoose = require('mongoose');

const GprProfileSchema = Mongoose.Schema(
  {
    siteId: {
      type: Mongoose.Types.ObjectId,
      ref: 'Site',
    },
    rectangleLineNumber: Number,
    profileType: {
      type: String,
      enum: ['Longitudinal', 'Traversal'],
    },
    longitudinalProfileNumber: Number,
    traversalProfileNumber: Number,
    distance: Number,
    spacing: Number,
    numberOfProfile: Number,
    startingVertexX: Number,
    startingVertexY: Number,
    startingVertexZ: Number,
    endVertexX: Number,
    endVertexY: Number,
    endVertexZ: Number,
    frequency: Number,
    filname: {
      type: String,
      default: `gprProfiles/default-gprProfile.jpeg`,
    },
  },
  { timestamps: true, versionKey: false }
);


const GprProfile = Mongoose.model('GprProfile', GprProfileSchema);
module.exports = GprProfile