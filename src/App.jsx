import Container from "./components/Container";
import Input from "./components/Input";
import Button from "./components/Button";
import "./App.css";
function App() {
  return (
    <Container>
      <div className="outer">
        <Input></Input>
        <Button></Button>
      </div>
    </Container>
  );
}

export default App;
