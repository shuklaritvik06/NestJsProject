import * as mongoose from 'mongoose';
export const CustomerSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  address: String,
  city: String,
  state: String,
});
