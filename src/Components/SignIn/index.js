import React from "react";
import {
  Container,
  FormLabel,
  FormInput,
  Text,
  TextLink,
  Form,
  FormButton,
  FormContent,
  FormH1,
  FormWrap,
  Icon,
} from "./SigninElements";

const SignInnn = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/"> ANDA </Icon>
          <FormContent>
            <Form action="#">
              <FormH1> Sign into your account </FormH1>
              <FormLabel htmlFor="for"> Email </FormLabel>
              <FormInput type="email" />
              <FormLabel htmlFor="for"> Password </FormLabel>
              <FormInput type="password" />
              <FormButton type="submit"> Continue </FormButton>
              <TextLink>
                <Text to="/SignUp">
                  {" "}
                  Don't have an account? Sign Up for free!{" "}
                </Text>
              </TextLink>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignInnn;
