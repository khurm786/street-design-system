import "./App.css";
import { StreetButton } from "../";

function App() {
  return (
    <>
      <StreetButton
        size="large"
        primary
        onClick={() => alert("Hello world!")}
        label="Contact us"
      />
    </>
  );
}

export default App;
