export interface EmailSendEvent {
  recipient: string;
  body: string;
}

export const PATTERN_EMAIL_SEND_EVENT = "release-rollout";
