import { useState } from "react";
import { huggingFaceService } from "../services/api/huggingFaceService";
import { sendIcon } from "../assets/icons/send";

export const PromptInput = ({ setResponse, setLoading, setError }) => {
  const [prompt, setPrompt] = useState("");

  const sendRequest = async () => {
    try {
      setLoading(true);
      const response = await huggingFaceService.getResponse(prompt);
      setResponse(response);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-[20%] border-2 border-gray-800 rounded-md flex overflow-hidden bg-purple-800/50 text-white">
      <input
        type="text"
        placeholder="Enter your prompt..."
        onChange={(event) => {
          setPrompt(event.target.value);
        }}
        className="flex-grow px-4 py-2 text-lg md:text-xl outline-none placeholder:text-white-50"
      />
      <button
        onClick={sendRequest}
        className="bg-blue-500 hover:bg-blue-700 transition duration-300 text-white px-5 cursor-pointer border-l-2 border-gray-800"
      >
        {sendIcon}
      </button>
    </div>
  );
};
