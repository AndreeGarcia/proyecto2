import React, { useState } from "react";
import { Button2 } from "../ButtonElements";

import {
  ProfileContainer,
  ProfileBg,
  ProfileContent,
  ProfileH1,
  ProfileP,
  ProfileBtnWrapper,
  ArrowForward,
  ArrowRight,
  ProfileColumn,
  Aaa,
  SearchFa,
  SearchBs,
} from "./ProfileElements.js";

function Ppage() {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <>
      <ProfileContainer id="home">
        <ProfileBg></ProfileBg>
        <ProfileContent>
          <ProfileH1>Bienvenido,</ProfileH1>
          <ProfileColumn>
            <Aaa>
              <ProfileP>Edita su perfil</ProfileP>
              <ProfileBtnWrapper>
                <Button2
                  to="/editor"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                  primary="true"
                  dark="true"
                  onMouseEnter={onHover}
                  onMouseLeave={onHover}
                >
                  {hover ? <ArrowForward /> : <ArrowRight />}
                </Button2>
              </ProfileBtnWrapper>
            </Aaa>
            <Aaa>
              <ProfileP> Busca un espacio </ProfileP>
              <ProfileBtnWrapper>
                <Button2
                  to="/spotlight"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                  primary="true"
                  dark="true"
                  onMouseEnter={onHover}
                  onMouseLeave={onHover}
                >
                  {hover ? <SearchBs /> : <SearchFa />}
                </Button2>
              </ProfileBtnWrapper>
            </Aaa>
          </ProfileColumn>
        </ProfileContent>
      </ProfileContainer>
    </>
  );
}

export default Ppage;
