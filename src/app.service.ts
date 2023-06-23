import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
<<<<<<< HEAD
    return 'server : Hello World!';
=======
    return 'Hello World!';
>>>>>>> d885d9597eb3fb305819fa8fa542d9a91c20ffd2
  }
}
