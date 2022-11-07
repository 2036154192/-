import { PartialType } from "@nestjs/swagger";
import { CreatePageDto } from "./create-page.dto";
import { IsNotEmpty } from "class-validator";

export class UpdatePageDto extends PartialType(CreatePageDto) {
  @IsNotEmpty({ message: "缺少ID" })
  id: string;

  @IsNotEmpty({ message: "缺少路由名" })
  name: string;

  @IsNotEmpty({ message: "缺少路由路径" })
  path: string;

  @IsNotEmpty({ message: "缺少组件路径" })
  component: string;

  @IsNotEmpty({ message: "缺少menu标题" })
  title: string;

  @IsNotEmpty({ message: "缺少父级id" })
  pid: string;
}
