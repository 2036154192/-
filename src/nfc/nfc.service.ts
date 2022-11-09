import { Injectable } from "@nestjs/common";
import { CreateNfcDto } from "./dto/create-nfc.dto";
import { UpdateNfcDto } from "./dto/update-nfc.dto";

@Injectable()
export class NfcService {
  create(createNfcDto: CreateNfcDto) {

    return "This action adds a new nfc";
  }

  findAll() {
    return `This action returns all nfc`;
  }

  findOne(id: number) {
    return `This action returns a #${id} nfc`;
  }

  update(updateNfcDto: UpdateNfcDto) {
    return `This action updates a #update nfc`;
  }

  remove(id: number) {
    return `This action removes a #${id} nfc`;
  }
}
