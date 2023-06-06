"use client";
import { Col, Grid, Spacer } from "@nextui-org/react";
import React from "react";
import Link from "next/link";

const AvatarTooltip = () => {
  return (
    <Grid.Container
      css={{
        mw: "250px",
        borderRadius: "$lg",
        padding: "$sm",
      }}
    >
      <Col>
        <Link href={`/pages/profil/${3}`}>
          <h5>Mon profil</h5>
        </Link>
        <Spacer y={0.5} />
        <Link href="">
          <h5>Mes favoris</h5>
        </Link>
        <Spacer y={0.5} />
        <Link href="">
          <h5>À regarder plus tard</h5>
        </Link>
        <Spacer y={0.5} />
        <Link href="/pages/parametres/">
          <h5>Paramètres</h5>
        </Link>
      </Col>
    </Grid.Container>
  );
};

export default AvatarTooltip;
