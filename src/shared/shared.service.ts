import { Injectable } from '@nestjs/common';
import { nanoid } from 'nanoid';

@Injectable()
export class SharedService {

  /**
   * @author jsorgo
   * @date 2024/12/1
   * @description 生成一个uuid
   * @returns {string}
   * */
  generateUUID(): string {
    return nanoid();
  }
}
