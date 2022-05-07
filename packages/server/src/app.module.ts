import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { ServeStaticModule } from '@nestjs/serve-static';
import { secret } from './utils/constants';
import { join } from 'path/posix';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/Stream'),
  JwtModule.register({secret, signOptions: {expiresIn: '2h'},}),
  ServeStaticModule.forRoot({rootPath: join(__dirname, '..', 'public')})
 ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
