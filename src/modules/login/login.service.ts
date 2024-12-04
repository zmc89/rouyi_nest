import { Inject,Injectable } from '@nestjs/common';
import * as svgCaptcha from 'svg-captcha';
import { CaptChaResDto } from './dto/loginRes';
import { SharedService } from '../../common/shared/shared.service'
import { RedisService } from "../../common/redis/redis.service";


@Injectable()
export class LoginService {

  constructor(
    private readonly sharedService: SharedService,
    private readonly redisService: RedisService

  ) {}

  async captchaImage():Promise<CaptChaResDto>{
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
    await  this.redisService.set(result.uuid,text,60*5)
    return result
  }
}
