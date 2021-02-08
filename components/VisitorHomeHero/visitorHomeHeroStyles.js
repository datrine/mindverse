import styled from "styled-components";

export const HeroContainer = styled.div`
  height: calc(100vh - 7rem);
  width: 100%;
  position: relative;
  display: flex;
  background-color: var(--color-primary);
  color: var(--color-white);
  overflow: hidden;
`;

export const HeroTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;
`;

export const HeroTextInner = styled.div`
  height: auto;
  width: 80%;
`;

export const HeroTextHeader = styled.h2`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
`;

export const HeroTextUnderline = styled.span`
  display: inline-block;
  height: 0.5rem;
  width: 11rem;
  background-color: var(--color-white);
  border-radius: 5rem;
`;

export const HeroTextSmall = styled.span`
  font-size: 1.6rem;
  display: inline-block;
  line-height: 2;
  margin: 1.5rem 0;
`;

export const HeroButtonsContainer = styled.div`
  margin-top: 2rem;
`;

export const HeroImageContainer = styled.div`
  width: 50%;
  padding: 8rem 8rem 8rem 0;
  height: 100%;
`;

export const HeroImage = styled.img`
  object-fit: cover;
`;

export const HeroImagePath = styled.img`
  object-fit: cover;
  position: absolute;
  right: -8rem;
  top: 3rem;
  height: 6rem;
`;
