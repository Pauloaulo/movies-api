import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MovieModule } from './movie/movie.module';
import { StudioModule } from './studio/studio.module';
import { GenreModule } from './genre/genre.module';
import { PrismaService } from './database/prisma.service';

@Module({
  imports: [MovieModule, StudioModule, GenreModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
