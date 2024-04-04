import AlertClock from "./AlertClock";
import Hello from "./Hello";
import Welcome from "./Welcome";
import Container from "./Container";


function App() {
  return (
    <Container title= {<Hello />}>
      <Welcome name = {"Giuseppe"} age = {19}/>
      <AlertClock />
    </Container>
  );
}

export default App;
