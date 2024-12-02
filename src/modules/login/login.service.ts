import { Injectable } from '@nestjs/common';
import * as svgCaptcha from 'svg-captcha';
import { SharedService } from '../../shared/shared.service'
import { LoginResDto, CaptChaResDto } from './dto/loginRes';



@Injectable()
export class LoginService {
  constructor(
    private readonly sharedService: SharedService
  ) {}

  async captchaImage(){
      const { data,text } = svgCaptcha.createMathExpr({
         noise: 3,
         color: true,
         width: 115.5,
         height: 38,
      });
    const svgBuffer = Buffer.from(data).toString('base64');
    const result = {
      img: svgBuffer,
      uuid: this.sharedService.generateUUID(),
    };
  }
}
