const Mongoose = require('mongoose');

const ResistivitySchema = Mongoose.Schema(
  {
    siteId: {
      type: Mongoose.Types.ObjectId,
      ref: 'Site',
      required: true,
    },
    resistivityMeasurementId: {
      type: Number,
    },
    profileNumber: Number,
    latitudeMin: Number,
    longitudeMin: Number,
    altitudeMin: Number,
    latitudeMax: Number,
    longitudeMax: Number,
    altitudeMax: Number,
    depth: Number,
    distance: Number,
    resistivity: Number,
    resistivityProfileDirectory: String,
    explanation: String,
  },
  { timestamps: true, versionKey: false }
);

const Resistivity = Mongoose.model('Resistivity', ResistivitySchema);
module.exports = Resistivity;