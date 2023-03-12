import * as mongoose from 'mongoose';
export const EmployeeSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  address: String,
  city: String,
  state: String,
  department: String,
  company: String,
});
