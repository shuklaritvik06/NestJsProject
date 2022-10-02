import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Customer } from './customer.interface';
import { CustomerService } from './customer.service';

@Controller('customers')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}
  @Get()
  async findAll(): Promise<Customer[]> {
    return this.customerService.findAll();
  }
  @Get(':id')
  async findOne(@Param() params): Promise<Customer> {
    return this.customerService.findOne(params.id);
  }
  @Post('create')
  async create(@Body() customer: Customer): Promise<Customer> {
    return this.customerService.create(customer);
  }
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() customer: Customer,
  ): Promise<Customer> {
    return this.customerService.update(id, customer);
  }
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Customer> {
    return this.customerService.delete(id);
  }
}
