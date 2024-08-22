import { z } from 'zod';

const youtubeUrlPattern = /^(https?:\/\/)?(www\.)?(youtu\.be|youtube\.com)/;

export const analyzeSchema = z.object({
  url: z.string().regex(youtubeUrlPattern, {
    message: '유효한 유튜브 링크를 입력해주세요.',
  }),
});
