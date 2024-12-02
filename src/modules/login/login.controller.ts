import { Controller, Get } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginResDto, CaptChaResDto } from './dto/loginRes';


@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  /**
   *  @author jsorgo
   *  @description 获取验证码
   *  @date 2024/12/1
   */
  @Get('captchaImage')
  async captchaImage(): Promise<CaptChaResDto> {
    return await this.loginService.captchaImage();
  }
}
