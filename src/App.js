import { Newslettersuccess } from "./components/Newslettersuccess";
import { Container } from "./components/styled/container.styled";
import { Attribution, AttributionA } from "./components/styled/newsletter.styled";

function App() {
  return (
    <Container>
      <Newslettersuccess/>
      <Attribution>
        <AttributionA>
          <p><i>Challenge by</i><a href="https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv/hub" rel="noreferrer" target="_blank">&nbsp;Frontend Mentor | Newsletter sign-up with success message.</a></p>
        </AttributionA>
        <AttributionA>
          <p>&nbsp;&nbsp;<i>Coded by</i><a href="https://www.linkedin.com/in/rikiwendri/">&nbsp;Riki Wendri</a></p>
        </AttributionA>
      </Attribution>
    </Container>
  );
}

export default App;
