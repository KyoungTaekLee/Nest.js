// import { Controller, Get } from '@nestjs/common';
// import { AppService } from './app.service';

// @Controller()
// export class AppController {
//   constructor(private readonly appService: AppService) {}

//   @Get()
//   getHello(): string {
//   }
// }

import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()  
// 클래스를 컨트롤러로 정의
export class AppController {
  constructor(private readonly appService: AppService) {}
  // AppController의 생성자 함수

  @Get()
  @Render('test') // 렌더링할 뷰 템플릿을 설정합니다. 여기서는 "index"라는 이름의 템플릿을 사용합니다.
  getHello(): { message: string } {
    return { message: this.appService.getHello() };
  }
}
