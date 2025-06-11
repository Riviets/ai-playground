import ChatPromptBox from "./components/ui/ChatPromptBox";
import AnimatedTitle from "./components/ui/AnimatedTitle";
import ToggleTheme from "./components/ui/ToggleTheme";

function App() {
  return (
    <div className="bg-gradient-to-br from-purple-950 via-purple-800 to-purple-900 py-40 relative">
      <div className="h-screen flex-center flex-col relative">
        <AnimatedTitle>Welcome To AI Playground!</AnimatedTitle>
        <ToggleTheme />
        <ChatPromptBox />
      </div>
    </div>
  );
}

export default App;
