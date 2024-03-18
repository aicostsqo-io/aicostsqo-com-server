const Mongoose = require("mongoose");

const DistributionSchema = Mongoose.Schema(
    {
        vertexNumber: String,
        destinationTable: String,
    },
    { timestamps: true, versionKey: false }
);

const Distribution = Mongoose.model("Distribution", DistributionSchema);
module.exports = Distribution;