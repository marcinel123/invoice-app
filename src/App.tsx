import "./App.scss";
import { Input } from "./components/shared/input/Input";
import { SelectComponent } from "./components/shared/select/SelectComponent";

function App() {
  const arr = ["30 days", "20 days"];

  return (
    <>
      <div className="app">
        <SelectComponent selectName="Payment" data={arr} />
      </div>

      <div>
        <Input label="Name" />
      </div>
    </>
  );
}

export default App;
