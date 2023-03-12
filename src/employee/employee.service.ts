import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Employee } from './employee.interface';
import { CreateEmployeeDto } from './create-employee.dto';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectModel('Employee') private readonly employeeModel: Model<Employee>,
  ) {}

  async create(createEmployeeDto: CreateEmployeeDto): Promise<Employee> {
    const createdEmployee = new this.employeeModel(createEmployeeDto);
    return createdEmployee.save();
  }

  async findAll(): Promise<Employee[]> {
    return this.employeeModel.find().exec();
  }

  async findOne(id: string): Promise<Employee> {
    return this.employeeModel.findById(id).exec();
  }

  async update(
    id: string,
    updateEmployeeDto: CreateEmployeeDto,
  ): Promise<Employee> {
    return this.employeeModel.findByIdAndUpdate(id, updateEmployeeDto).exec();
  }

  async delete(id: string): Promise<Employee> {
    return this.employeeModel.findByIdAndRemove(id).exec();
  }
}
