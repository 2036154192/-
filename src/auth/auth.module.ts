import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "../user/entities/user.entity";
import { PassportModule } from "@nestjs/passport";
import { LocalStrategy } from "./local.strategy";
import { JwtModule } from "@nestjs/jwt";
import { UserModule } from "../user/user.module";
import { JwtStrategy } from "./jwt.strategy";
import { UserService } from "../user/user.service";

const jwtModule = JwtModule.register({
  secret: "jiangyue123456",
  signOptions: { expiresIn: "24h" } // token 过期时效
});

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    PassportModule,
    UserModule,
    jwtModule
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy, UserService],
  exports: [jwtModule]
})
export class AuthModule {
}
