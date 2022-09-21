//账号密码验证

import { PassportStrategy } from "@nestjs/passport";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "../user/entities/user.entity";
import { Repository } from "typeorm";
import { IShortenOptions } from "typeorm/util/StringUtils";
import { BadRequestException } from "@nestjs/common";
import { compareSync } from "bcryptjs";
import { Strategy } from "passport-local";

export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) {
    super({
      usernameField: "username",
      passwordField: "password"
    } as IShortenOptions);
  }

  async validate(username: string, password: string) {
    const user = await this.userRepository
      .createQueryBuilder("user")
      .addSelect("user.password")
      .where("user.username=:username", { username })
      .getOne();
    if (!user) {
      throw new BadRequestException("用户名错误");
    }
    if (!compareSync(password, user.password)) {
      throw new BadRequestException("密码错误");
    }
    return user;
  }
}