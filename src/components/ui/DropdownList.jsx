import { arrowBottomIcon } from "../../assets/icons/arrowBottom";

const DropdownList = ({ aiModel, setAiModel }) => {
  return (
    <>
      <p className="text-white text-lg md:text-xl font-bold mb-3">AI model:</p>
      <div className="relative">
        <select
          value={aiModel}
          onChange={() => setAiModel(event.target.value)}
          className="mb-5 text-white text-lg md:text-xl py-4 bg-purple-800/70 border-2 border-gray-800 rounded-md px-5 appearance-none w-full cursor-pointer"
        >
          <option value="DeepSeek">DeepSeek</option>
          <option value="Sarvam">Sarvam</option>
        </select>
        <div className="absolute top-1/2 -translate-y-[35%] bottom-0 right-10">
          {arrowBottomIcon}
        </div>
      </div>
    </>
  );
};

export default DropdownList;
