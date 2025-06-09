import { useState } from "react";
import { huggingFaceService } from "../services/api/huggingFaceService";
import { sendIcon } from "../assets/icons/send";
import { Spinner } from "./utils/Spinner";

const ChatPromptBox = () => {
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [error, setError] = useState(null);

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
    <div className="h-screen flex-center flex-col ">
      <div className="w-full max-w-[85%] md:max-w-[70%] lg:max-w-[50%] flex flex-col gap-3 md:gap-7">
        <div className="w-full h-[20%] border-2 rounded-md flex overflow-hidden">
          <input
            type="text"
            placeholder="Enter your prompt..."
            onChange={(event) => {
              setPrompt(event.target.value);
            }}
            className="flex-grow px-4 py-2 text-lg md:text-xl outline-none"
          />
          <button
            onClick={sendRequest}
            className="bg-blue-500 hover:bg-blue-700 transition duration-300 text-white px-5 cursor-pointer "
          >
            {sendIcon}
          </button>
        </div>

        <div className="border-2 p-5 rounded-md bg-white w-full h-[250px] overflow-y-auto font-medium text-lg md:text-xl">
          {loading ? (
            <div className="w-full h-full flex-center">
              <div>
                <Spinner />
              </div>
            </div>
          ) : error ? (
            <div className="text-red-500 font-bold text-lg">
              An error occured. Please try again
            </div>
          ) : response === "" ? (
            <p>Please send your request</p>
          ) : (
            <p>{response}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatPromptBox;
