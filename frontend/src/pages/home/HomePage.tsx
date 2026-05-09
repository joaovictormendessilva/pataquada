import { Container } from "./components/container";
import { DigButton } from "./components/dig-button";
import { Header } from "./components/header";

export function HomePage() {
  return (
    <Container>
      <Header />

      <DigButton />
    </Container>
  );
}
