import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

(async () => {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:3001'
  })
  await app.listen(3000);
})();
