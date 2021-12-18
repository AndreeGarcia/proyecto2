import React, { useState } from "react";
import { Button2 } from "../ButtonElements";

import {
  ContainerPrincipal,
  ProfileBgPrincipal,
  ProfileColumnPrincipal,
  ProfileContentPrincipal,
  ProfileH1Principal,
  ProfilePPrincipal,
  AaaPrincipal,
  ProfileBtnWrapperPrincipal,
  CCField,
  CCLabel,
  CCForm,
  CCArea,
  ImageUpload,
  ImageArea,
  Footer,
  ImgImg,
  HomeFa,
} from "./epElements.js";

const EditarPerfil = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  const loadFile = function (event) {
    const image = document.getElementById("output");
    image.src = URL.createObjectURL(event.target.files[0]);
  };
  return (
    <>
      <ContainerPrincipal id="home">
        <ProfileBgPrincipal></ProfileBgPrincipal>
        <ProfileContentPrincipal>
          <ProfileH1Principal>Bienvenido,</ProfileH1Principal>
          <ProfileColumnPrincipal>
            <AaaPrincipal>
              <ImageArea>
                <ImageUpload
                  type="file"
                  accept="image/*"
                  name="image"
                  onChange={loadFile}
                />
                <ImgImg id="output" />
              </ImageArea>

              <CCForm>
                <ProfilePPrincipal> Change your password </ProfilePPrincipal>
                <CCLabel htmlFor="password"> New password</CCLabel>
                <CCField type="password" id="password" required />
                <CCLabel htmlFor="password"> Verify new password </CCLabel>
                <CCField type="password" id="password2" required />
              </CCForm>
              <ProfileBtnWrapperPrincipal>
                <Button2
                  to="/profileeditor"
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
                  {" "}
                  Cambiar{" "}
                </Button2>
              </ProfileBtnWrapperPrincipal>
            </AaaPrincipal>
            <AaaPrincipal>
              <ProfilePPrincipal> Busca un espacio </ProfilePPrincipal>
              <CCLabel htmlFor="username"> Username </CCLabel>
              <CCField type="text" id="Username" />
              <CCLabel htmlFor="email"> Email </CCLabel>
              <CCField type="email" id="eemail" />
              <CCLabel htmlFor="phone"> Phone Number </CCLabel>
              <CCField type="number" id="phone" />
              <CCLabel htmlFor="aboutme"> About me </CCLabel>
              <CCArea></CCArea>
              <ProfileBtnWrapperPrincipal>
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
                  {" "}
                  Guardar Cambios{" "}
                </Button2>
              </ProfileBtnWrapperPrincipal>
            </AaaPrincipal>
          </ProfileColumnPrincipal>
          <Footer>
            <Button2
              to="/"
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
              <HomeFa></HomeFa>
            </Button2>
          </Footer>
        </ProfileContentPrincipal>
      </ContainerPrincipal>
    </>
  );
};

export default EditarPerfil;
