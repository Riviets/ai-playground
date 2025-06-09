import { InferenceClient } from "@huggingface/inference";

const client = new InferenceClient(import.meta.env.VITE_HF_TOKEN);

const cleanResponse = (rawResponse) => {
  const text = rawResponse.content;
  return text.replace(/<think>[\s\S]*?<\/think>/, "").trim();
};

export const huggingFaceService = {
  getResponse: async (prompt) => {
    try {
      const response = await client.chatCompletion({
        provider: "nebius",
        model: "deepseek-ai/DeepSeek-R1-0528",
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
      });
      return cleanResponse(response.choices[0].message);
    } catch (error) {
      throw error;
    }
  },
};
