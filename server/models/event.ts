import * as mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
  date: String,
  thema: String,
  place: String,
  guests: Number,
});

const Event = mongoose.model('event', eventSchema);

export default Event;
