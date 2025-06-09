import { z } from "zod";

export const promptScheme = z.object({
  prompt: z.string().min(1, "Prompt is required!"),
});
