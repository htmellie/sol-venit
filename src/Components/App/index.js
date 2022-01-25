import Fetch from "../Fetch";
import DatePicker from "../DatePicker";
import "./App.css";
import { useState } from "react";

function App() {
  const [date, setDate] = useState(new Date());

  return (
    <div>
      <Fetch date={date} />
      <DatePicker date={date} setDate={setDate} />
    </div>
  );
}

export default App;
