import React from "react";
import styled from "styled";

const StyledButton = styled("button", {
  color: "$main",
  backgroundColor: "$background",
  borderWidth: "none",
  padding: "m",
  cursor: "pointer",
  variants: {
    highlighted: {
      true: {
        backgroundColor: "$backgroundHL",
      },
    },
    constructive: {
      true: {
        color: "$constructiveText",
        backgroundColor: "$constructive",
      },
    },
    destructive: {
      true: {
        color: "$destructiveText",
        backgroundColor: "$destructive",
      },
    },
  },
});

type ButtonType =
  | {
      constructive: boolean;
      destructive?: never;
      highlighted?: never;
    }
  | {
      constructive?: never;
      highlighted?: never;
      destructive: boolean;
    }
  | {
      constructive?: never;
      highlighted: boolean;
      destructive?: never;
    }
  | {
      constructive: undefined;
      destructive: undefined;
      highlighted: undefined;
    };

export function Button({ constructive, destructive, highlighted }: ButtonType) {
  return (
    <StyledButton type="button" {...{ constructive, destructive, highlighted }}>
      Test
    </StyledButton>
  );
}
