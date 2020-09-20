import React, { useMemo, useState } from "react";
import { Button, ToggleSwitch } from "components/index";
import { ButtonUI } from "ui/index";

export default function Main() {
  const buttonStyle = useMemo(() => ({ color: "$destructive" } as const), []);
  const [toggled, setToggled] = useState(true);

  return (
    <main>
      <h1>Hello world</h1>
      <h2>test</h2>
      <ToggleSwitch
        checked={toggled}
        onClick={() => {
          setToggled(!toggled);
        }}
      />
      <ButtonUI constructive css={buttonStyle}>
        Hello world
      </ButtonUI>
      <Button constructive />
      <Button lined />
      <Button highlighted />
    </main>
  );
}
