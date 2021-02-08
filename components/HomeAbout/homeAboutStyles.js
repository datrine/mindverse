import styled from "styled-components";

export const HomeAboutWrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

export const AboutDetails = styled.div`
  width: 40%;
  margin: 2rem auto;
  padding: 3rem 0;
`;

export const AboutDetailsTop = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const AboutDetailsTopL = styled.div`
  flex-basis: 30%;
`;

export const AboutDetailsTopR = styled.div`
  flex-basis: 68%;
`;

export const AboutDetailsBottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const AboutDetailsBottomL = styled.div`
  flex-basis: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AboutDetailsIcon = styled.img`
  object-fit: cover;
  width: 7rem;
`;

export const AboutDetailsBottomR = styled.div`
  flex-basis: 68%;
`;
export const AboutDetailsHeader = styled.h4`
  font-size: var(--fontsize-miniheader);
  color: #3a6372;
  margin-bottom: 3rem;
`;

export const AboutDetailsText = styled.p`
  font-size: var(--fontsize-normal);
  line-height: 2.5rem;
`;

export const GroupCircles = styled.img`
  position: absolute;
  object-fit: cover;
  top: 7%;
  z-index: 2;
  left: 25%;
  height: 105rem;
`;

export const GroupCirclesLine = styled.img`
  position: absolute;
  object-fit: cover;
  top: 7%;
  left: 25.5%;
  height: 105rem;
`;
