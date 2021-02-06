import styled from "styled-components";

export const FooterContainer = styled.footer`
  padding: 2rem;
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
