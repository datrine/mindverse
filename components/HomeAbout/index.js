import {
  SectionHeader,
  SectionWrapper,
} from "../../styles/styled-components/utility";
import {
  AboutDetails,
  AboutDetailsIcon,
  HomeAboutWrapper,
  AboutDetailsTop,
  AboutDetailsTopL,
  AboutDetailsTopR,
  AboutDetailsHeader,
  AboutDetailsBottom,
  AboutDetailsText,
  AboutDetailsBottomL,
  AboutDetailsBottomR,
  GroupCircles,
  GroupCirclesLine,
} from "./homeAboutStyles";

const aboutDetails = [
  {
    imgSrc: "/images/svg/icon-live-tv.svg",
    header: "Influencer's Corner",
    text:
      "Lead, teach, and inspire people of influence equipping them to make positive and sustainable difference from the standpoint of a well versed and excellent mind.",
  },
  {
    imgSrc: "/images/svg/icon-live-tv-withbg.svg",
    header: "Poimad TV",
    text:
      "Lead, teach, and inspire people of influence equipping them to make positive and sustainable difference from the standpoint of a well versed and excellent mind.",
  },
  {
    imgSrc: "/images/svg/icon-chat.svg",
    header: "Chat Room",
    text:
      "Lead, teach, and inspire people of influence equipping them to make positive and sustainable difference from the standpoint of a well versed and excellent mind.",
  },
  {
    imgSrc: "/images/svg/icon-live-tv.svg",
    header: "Becoming Sessions",
    text:
      "Lead, teach, and inspire people of influence equipping them to make positive and sustainable difference from the standpoint of a well versed and excellent mind.",
  },
  {
    imgSrc: "/images/svg/icon-live-tv.svg",
    header: "Mindverse Academy (masterclasses)",
    text:
      "Lead, teach, and inspire people of influence equipping them to make positive and sustainable difference from the standpoint of a well versed and excellent mind.",
  },
  {
    imgSrc: "/images/svg/icon-chat-support.svg",
    header: "Think tanks",
    text:
      "Lead, teach, and inspire people of influence equipping them to make positive and sustainable difference from the standpoint of a well versed and excellent mind.",
  },
];

export default function HomeAbout() {
  return (
    <SectionWrapper>
      <SectionHeader>
        What is <span style={{ color: " #0194b0" }}>MindVerse</span>?
      </SectionHeader>
      <HomeAboutWrapper>
        <GroupCircles
          src="/images/svg/group-circles.svg"
          alt="illustration of circles in a group"
        />
        <GroupCirclesLine
          src="/images/svg/group-circles-line.svg"
          alt="illustration of a line path"
        />
        {aboutDetails.map((detail) => (
          <AboutDetails>
            <AboutDetailsTop>
              <AboutDetailsTopL />
              <AboutDetailsTopR>
                <AboutDetailsHeader>{detail.header}</AboutDetailsHeader>
              </AboutDetailsTopR>
            </AboutDetailsTop>
            <AboutDetailsBottom>
              <AboutDetailsBottomL>
                <AboutDetailsIcon
                  src={detail.imgSrc}
                  alt="a tv icon illustration"
                />
              </AboutDetailsBottomL>

              <AboutDetailsBottomR>
                <AboutDetailsText>{detail.text}</AboutDetailsText>
              </AboutDetailsBottomR>
            </AboutDetailsBottom>
          </AboutDetails>
        ))}
      </HomeAboutWrapper>
    </SectionWrapper>
  );
}
