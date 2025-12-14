import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  /**
   * Using global pipes
   */
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // accepts only the DTO
      forbidNonWhitelisted: true, // throws error if detects keys other than mentioned in DTO
      transform: true,
    }),
  );

  /**
   * Swagger Configuration
   */
  const config = new DocumentBuilder()
    .setTitle('Nestjs Blog API')
    .setDescription('This is a Blog REST Api with Nestjs')
    .setTermsOfService('http://localhost:8080/terms-of-service')
    .setLicense('MIT License', 'link of license')
    .addServer('http://localhost:8080')
    .addTag('nestjs_mastery')
    .setVersion('0.1')
    .build();

  // instantiate document
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  await app.listen(process.env.PORT ?? 8080);
}
bootstrap();
