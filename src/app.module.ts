import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PostsModule } from "./posts/posts.module";
import { UserModule } from "./user/user.module";
import { AuthModule } from "./auth/auth.module";
import { PageModule } from "./page/page.module";
import { NfcModule } from "./nfc/nfc.module";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "8.136.203.217",
      port: 3306,
      username: "root",
      password: "176176.mjz",
      database: "blog",
      logging: true,
      entities: ["dist/**/**.entity{.ts,.js}"],
      autoLoadEntities: true, // 自动链接被 forFeature 注册的实体
      synchronize: true // 实体与表同步 调试模式下开始。不然会有强替换导致数据丢是
    }),
    PostsModule,
    UserModule,
    AuthModule,
    PageModule,
    NfcModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
}
