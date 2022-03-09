import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DogsController } from './controllers/dogs/dogs.controller';
import { GetAllBreeds } from './core/use_cases/dogs/get.breeds';
import { DogsAPIClient } from './services/dogs.client';
import { DogsService } from './services/dogs.service';

@Module({
  imports: [HttpModule],
  controllers: [AppController, DogsController],
  providers: [AppService, GetAllBreeds, DogsService, DogsAPIClient],
})
export class AppModule {}
