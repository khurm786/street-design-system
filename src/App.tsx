import "./App.css";
import { Button } from "./stories/Button";

function App() {
  return (
    <>
      <Button
        size="large"
        primary
        onClick={() => alert("Hello world!")}
        label="Contact us"
      />
    </>
  );
}

export default App;
