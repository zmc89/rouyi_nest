import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { SharedModule } from './common/shared/shared.module';
import { LoginModule } from './modules/login/login.module';
import { ConfigModule } from '@nestjs/config';



@Module({
  imports: [AuthModule,SharedModule,LoginModule,ConfigModule.forRoot({
    envFilePath:process.env.NODE_ENV === 'pro' ? '.env.production' : '.env',
    isGlobal: true
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
