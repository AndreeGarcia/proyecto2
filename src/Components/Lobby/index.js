import React, { useState } from "react";
import { Button } from "../ButtonElements";

//import { createBrowserHistory as history } from "history";

import Video from "../../video/bg.mp4";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./LobbyElements";

function Lobby() {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg playsInline autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Tu espacio ideal para el evento perfecto</HeroH1>
        <HeroP>
          Regístrate ahora para encontrar tu espacio perfecto o para que
          nuestros clientes puedan encontrar tu espacio.
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to="espacioideal"
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
            Get Started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
}

export default Lobby;
