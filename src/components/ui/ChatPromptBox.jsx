import { useEffect, useState } from "react";
import { Spinner } from "../utils/Spinner";
import { PromptInput } from "./PromptInput";
import ReactMarkdown from "react-markdown";
import useTimer from "../../hooks/useTimer";
import DropdownList from "./DropdownList";

const ChatPromptBox = () => {
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [aiModel, setAiModel] = useState("DeepSeek");
  const timer = useTimer(loading);

  return (
    <div className="w-full max-w-[85%] md:max-w-[70%] lg:max-w-[50%] flex flex-col py-10">
      <PromptInput
        aiModel={aiModel}
        setResponse={setResponse}
        setLoading={setLoading}
        setError={setError}
      />
      <DropdownList aiModel={aiModel} setAiModel={setAiModel} />
      <p className="text-white text-lg md:text-xl font-bold mb-3">Result:</p>
      <div className="border-2 border-gray-800 p-5 rounded-md bg-purple-800/70 text-white-50 w-full h-[300px] overflow-y-auto font-medium text-lg md:text-xl">
        {loading ? (
          <div className="w-full h-full flex-center">
            <div className="flex flex-col gap-2 text-sm text-gray-300 tracking-wide items-center font-bold">
              <Spinner />
              Thinking ({timer})
            </div>
          </div>
        ) : error ? (
          <div className="text-red-500 font-bold text-lg">
            An error occured. Please try again
          </div>
        ) : response === "" ? (
          <p className="cursor-default">Please send your request...</p>
        ) : (
          <ReactMarkdown>{response}</ReactMarkdown>
        )}
      </div>
    </div>
  );
};

export default ChatPromptBox;
