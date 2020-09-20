import React from "react";
import styled from "styled";

const Wrapper = styled("div", {
  backgroundColor: "$light",
  height: "1.4rem",
  position: "relative",
  width: "2.2rem",
  borderRadius: "normal",
  cursor: "pointer",
  transition: "all 0.15s ease",
  variants: {
    checked: {
      true: {
        backgroundColor: "$black",
      },
    },
  },
});
const Button = styled("div", {
  backgroundColor: "$main",
  height: "1rem",
  width: "1rem",
  position: "absolute",
  top: "0.2rem",
  left: "0.2rem",
  borderRadius: "normal",
  transition: "all 0.15s ease",
  variants: {
    checked: {
      true: {
        left: "calc(100% - 1.2rem)",
        backgroundColor: "$primary",
      },
    },
  },
});

export function ToggleSwitch({
  checked,
  onClick,
}: {
  checked: boolean;
  onClick: () => void;
}) {
  return (
    <Wrapper checked={checked} onClick={onClick}>
      <Button checked={checked} />
    </Wrapper>
  );
}
