let mongoose = require('mongoose');
let Schema   = mongoose.Schema;

let LocationSchema = new Schema({
  name:      { type: String, required: true },
  address:   { type: String, required: true },
  events:    [{ type: mongoose.Schema.Types.ObjectId, ref: 'Event' }],
  updatedAt: { type: Date, default: Date.now }
});
