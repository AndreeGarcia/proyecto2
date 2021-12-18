import React, { useState } from "react";
import {
  DataContainer,
  DataObj,
  DataH1,
  IntroBox,
  DescriptionBox,
  IntroLeftSide,
  IntroRightSide,
  ImgContainer,
  DataInformation,
  DataDefaultText,
  DataDefaultTextStatus,
  DataValueText,
  UselessReviewArea,
  Description,
  Reservar,
} from "./resuElements";

import img1 from "../../images/hotel1.jpg";

import StarRating from "./review";
import ReservaStatus from "./status";

function Resultados() {
  const [reservacion, setReservacion] = useState(false);

  const reservaboton = () => {
    if (Reservar.onClick === true) {
      setReservacion(true);
      console.log("clicked");
    } else {
      setReservacion(false);
    }
  };
  return (
    <>
      <DataContainer>
        <DataObj>
          <IntroBox>
            <IntroLeftSide>
              <ImgContainer src={img1}></ImgContainer>
            </IntroLeftSide>
            <IntroRightSide>
              <DataH1> Espacio 1 </DataH1>
              <DataInformation>
                <DataDefaultText>
                  {" "}
                  Name: <DataValueText> Hotel Andre </DataValueText>{" "}
                </DataDefaultText>
                <DataDefaultText>
                  {" "}
                  Location: <DataValueText> España </DataValueText>{" "}
                </DataDefaultText>
                <DataDefaultText>
                  {" "}
                  Price: <DataValueText> $100/noche </DataValueText>{" "}
                </DataDefaultText>
                <DataDefaultText>
                  {" "}
                  Espacio: <DataValueText> Hotel </DataValueText>{" "}
                </DataDefaultText>
                <DataDefaultTextStatus>
                  Status: <ReservaStatus></ReservaStatus>
                </DataDefaultTextStatus>
              </DataInformation>
            </IntroRightSide>
          </IntroBox>
          <DescriptionBox>
            <UselessReviewArea>
              <StarRating> </StarRating>
            </UselessReviewArea>
            <Description>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              tempor mauris libero, quis consectetur erat finibus posuere. Cras
              vestibulum dolor sed ipsum auctor, egestas porta urna iaculis.
              Pellentesque commodo ex id dolor gravida tincidunt. Phasellus
              molestie at libero porta blandit. Etiam venenatis velit nunc.
              Curabitur posuere, lacus non dictum mollis, erat augue aliquam
              purus, vel tempor dui mi id neque. Morbi justo mauris, consectetur
              sit amet molestie ut, ornare sed libero.
            </Description>
            <Reservar onClick={reservacion}> Reservar </Reservar>
          </DescriptionBox>
        </DataObj>
      </DataContainer>
    </>
  );
}

export default Resultados;
