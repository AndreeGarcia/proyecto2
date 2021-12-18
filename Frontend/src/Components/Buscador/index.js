import React from "react";
import {
  ContainerGrande,
  FormLabel,
  FormInput,
  Text,
  TextLink,
  Form,
  FormButton,
  FormContent,
  FormH1,
  FormWrap,
  FormLabelPapa,
  Icon,
} from "./BuscaElements";

const A123 = () => {
  return (
    <>
      <ContainerGrande>
        <FormWrap>
          <Icon to="/"> ANDA </Icon>
          <FormContent>
            <Form action="#">
              <FormH1> Find your ideal place by </FormH1>
              <FormLabel htmlFor="for"> Name </FormLabel>
              <FormInput type="search" />
              <FormLabel htmlFor="for"> Location </FormLabel>
              <FormInput type="search" />
              <FormLabel htmlFor="for"> Activity </FormLabel>
              <FormInput type="search" />
              <FormLabelPapa>
                <FormLabel htmlFor="for"> Duration </FormLabel>
                <FormInput type="date" />
                <FormLabel htmlFor="for"> </FormLabel>
                <FormInput type="date" />
              </FormLabelPapa>
              <FormButton to="/searchresult"> Continue </FormButton>
            </Form>
          </FormContent>
        </FormWrap>
      </ContainerGrande>
    </>
  );
};

export default A123;
