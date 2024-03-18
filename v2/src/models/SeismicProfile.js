const Mongoose = require('mongoose');

const SeismicProfileSchema = Mongoose.Schema(
  {
    siteId: {
      type: Mongoose.Types.ObjectId,
      ref: 'Site',
    },
    seismicMeasurementId: Number,
    shape: {
      type: String,
      enum: ['Line', 'Mesh'],
    },
    profileNumber: Number,
    endsOfSeismicProfile: Number,
    seismicProfileDirectory: String,
    explanation: String,
  },
  { timestamps: true, versionKey: false }
);

const SeismicProfile = Mongoose.model('SeismicProfile', SeismicProfileSchema);
module.exports = SeismicProfile;