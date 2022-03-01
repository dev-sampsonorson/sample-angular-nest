import { Injectable } from '@nestjs/common';
import { Message } from '@sample-angular-nest/api-interfaces';

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'Welcome to api!' };
  }
}
