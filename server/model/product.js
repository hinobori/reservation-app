const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const ProductsSchema = new Schema({
  //id: number,
  coverImage: { type: String, required: true },
  name: { type: String, required: true, maxlength: [60, '最大60文字までです'] },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
  description: { type: String },
  heading1: { type: String },
  heading2: { type: String },
  heading3: { type: String },
  headingText1: { type: String },
  headingText2: { type: String },
  headingText3: { type: String }
})

module.exports = mongoose.model('Product', ProductsSchema)