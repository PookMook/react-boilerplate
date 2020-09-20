import React, { useMemo } from "react";
import { Button } from "components/index";
import { ButtonUI } from "ui/index";
import styled, { css } from "styled";

css.global({
  h1: {
    margin: "none",
  },
});

const Placeholder = styled("h2", {
  fontSize: "l",
});

export default function Main() {
  const buttonStyle = useMemo(() => ({ color: "$destructive" } as const), []);

  return (
    <>
      <Placeholder>Hello world</Placeholder>
      <ButtonUI constructive css={buttonStyle}>
        Hello world
      </ButtonUI>
      <Button constructive />
      <Button lined />
      <Button highlighted />
    </>
  );
}
