import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Customer } from './customer.interface';
import { CreateCustomerDto } from './create-customer.dto';

@Injectable()
export class CustomerService {
  constructor(
    @InjectModel('Customer') private readonly customerModel: Model<Customer>,
  ) {}

  async create(customer: CreateCustomerDto): Promise<Customer> {
    const createdCustomer = new this.customerModel(customer);
    return createdCustomer.save();
  }

  async findAll(): Promise<Customer[]> {
    return this.customerModel.find().exec();
  }

  async findOne(id: string): Promise<Customer> {
    return this.customerModel.findById(id);
  }

  async update(id: string, customer: Customer): Promise<Customer> {
    return this.customerModel.findByIdAndUpdate(id, customer, { new: true });
  }

  async delete(id: string): Promise<Customer> {
    return this.customerModel.findByIdAndRemove(id);
  }
}
