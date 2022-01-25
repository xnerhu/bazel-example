import { IsString } from "class-validator";

export class PostFeedbackFormDto {
  @IsString()
  email: string;

  @IsString()
  body: string;
}
