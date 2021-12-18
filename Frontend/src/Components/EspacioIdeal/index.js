import React from "react";
import { Button2 } from "../ButtonElements";
import {
  InfoWrapper,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  InfoContainer2,
  InfoRow2,
} from "./EspacioElements";

import ImagePreviews from "./aabbcc";

const EspacioIdeal = ({
  lightBg,
  imgStart,
  topLine,
  lightText,
  headline,
  description,
  buttonLabel,
  alt,
  id,
  img,
  primary,
  darkText,
  dark,
  dark2,
}) => {
  return (
    <>
      <InfoContainer2 lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow2 imgStart={imgStart}>
            <Column1>
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
            </Column1>
            <Column2>
              <ImagePreviews></ImagePreviews>
            </Column2>
          </InfoRow2>
        </InfoWrapper>
      </InfoContainer2>
    </>
  );
};

export default EspacioIdeal;
