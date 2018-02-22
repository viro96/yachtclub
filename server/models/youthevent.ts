import * as mongoose from 'mongoose';

const youtheventSchema = new mongoose.Schema({
  youthdate: String,
  youththema: String,
  youthplace: String,
  youthguests: Number,
});

const YouthEvent = mongoose.model('youthevent', youtheventSchema);

export default YouthEvent;
