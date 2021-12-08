import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== password2) {
      setError("Las contraseñas no coinciden");
      return;
    }

    try {
      const response = await fetch(`${process.env.REACT_APP_API}/usuarios`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const json = await response.json();

      if (!response.ok) {
        throw new Error(json.message);
      }

      navigate("/new-user");
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/"> ANDA </Icon>
          <FormContent>
            <Form onSubmit={handleSubmit}>
              <FormH1> Create your account! </FormH1>
              <FormLabel htmlFor="email"> Email </FormLabel>
              <FormInput
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <FormLabel htmlFor="password"> Password </FormLabel>
              <FormInput
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <FormLabel htmlFor="password2"> Verify Password </FormLabel>
              <FormInput
                type="password"
                id="password2"
                value={password2}
                onChange={(e) => setPassword2(e.target.value)}
                required
              />
              <FormButton type="submit"> Continue </FormButton>
            </Form>
            {error ? <p style={{ color: "red" }}>{error}</p> : null}
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignUppp;
