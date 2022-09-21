// dto/create-post.dot.ts
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber } from "class-validator";

export class CreatePostDto {
  @ApiProperty({ description: "文字标题" })
  @ApiPropertyOptional({ description: "文字标题" })
  @IsNotEmpty({ message: "文章标题必填" })
  readonly title: string;
  @ApiProperty({ description: "作者" })
  @ApiPropertyOptional({ description: "作者" })
  @IsNotEmpty({ message: "缺少作者信息" })
  readonly author: string;
  @ApiProperty({ description: "内容" })
  @ApiPropertyOptional({ description: "内容" })
  readonly content: string;
  @ApiProperty({ description: "文字封面" })
  @ApiPropertyOptional({ description: "文字封面" })
  readonly cover_url: string;
  @ApiProperty({ description: "文字类型" })
  @ApiPropertyOptional({ description: "文字类型" })
  @IsNumber()
  readonly type: number;
}