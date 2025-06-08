import { huggingFaceService } from "./services/api/huggingFaceService";
import { useEffect, useState } from "react";

function App() {
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getResult = async () => {
      const result = await huggingFaceService.chatCompletion();
      setResponse(result);
      setLoading(false);
    };
    getResult();
  }, []);
  return (
    <div className="h-screen flex justify-center items-center">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="max-w-[85%] md:max-w-[50%]">Response: {response}</div>
      )}
    </div>
  );
}

export default App;
