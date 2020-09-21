import React, { useEffect, useMemo, useState } from "react";
import { Button, ToggleSwitch } from "components/index";
import { ButtonUI } from "ui/index";
import { useQuery, gql } from "@apollo/client";
import { GetHello } from "~/types/generated/GetHello";

const HELLO_WORLD = gql`
  query GetHello {
    hello
  }
`;

export default function Main() {
  const buttonStyle = useMemo(() => ({ color: "$destructive" } as const), []);
  const [toggled, setToggled] = useState(true);

  const { loading, error, data, refetch } = useQuery<GetHello>(HELLO_WORLD);

  useEffect(() => {
    refetch();
  }, []);

  return (
    <main>
      <h1>Hello world</h1>
      <h2>test</h2>
      {loading && <p>loading...</p>}
      {error && <p>error...</p>}
      <p>here is{JSON.stringify(data)}</p>
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
