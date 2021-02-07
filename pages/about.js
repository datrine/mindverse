import React from "react";

import {
  Title,
  Container,
  FlexTitleContainer,
} from "../components/Layout/AboutPage/aboutStyles";

function About() {
  return (
    <div>
      <Container>
        <FlexTitleContainer>
          <Title color="black">About</Title>
          <Title color="blue">Mindverse</Title>
        </FlexTitleContainer>
      </Container>
    </div>
  );
}

export default About;
