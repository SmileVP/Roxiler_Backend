var express = require("express");

var router = express.Router();

var axios = require("axios");

//Mongoose to manage relationships between data, has schema validation
const mongoose = require("mongoose");

const { dbUrl } = require("../config/dbconfig");

const { productModel } = require("../schema/product_trans");

//to connect to db
let connect = mongoose.connect(dbUrl);

//fetching the json from api
router.get("/products", async (req, res) => {
  try {
    let values = await axios.get(
      "https://s3.amazonaws.com/roxiler.com/product_transaction.json"
    );

    if (values.status === 200) {
      // let doc = new productModel(values.data);
      // await doc.save();

      await productModel.insertMany(values.data);

      console.log(values.data);

      //await productModel.insertMany(res.data);
    }
  } catch (error) {
    console.log(error);
  }
});

router.get("/products", async (req, res) => {
  try {
    let values = await axios.get(
      "https://s3.amazonaws.com/roxiler.com/product_transaction.json"
    );

    if (values.status === 200) {
      // let doc = new productModel(values.data);
      // await doc.save();

      await productModel.insertMany(values.data);

      console.log(values.data);

      //await productModel.insertMany(res.data);
    }
  } catch (error) {
    console.log(error);
  }
});

router.get("/allProducts", async (req, res) => {
  try {
    let allProducts = await productModel.find();
    console.log(allProducts);
    res.status(200).send({
      allProducts,
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
