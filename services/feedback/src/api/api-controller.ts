import { Body, Controller, Post } from "@nestjs/common";
import { PostFeedbackFormDto } from "@network/feedback-api";

import { ApiService } from "./api-service";

@Controller()
export class ApiController {
  constructor(private readonly apiService: ApiService) {}

  @Post("form")
  public form(@Body() data: PostFeedbackFormDto) {
    return this.apiService.form(data);
  }
}
