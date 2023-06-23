// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   await app.listen(3000);
// }
// bootstrap();
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { appendFile } from 'fs';
import { join } from 'path';
import {AppModule} from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useStaticAssets(join(__dirname, '..','..','client', 'build')); // React 빌드 디렉토리 경로 설정 --- express의 미들웨어
  app.setBaseViewsDir(join(__dirname, '..','..','client', 'build')); // React 빌드 디렉토리 경로 설정
  // app.setViewEngine('html'); // 사용하는 뷰 엔진 설정
  
  await app.listen(3000);
}
bootstrap();
