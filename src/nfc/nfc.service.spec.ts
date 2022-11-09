import { Test, TestingModule } from "@nestjs/testing";
import { NfcService } from "./nfc.service";

describe("NfcService", () => {
  let service: NfcService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NfcService]
    }).compile();

    service = module.get<NfcService>(NfcService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
