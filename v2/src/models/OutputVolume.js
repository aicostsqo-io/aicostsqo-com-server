const Mongoose = require('mongoose');

const OutputVolumeSchema = Mongoose.Schema(
  {
    rpId: {
      type: Mongoose.Types.ObjectId,
      ref: 'Rp',
    },
    polyhedronId: { type: Number },
    volumeTheoric: { type: Number },
    volumeQuarry: { type: Number },
    totalVolumeOfMaxQs: { type: Number },
  },
  { timestamps: true, versionKey: false }
);

const OutputVolumeModel = Mongoose.model('OutputVolume', OutputVolumeSchema);

module.exports = OutputVolumeModel;