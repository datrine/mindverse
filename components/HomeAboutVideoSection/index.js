import { SectionWrapper } from "../../styles/styled-components/utility";
import {
  HAVSContainer,
  HAVSImg,
  HAVSMainText,
  HAVSSubTextBottom,
  HAVSSubTextTop,
} from "./hAVSStyles";

import { ButtonYellow } from "../Button/buttonStyles";

export default function HomeAboutVideoSection() {
  return (
    <SectionWrapper>
      <HAVSContainer>
        <HAVSImg src="/images/svg/placeholder-video.svg" alt="placeholder" />
        <HAVSMainText>
          We Are Changing The Narratives and other things
        </HAVSMainText>
        <HAVSSubTextTop>
          We started setting the table straight in our previous post. So, we
          want to proceed from where we stopped.
        </HAVSSubTextTop>
        <HAVSSubTextBottom>
          If you missed the last post you can click here to understand better
          how...
        </HAVSSubTextBottom>
        <ButtonYellow>Watch Now!</ButtonYellow>
      </HAVSContainer>
    </SectionWrapper>
  );
}
