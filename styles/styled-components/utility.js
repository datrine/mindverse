import styled from "styled-components";

//This are utilities classes(components)

export const SectionWrapper = styled.section`
  padding: 6rem 0;
`;

export const SectionHeader = styled.h2`
  font-size: var(--fontsize-sectionheader);
  margin-bottom: 2rem;
  font-weight: 700;
  text-align: center;
`;

export const CurvedDiv = styled.div`
  position: absolute;
  top: ${(props) => (props.top ? `${props.top}` : null)};
  bottom: ${(props) => (props.bottom ? `${props.bottom}` : null)};
  height: 5rem;
  border-radius: 5rem;
`;

export const PrimaryLeft = styled(CurvedDiv)`
  background: linear-gradient(
    to right,
    var(--color-white),
    var(--color-primary)
  );
  width: 10rem;
  left: -3rem;
`;

export const PrimaryRight = styled(CurvedDiv)`
  background: linear-gradient(
    to right,
    var(--color-primary),
    var(--color-white)
  );
  width: 10rem;
  right: -3rem;
  overflow-x: hidden;
`;

export const CurveTraingleSvg = styled.img`
  object-fit: cover;
  position: absolute;
  top: ${(props) => (props.top ? `${props.top}` : null)};
  right: ${(props) => (props.right ? `${props.right}` : null)};
  left: ${(props) => (props.left ? `${props.left}` : null)};
  bottom: ${(props) => (props.bottom ? `${props.bottom}` : null)};
`;

{
  /* <><RoundPathSvg
          src="/images/svg/path-curve-secondary.svg"
          alt="decorative round icon"
          left="-70px"
          top="90px"
        />
        <RoundPathSvg
          src="/images/svg/path-curve-primary.svg"
          alt="decorative round icon"
          left="-140px"
          top="180px"
        /></> */
}
