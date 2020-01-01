/**
 * Created by Tuancam on 31/12/19.
 */
import mongoose from "mongoose";

var { Schema } = mongoose;

var SettingSchema = new Schema({
  cmd: Number,
  subCmd: Number,
  status: Number,
  createdAt: { type: Date },
  updatedAt: { type: Date },
  billingId: String,
  sourceId: String,
  destId: String,
  billSource: Number,
  amount: Number,
  status: Number,
  billingInfo: {},
  infoParams: {},
  createdTime: Number,
  updatedTime: Number,
});

SettingSchema.virtual('id').get(function () {
  return this._id;
});

SettingSchema.set('toJSON', { virtuals: true });

export default mongoose.model('billingLogs', SettingSchema);
