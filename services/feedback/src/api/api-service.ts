import { Injectable } from "@nestjs/common";
import { PostFeedbackFormDto } from "@network/feedback-api";
import { EmailSendEvent } from "@network/email-queue";

@Injectable()
export class ApiService {
  public async form(data: PostFeedbackFormDto) {
    const event: EmailSendEvent = {
      body: "Hello world",
      recipient: "test@gmail.com",
    };

    // send through message broker
  }
}
