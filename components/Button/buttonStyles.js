import styled from "styled-components";

//Base button styles -- all buttons should extend styles from here
export const Button = styled.button`
  padding: 1rem 2.5rem;
  border: none;
  border-radius: 5rem;
  font-size: 1.6rem;
  transition: 0.3s ease-in-out all;
  cursor: pointer;

  :hover {
    opacity: 0.7;
  }
`;

//Button primary(color) styles
export const ButtonPrimary = styled(Button)`
  background-color: var(--color-primary);
  color: var(--color-white);
`;

//Button primary(color) inverted
export const ButtonPrimaryInv = styled(Button)`
  background-color: var(--color-white);
  color: var(--color-primary);
  border: 1px solid var(--color-primary);
`;

//Button primaryInv(color) for header's primaryInv button
export const HButtonPrimaryInv = styled(ButtonPrimaryInv)`
  margin-right: 2rem;
`;

//footer Buttons
export const FooterButton = styled(Button)`
  border-radius: 0.5rem;
  background-color: var(--color-black);
  color: var(--color-white);
  display: flex;
  align-items: center;
  justify-content: center;

  :not(:last-child) {
    margin-bottom: 1.5rem;
  }
`;
