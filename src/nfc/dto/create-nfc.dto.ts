import { IsNotEmpty } from "class-validator";

export class CreateNfcDto {
  @IsNotEmpty({ message: "缺少关键字" })
  code: string;

  @IsNotEmpty({ message: "缺少标题" })
  title: string;

  @IsNotEmpty({ message: "缺少音频" })
  audio: string;
}
