import { PartialType } from "@nestjs/swagger";
import { CreateNfcDto } from "./create-nfc.dto";
import { IsNotEmpty } from "class-validator";

export class UpdateNfcDto extends PartialType(CreateNfcDto) {
  @IsNotEmpty({ message: "缺少ID" })
  id: string;

  @IsNotEmpty({ message: "缺少关键字" })
  code: string;

  @IsNotEmpty({ message: "缺少标题" })
  title: string;

  @IsNotEmpty({ message: "缺少音频" })
  audio: string;

  subhead?: string;

  img?: string;
}
