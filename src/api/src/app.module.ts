import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Todo, TodoSchema } from './todo.schema';
import { ConfigModule } from '@nestjs/config';

console.log('Server: NODE_ENV: ', process.env.NODE_ENV);

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: process.env.NODE_ENV === 'development'
          ? '.env'
          : '.env.prod',
    }),
    MongooseModule.forRoot(process.env.mongodb_uri),
    MongooseModule.forFeature([{ name: Todo.name, schema: TodoSchema }]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
