let mongoose = require('mongoose');
let Schema   = mongoose.Schema;

let UserSchema = new Schema({
  email: { type: String, required: true },
  name:  { type: String, required: true }
});
