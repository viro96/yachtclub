import * as mongoose from 'mongoose';

const regattaresultSchema = new mongoose.Schema({
  regattaresultdate: String,
  regattaresultthema: String,
  regattaresultplace: String,
  regattaresultresult: Number,
});

const RegattaResult = mongoose.model('regattaresult', regattaresultSchema);

export default RegattaResult;
