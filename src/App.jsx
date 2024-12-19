import data from "./assets/data.json";
import Bellow from "./Bellow";

function App() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900"> 
      <Bellow value={data} />
    </div>
  );
}

export default App;