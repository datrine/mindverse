import styled from "styled-components";

export const FooterContainer = styled.footer`
  padding: 3rem 0 0 1rem;
  width: 100%;
  background-color: var(--color-tertiary);
  color: var(--color-white);
`;

export const FooterInner = styled.div`
  width: 90%;
  margin: 0 auto;
`;

export const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 0.3rem solid rgba(225, 225, 225, 0.4);
  padding-bottom: 4rem;
`;

export const FooterTopItem = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
`;

export const FooterTopHeader = styled.h3`
  font-size: 1.6rem;
  margin-bottom: 1.5rem;
`;

export const FooterTopLink = styled.a`
  font-size: 1.4rem;

  :not(:last-child) {
    margin-bottom: 1.5rem;
  }
`;

export const FooterIcon = styled.img`
  width: 2rem;
  margin-right: 1rem;
`;

export const FooterText = styled.span`
  font-size: 1.4rem;
`;

export const FooterBottom = styled.div`
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FooterLogo = styled.img`
  object-fit: cover;
  width: 8rem;
`;

export const FooterBottomLink = styled.a`
  font-size: 1.2rem;
  margin-right: 3.5rem;
`;

export const FooterTextSmall = styled.span`
  font-size: 1.2rem;
`;
