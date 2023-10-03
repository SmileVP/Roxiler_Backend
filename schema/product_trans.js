const mongoose = require("mongoose");

//schema to visualize how a database should be structured
const productSchema = new mongoose.Schema(
  {
    id: { type: Number, required: true },
    title: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    sold: { type: Boolean, required: true },
    dateOfSale: { type: Date },
  },
  { versionKey: false, collection: "products" }
);

//model provides an interface to the database for creating, querying, updating, deleting records, etc.
const productModel = mongoose.model("products", productSchema);
module.exports = { productModel };
