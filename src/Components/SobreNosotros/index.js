import React from "react";
import { Button2 } from "../ButtonElements";
import {
  InfoContainer3,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
} from "./SobreElements";

const AboutUs = ({
  lightBg,
  imgStart,
  topLine,
  lightText,
  headline,
  description,
  buttonLabel,
  id,
  img,
  primary,
  darkText,
  dark,
  dark2,
}) => {
  return (
    <>
      <InfoContainer3 lightBg={lightBg} id={id}>
        <TextWrapper>
          <TopLine>{topLine}</TopLine>
          <Heading lightText={lightText}>{headline}</Heading>
          <Subtitle darkText={darkText}>{description}</Subtitle>
          <BtnWrap>
            <Button2
              to="/spotlight"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
              primary={primary ? 1 : 0}
              dark={dark ? 1 : 0}
              dark2={dark2 ? 1 : 0}
            >
              {buttonLabel}
            </Button2>
          </BtnWrap>
        </TextWrapper>
      </InfoContainer3>
    </>
  );
};

export default AboutUs;
