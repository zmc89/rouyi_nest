import { Module } from '@nestjs/common';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';
import { SharedModule } from '../../common/shared/shared.module';
import { RedisModule } from '../../common/redis/redis.module';


@Module({
  imports: [SharedModule,RedisModule],
  controllers: [LoginController],
  providers: [LoginService],
})
export class LoginModule {}
