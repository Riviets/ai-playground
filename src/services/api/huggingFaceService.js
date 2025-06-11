import { InferenceClient } from "@huggingface/inference";

const client = new InferenceClient(import.meta.env.VITE_HF_TOKEN);

const cleanResponse = (rawResponse) => {
  const text = rawResponse.content;
  return text.replace(/^[\s\S]*?<\/think>/, "").trim();
};

export const huggingFaceService = {
  getDeepSeekResponse: async (prompt) => {
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
  getSarvamResponse: async (prompt) => {
    try {
      const response = await client.chatCompletion({
        provider: "hf-inference",
        model: "sarvamai/sarvam-m",
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
