import { Test, TestingModule } from "@nestjs/testing";
import { NfcController } from "./nfc.controller";
import { NfcService } from "./nfc.service";

describe("NfcController", () => {
  let controller: NfcController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NfcController],
      providers: [NfcService]
    }).compile();

    controller = module.get<NfcController>(NfcController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
