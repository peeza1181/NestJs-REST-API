import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategy';

@Module({
  imports: [JwtModule.register({})],
  controllers: [AuthController], // ควบคุมการทำงานของ Auth Module
  providers: [AuthService, JwtStrategy], // ใช้เพื่อให้บริการที่ใช้ภายใน Auth Module
})
export class AuthModule {}
