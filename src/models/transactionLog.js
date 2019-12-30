/**
 * Created by Tuancam on 31/12/19.
 */
import mongoose from "mongoose";

var {Schema} = mongoose;

var SettingSchema = new Schema({
  userId: Number,
  logType: {type: Number,  ref: 'logs' },
  status: Number,
  description: {
    type: String
  },
  createdAt: {type: Date},
  updatedAt: {type: Date}
});

SettingSchema.virtual('id').get(function () {
  return this._id;
});

SettingSchema.set('toJSON', {virtuals: true});

export default mongoose.model('Setting', SettingSchema);
