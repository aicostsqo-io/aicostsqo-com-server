const Mongoose = require('mongoose');

const OutputPolyhedronSchema = Mongoose.Schema(
  {
    rpId: {
      type: Mongoose.Types.ObjectId,
      ref: 'Rp',
    },
    polyhedronId: { type: Number },
    volumeTheoric: { type: Number },
    vertexCount: { type: Number },
    faceCount: { type: Number },
    objFileName: { type: String },
    plyFileName: { type: String },
    volumeQuarry: { type: Number },
  },
  { timestamps: true, versionKey: false }
);

const OutputPolyhedronModel = Mongoose.model('OutputPolyhedron',  OutputPolyhedronSchema);

module.exports = OutputPolyhedronModel;