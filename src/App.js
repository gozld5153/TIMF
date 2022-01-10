import styled from "styled-components";

import Navbar from "./components/Navbar";
import Slide from "./components/Slide";

function App() {
  return (
    <Container>
      <Navbar />
      <Slide />
    </Container>
  );
}

const Container = styled.div``;

export default App;
