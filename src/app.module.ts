import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DogsController } from './controllers/dogs/dogs.controller';

@Module({
  imports: [HttpModule],
  controllers: [AppController, DogsController],
  providers: [AppService],
})
export class AppModule {}
