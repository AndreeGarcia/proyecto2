import React from "react";
import {
  Container,
  Icon,
  FormLabel,
  FormInput,
  Form,
  FormButton,
  FormContent,
  FormH1,
  FormWrap,
} from "./SignupElements";

const SignUppp = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/"> ANDA </Icon>
          <FormContent>
            <Form action="#">
              <FormH1> Create your account! </FormH1>
              <FormLabel htmlFor="for"> Email </FormLabel>
              <FormInput type="email" required />
              <FormLabel htmlFor="for"> Password </FormLabel>
              <FormInput type="password" required />
              <FormLabel htmlFor="for"> Verify Password </FormLabel>
              <FormInput type="password" required />
              <FormButton type="submit"> Continue </FormButton>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignUppp;
