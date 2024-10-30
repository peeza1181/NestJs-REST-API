import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  controllers: [AuthController], // ควบคุมการทำงานของ Auth Module
  providers: [AuthService], // ใช้เพื่อให้บริการที่ใช้ภายใน Auth Module
})
export class AuthModule {}
