import styled from "styled-components";

export const DataContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;
`;

export const DataObj = styled.div`
  height: 80vh;
  width: 40vw;
  background-color: white;
  border-radius: 2%;
`;

export const DataH1 = styled.h1`
  margin-top: 10px;
  margin-bottom: 5px;
  color: black;
  font-size: 30px;
  font-weight: bold;
`;

export const IntroBox = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const DescriptionBox = styled.div`
  height: 50%;
  width: 100%;
`;

export const IntroLeftSide = styled.div`
  height: 100%;
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const IntroRightSide = styled.div`
  height: 100%;
  width: 100%;
`;

export const ImgContainer = styled.img`
  height: 70%;
  width: 90%;
  background-color: black;
`;

export const DataInformation = styled.div`
  height: 80%;
  width: 95%;
  display: flex;
  flex-direction: column;
`;

export const DataDefaultText = styled.label`
  color: black;
  font-weight: bold;
  font-size: 18px;
  margin: 3px;
`;

export const DataDefaultTextStatus = styled.label`
  color: black;
  font-weight: bold;
  font-size: 18px;
  margin: 3px;
  display: flex;
  justify-content: flex-start;
  gap: 10px;
`;

export const DataValueText = styled.label`
  color: #01bf71;
  font-weight: bold;
  font-size: 18px;
  margin: 3px;
`;

export const UselessReviewArea = styled.div`
  margin-top: 0;
  padding-top: 0;
  height: 12%;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding-right: 20px;
`;

export const Description = styled.div`
  margin-top: 5px;
  height: 100%;
  width: 100%;
  color: black;
  text-align: center;
`;

export const Reservar = styled.button`
  border-radius: 50px;
  text-decoration: none;
  background: ${({ primary }) => (primary ? "#01BF71" : "#010606")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#ffffff" : "#01BF71 ")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#01BF71" : "#ffffff")};
  }
`;
