import * as mongoose from 'mongoose';

const regatteneventSchema = new mongoose.Schema({
  regattendate: String,
  regattenthema: String,
  regattenplace: String,
  regattenguests: Number,
});

const RegattenEvent = mongoose.model('regattenevent', regatteneventSchema);

export default RegattenEvent;
