import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AppService } from './app.service';
import { Todo, TodoDocument } from './todo.schema';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @InjectModel(Todo.name) private todoModel: Model<TodoDocument>,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('todos')
  async addtodo(@Body() body) {
    const createdCat = new this.todoModel(body);
    const data = await createdCat.save();
    return {
      code: 200,
      data: data,
    };
  }

  @Get('todos')
  async getadlltodo() {
    return {
      code: 200,
      data: await this.todoModel.find(),
    };
  }

  @Get('todos/:id')
  async gettodo(@Param('id') id: string) {
    return {
      code: 200,
      data: await this.todoModel.findById(id),
    };
  }
}
