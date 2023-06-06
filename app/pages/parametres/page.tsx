"use client";
import React from "react";
import { useTheme as useNextTheme } from "next-themes";
import { Container, Row, Spacer, Switch, useTheme } from "@nextui-org/react";

const ParametresPage = () => {
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();

  return (
    <Container>
      <h2>Paramètres</h2>
      <p>Changez le thème de l'application</p>
      <Row>
        <p>Thème actuel: {type}</p>
        <Spacer x={0.5} />

        <Switch
          checked={isDark}
          onChange={(e: any) => setTheme(e.target.checked ? "dark" : "light")}
        />
      </Row>
    </Container>
  );
};

export default ParametresPage;
