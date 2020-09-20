import React, { MouseEvent } from "react";
import { ButtonUI } from "ui/index";

export function Button({
  constructive,
  destructive,
  highlighted,
  lined,
  radius,
  onClick,
}: ButtonType & ButtonRadius & ButtonNative) {
  return (
    <ButtonUI
      type="button"
      {...{ constructive, destructive, highlighted, lined }}
      {...{ radius }}
      {...{ onClick }}
    >
      Test
    </ButtonUI>
  );
}

type ButtonNative = {
  onClick?: (e: MouseEvent) => void;
};

type ButtonRadius = { radius?: "pill" | "none" };

type ButtonType =
  | {
      constructive: boolean;
      destructive?: never;
      highlighted?: never;
      lined?: never;
    }
  | {
      constructive?: never;
      highlighted?: never;
      destructive: boolean;
      lined?: never;
    }
  | {
      constructive?: never;
      highlighted: boolean;
      lined?: boolean;
      destructive?: never;
    }
  | {
      constructive?: undefined;
      destructive?: undefined;
      highlighted?: undefined;
      lined?: boolean;
    };
