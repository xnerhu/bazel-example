import { Injectable } from "@nestjs/common";
import { ConfigService as NestConfigService } from "@nestjs/config";

@Injectable()
export class ConfigService {
  constructor(private readonly env: NestConfigService) {}

  public get port() {
    return this.env.get("PORT", { infer: true }) as number;
  }
}
