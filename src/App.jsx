import ChatPromptBox from "./components/ui/ChatPromptBox";
import AnimatedTitle from "./components/ui/AnimatedTitle";

function App() {
  return (
    <div className="bg-gradient-to-br from-purple-950 to-purple-900">
      <div className="h-screen flex-center flex-col">
        <AnimatedTitle className={"mb-10 sm:mb-20 "}>
          Welcome To AI Playground!
        </AnimatedTitle>
        <ChatPromptBox />
      </div>
    </div>
  );
}

export default App;
