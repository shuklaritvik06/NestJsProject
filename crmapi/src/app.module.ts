import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { EmployeeModule } from './employee/employee.module';
import { CustomerModule } from './customer/customer.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    EmployeeModule,
    CustomerModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@cluster0.vkvs8nl.mongodb.net/?retryWrites=true&w=majority`,
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
