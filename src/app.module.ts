import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule} from './modules/auth/auth.module';
import { SharedModule } from './shared/shared.module';


@Module({
  imports: [PrismaModule,AuthModule, SharedModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
