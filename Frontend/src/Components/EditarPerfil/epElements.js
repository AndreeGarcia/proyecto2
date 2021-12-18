import styled from "styled-components";
import { FaHome } from "react-icons/fa";

export const ContainerPrincipal = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;
  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: -webkit-gradient(
        linear,
        left top,
        left bottom,
        from(rgba(0, 0, 0, 0.2)),
        to(rgba(0, 0, 0, 0.2))
      ),
      -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.2)), to(transparent));
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    z-index: 2;
  }
`;

export const ProfileBgPrincipal = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const ProfileColumnPrincipal = styled.div`
  margin-top: 0;
  display: flex;
  width: 90vw;
  height: 90vh;
  flex-direction: row;
  justify-content: center;
`;

export const ProfileContentPrincipal = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProfileH1Principal = styled.h1`
  color: #fff;
  font-size: 48px;
  text-align: center;
  margin: 0px;
  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const ProfilePPrincipal = styled.p`
  margin-bottom: 40px;
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const ImageArea = styled.div`
  background-color: transparent;
  height: 40%;
  width: 50%;
  margin: 0 auto;
  margin-bottom: 20px;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: space-between;
`;

export const ImageUpload = styled.input`
  color: white;
`;

export const ImgImg = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 50%;
  border: 3px solid white;
`;

export const AaaPrincipal = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 40px;
  padding: 10px 15px 10px 15px;
`;
export const ProfileBtnWrapperPrincipal = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CCForm = styled.form`
  background: transparent;
  max-width: 400px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;

  border-radius: 4px;
  @media screen and (max-width: 400px) {
    padding: 32px 32px;
  }
`;
export const CCField = styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;
`;
export const CCArea = styled.textarea`
  padding: 16px 16px;
  height: 240px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;
  resize: none;
`;

export const CCLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: #fff;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  margin: 60px;
  height: 40px;
  width: 90vw;
  text-align: center;
`;

export const HomeFa = styled(FaHome)`
  text-align: center;
  margin-left: 8px;
  font-size: 20px;
`;
