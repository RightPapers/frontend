import { z } from "zod";

export const feedbackSchema = z.object({
  feedback_text: z.string().max(200, '200자 이내로 입력해주세요.'),
});