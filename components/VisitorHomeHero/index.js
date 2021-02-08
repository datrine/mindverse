import { ButtonAlternate, ButtonWhiteInv } from "../Button/buttonStyles";
import {
  HeroContainer,
  HeroTextContainer,
  HeroImage,
  HeroImageContainer,
  HeroImagePath,
  HeroTextHeader,
  HeroTextUnderline,
  HeroTextInner,
  HeroTextSmall,
  HeroButtonsContainer,
} from "./visitorHomeHeroStyles";

export default function VisitorHomeHero() {
  return (
    <HeroContainer>
      <HeroTextContainer>
        <HeroTextInner>
          <HeroTextHeader>We are Changing The Narratives</HeroTextHeader>
          <HeroTextUnderline />
          <HeroTextSmall>
            Lead, teach, and inspire people of influence equipping them to make
            positive and sustainable difference from the standpoint of a well
            versed and excellent mind.
          </HeroTextSmall>
          <HeroButtonsContainer>
            <ButtonAlternate mr="20px">Login</ButtonAlternate>
            <ButtonWhiteInv>Sign Up</ButtonWhiteInv>
          </HeroButtonsContainer>
        </HeroTextInner>
      </HeroTextContainer>
      <HeroImageContainer>
        <HeroImage src="/images/svg/visitors-hero.svg" alt="hero icon" />
        <HeroImagePath
          src="/images/svg/path-curve-secondary.svg"
          alt="hero icon path"
        />
      </HeroImageContainer>
    </HeroContainer>
  );
}
