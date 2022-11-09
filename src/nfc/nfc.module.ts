import { Module } from "@nestjs/common";
import { NfcService } from "./nfc.service";
import { NfcController } from "./nfc.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { NfcEntity } from "./entities/nfc.entity";

@Module({
  imports: [TypeOrmModule.forFeature([NfcEntity])],
  controllers: [NfcController],
  providers: [NfcService]
})
export class NfcModule {
}
