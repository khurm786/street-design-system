import "./App.css";
import { Button } from "../";

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
