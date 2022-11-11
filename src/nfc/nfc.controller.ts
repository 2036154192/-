import { Body, Controller, Delete, Get, Param, Patch, Post, Query, UseGuards } from "@nestjs/common";
import { NfcRo, NfcService } from "./nfc.service";
import { CreateNfcDto } from "./dto/create-nfc.dto";
import { UpdateNfcDto } from "./dto/update-nfc.dto";
import { AuthGuard } from "@nestjs/passport";

@Controller("nfc")
export class NfcController {
  constructor(private readonly nfcService: NfcService) {
  }

  @UseGuards(AuthGuard("jwt"))
  @Post()
  create(@Body() createNfcDto: CreateNfcDto) {
    return this.nfcService.create(createNfcDto);
  }

  @UseGuards(AuthGuard("jwt"))
  @Get()
  findAll(@Query() query): Promise<NfcRo> {
    return this.nfcService.findAll(query);
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.nfcService.findOne(+id);
  }

  @Get("/code/:type/:code")
  findCode(@Param("code") code: string, @Param("type") type: string) {
    return this.nfcService.findCode(type, code);
  }

  @UseGuards(AuthGuard("jwt"))
  @Patch()
  update(@Body() updateNfcDto: UpdateNfcDto) {
    return this.nfcService.update(updateNfcDto);
  }

  @UseGuards(AuthGuard("jwt"))
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.nfcService.remove(id);
  }
}
