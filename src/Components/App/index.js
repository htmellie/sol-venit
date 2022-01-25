import Fetch from "../Fetch";
import DatePicker from "../DatePicker";
import "./App.css";

function App() {
  return (
    <div>
      <Fetch />
      <DatePicker ball={true} prop2={"hello"} />
    </div>
  );
}

export default App;
