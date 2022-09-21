import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { HttpExceptionFilter } from "./core/filter/http-exception.filter";
import { TransformInterceptor } from "./core/interceptor/transform.interceptor";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  app.setGlobalPrefix("web");
  //全局注册 错误拦截器
  app.useGlobalFilters(new HttpExceptionFilter());
  //全局注册 成功拦截器
  app.useGlobalInterceptors(new TransformInterceptor());
  //配置swagger文档
  const config = new DocumentBuilder()
    .setTitle("接口文档")
    .setDescription("后台接口文档")
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("docs", app, document);
  //数据验证
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(1314);
}

bootstrap();
