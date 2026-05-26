import Header from "./components/Header";
import Card from "./components/Card";
import Form from "./components/Form";
import { Container } from "@mui/material";

function App() {
  return (
    <>
      <Header />
      <Container maxWidth="sm">
        <Card title="Welcome" text="This is Material UI project" />
        <Card title="Features" text="Using MUI components" />
        <Form />
      </Container>
    </>
  );
}

export default App;
