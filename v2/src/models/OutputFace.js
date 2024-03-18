const Mongoose = require('mongoose');

const OutputFaceSchema = Mongoose.Schema(
  {
    rpId: {
      type: Mongoose.Types.ObjectId,
      ref: 'Rp',
    },
    polyhedronId: { type: Number },
    faceId: { type: Number },
    vertexes: { type: [Number] },
  },
  { timestamps: true, versionKey: false }
);

const OutputFaceModel = Mongoose.model('OutputFace', OutputFaceSchema);

module.exports = OutputFaceModel;