import Link from "next/link";

import {
  FooterContainer,
  FooterInner,
  FooterTop,
  FooterTopHeader,
  FooterTopItem,
  FooterTopLink,
  FooterIcon,
  FooterText,
} from "./footerStyles";

import { FooterButton } from "../../Button/buttonStyles";

export default function Footer() {
  return (
    <FooterContainer>
      <FooterInner>
        <FooterTop>
          <FooterTopItem>
            <FooterTopHeader>General</FooterTopHeader>
            <Link href="/" passHref>
              <FooterTopLink>About Us</FooterTopLink>
            </Link>
            <Link href="/" passHref>
              <FooterTopLink>Events</FooterTopLink>
            </Link>
            <Link href="/" passHref>
              <FooterTopLink>Contact Us</FooterTopLink>
            </Link>
            <Link href="/" passHref>
              <FooterTopLink>Blog</FooterTopLink>
            </Link>
            <Link href="/" passHref>
              <FooterTopLink>First Section</FooterTopLink>
            </Link>
          </FooterTopItem>
          <FooterTopItem>
            <FooterTopHeader>Useful Links</FooterTopHeader>
            <Link href="/" passHref>
              <FooterTopLink>About Us</FooterTopLink>
            </Link>
            <Link href="/" passHref>
              <FooterTopLink>Events</FooterTopLink>
            </Link>
            <Link href="/" passHref>
              <FooterTopLink>Contact Us</FooterTopLink>
            </Link>
            <Link href="/" passHref>
              <FooterTopLink>Blog</FooterTopLink>
            </Link>
            <Link href="/" passHref>
              <FooterTopLink>First Section</FooterTopLink>
            </Link>
          </FooterTopItem>
          <FooterTopItem>
            <FooterTopHeader>Other Links</FooterTopHeader>
            <Link href="/" passHref>
              <FooterTopLink>About Us</FooterTopLink>
            </Link>
            <Link href="/" passHref>
              <FooterTopLink>Events</FooterTopLink>
            </Link>
            <Link href="/" passHref>
              <FooterTopLink>Contact Us</FooterTopLink>
            </Link>
            <Link href="/" passHref>
              <FooterTopLink>Blog</FooterTopLink>
            </Link>
            <Link href="/" passHref>
              <FooterTopLink>First Section</FooterTopLink>
            </Link>
          </FooterTopItem>
          <FooterTopItem>
            <FooterTopHeader>Download Mindverse on:</FooterTopHeader>
            <FooterButton>
              <FooterIcon
                src="/images/svg/icon-google-play.svg"
                alt="get on googleplay icon"
              />
              <FooterText>Play Store</FooterText>
            </FooterButton>
            <FooterButton>
              <FooterIcon
                src="/images/svg/icon-apple.svg"
                alt="get on googleplay icon"
              />
              <FooterText>App Store</FooterText>
            </FooterButton>
          </FooterTopItem>
        </FooterTop>
      </FooterInner>
    </FooterContainer>
  );
}
