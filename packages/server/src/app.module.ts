import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserController } from './controllers/user.controller';
import { AppService } from './app.service';
import { UserService } from './service/user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { ServeStaticModule } from '@nestjs/serve-static';
import { secret } from './utils/constants';
import { join } from 'path/posix';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(), 
    MongooseModule.forRoot(`mongodb+srv://SenecalJF:${process.env.MONGO_URI}@cluster0.kal8y.mongodb.net/?retryWrites=true&w=majority`),
    JwtModule.register({secret, signOptions: {expiresIn: '2h'},}),
    ServeStaticModule.forRoot({rootPath: join(__dirname, '..', 'public')})
 ],
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
})
export class AppModule {}
