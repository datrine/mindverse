import {
  ButtonsContainer,
  HeaderContainer,
  HeaderInner,
  Logo,
  LogoBox,
} from "./headerStyles";
import Link from "next/link";
import { HButtonPrimaryInv, ButtonPrimary } from "../../Button/buttonStyles";

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderInner>
        <LogoBox>
          <Link href="/">
            <a>
              <Logo src="/images/svg/logo.svg" alt="mindverse logo" />
            </a>
          </Link>
        </LogoBox>
        <ButtonsContainer>
          <HButtonPrimaryInv>Login</HButtonPrimaryInv>
          <ButtonPrimary>Sign In</ButtonPrimary>
        </ButtonsContainer>
      </HeaderInner>
    </HeaderContainer>
  );
}

<Link href="/">
  <a>Home</a>
</Link>;
