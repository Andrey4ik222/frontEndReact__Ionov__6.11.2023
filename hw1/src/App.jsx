import "./App.css";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";

function App() {
  return (
    <form className="form">
      <Input
        className="input"
        placeholder="Write your login"
        typeInput="text"
      />
      <Input
        className="input"
        placeholder="Write your password"
        typeInput="password"
      />
      <Button
        className="button-submit btn"
        textButton="Submit"
        typeButton="submit"
      />
      <Button
        className="button-reset btn"
        textButton="Reset"
        typeButton="reset"
      />
    </form>
  );
}

export default App;
