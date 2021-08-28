import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // enable cors
  app.enableCors();

  // exception handler
  // app.useGlobalFilters(new BaseExceptionFilter());

  // validation
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(process.env.PORT || 9000);
}

bootstrap();
