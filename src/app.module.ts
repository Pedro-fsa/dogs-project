import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DogsController } from './controllers/dogs/dogs.controller';
import { GetAllBreeds } from './core/use_cases/dogs/getAllBreeds';

@Module({
  imports: [HttpModule],
  controllers: [AppController, DogsController],
  providers: [AppService, GetAllBreeds],
})
export class AppModule {}
