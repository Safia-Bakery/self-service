import Header from "@/components/Header";
import BodyFrame from "./components/BodyFrame";

const App = () => {
  return (
    <div className="bg-mainBg h-screen overflow-hidden flex flex-col">
      <Header />
      <BodyFrame />
    </div>
  );
};

export default App;
