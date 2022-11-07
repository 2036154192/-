import { Body, Controller, Delete, Get, Param, Patch, Post, Query, Req, UseGuards } from "@nestjs/common";
import { PageRo, PageService } from "./page.service";
import { CreatePageDto } from "./dto/create-page.dto";
import { UpdatePageDto } from "./dto/update-page.dto";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { AuthGuard } from "@nestjs/passport";

@ApiTags("配置动态路由")
@Controller("page")
export class PageController {
  constructor(private readonly pageService: PageService) {
  }

  @ApiOperation({ summary: "添加页面" })
  @UseGuards(AuthGuard("jwt"))
  @Post()
  async create(@Body() createPageDto: CreatePageDto) {
    return await this.pageService.create(createPageDto);
  }

  @ApiOperation({ summary: "获取全部页面" })
  @UseGuards(AuthGuard("jwt"))
  @Get()
  async findAll(@Query() query, @Req() req): Promise<PageRo> {
    return await this.pageService.findAll(query, req);
  }

  @ApiOperation({ summary: "通过id获取页面" })
  @UseGuards(AuthGuard("jwt"))
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.pageService.findOne(+id);
  }

  @ApiOperation({ summary: "通过id修改页面" })
  @UseGuards(AuthGuard("jwt"))
  @Patch()
  update(@Body() updatePageDto: UpdatePageDto) {
    return this.pageService.update(updatePageDto);
  }

  @ApiOperation({ summary: "通过id删除页面" })
  @UseGuards(AuthGuard("jwt"))
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.pageService.remove(id);
  }
}
