import { chatCompletion, InferenceClient } from "@huggingface/inference";

const client = new InferenceClient(import.meta.env.VITE_HF_TOKEN);

const cleanResponse = (rawResponse) => {
  const text = rawResponse.content;
  return text.replace(/<think>[\s\S]*?<\/think>/, "").trim();
};

export const huggingFaceService = {
  chatCompletion: async () => {
    try {
      const response = await client.chatCompletion({
        provider: "nebius",
        model: "deepseek-ai/DeepSeek-R1-0528",
        messages: [
          {
            role: "user",
            content: "What is the capital of France?",
          },
        ],
      });
      return cleanResponse(response.choices[0].message);
    } catch (error) {
      console.log("Помилка: error");
      throw error;
    }
  },
};
