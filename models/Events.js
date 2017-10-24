let mongoose = require('mongoose');
let Schema   = mongoose.Schema;

let EventSchema = new Schema({
  name:      { type: String, required: true },
  date:      { type: Date, required: true },
  address:   { type: String, required: true },
  location:  { type: mongoose.Schema.Types.ObjectId, ref: 'Location' },
  attendees: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  updatedAt: { type: Date, default: Date.now }
});
