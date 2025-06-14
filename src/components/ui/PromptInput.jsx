import { huggingFaceService } from "../../services/api/huggingFaceService";
import { sendIcon } from "../../assets/icons/send";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { promptScheme } from "../../zod/schemas/promptScheme";
import { clearIcon } from "../../assets/icons/clear";

export const PromptInput = ({ aiModel, setResponse, setLoading, setError }) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ resolver: zodResolver(promptScheme) });

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      let response = null;
      if (aiModel === "DeepSeek") {
        response = await huggingFaceService.getDeepSeekResponse(data.prompt);
      }
      if (aiModel === "Sarvam") {
        response = await huggingFaceService.getSarvamResponse(data.prompt);
      }
      setResponse(response);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div>
        <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
          <label
            htmlFor="prompt"
            className="text-white text-lg md:text-xl font-bold mb-3"
          >
            Your prompt:
          </label>
          <div className="relative border-2 border-gray-800 rounded-md mb-2 bg-purple-800/70">
            <input
              {...register("prompt")}
              name="prompt"
              id="prompt"
              type="text"
              autoComplete="off"
              placeholder="Enter your prompt..."
              className="text-white-50 py-4 pl-5 pr-15 md:pr-28 text-lg md:text-xl outline-none placeholder:text-white-50 w-full"
            />
            <button
              className="cursor-pointer absolute top-0 bottom-0 right-7 sm:right-20"
              onClick={() => setValue("prompt", "")}
            >
              {clearIcon}
            </button>
            <button className="absolute top-0 right-0 bottom-0 rounded-r-sm bg-blue-500/70 hover:bg-blue-700/70 transition duration-300 text-white px-5 cursor-pointer border-l-2 border-gray-800 hidden sm:block">
              {sendIcon}
            </button>
          </div>
          <div className="min-h-[1.5rem] mb-3">
            {errors.prompt && (
              <p className="text-white-50 font-medium tracking-wide">
                {errors.prompt.message}
              </p>
            )}
          </div>
          <button className="w-full text-xl font-bold text-white-50 block sm:hidden border-2 border-gray-800 bg-blue-500/70 rounded-md py-2 mb-4 md:mb-7">
            Send
          </button>
        </form>
      </div>
    </>
  );
};
