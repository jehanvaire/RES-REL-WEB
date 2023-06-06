import { Col, Grid, Link, Spacer, Text } from "@nextui-org/react";
import React from "react";

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
        <Link>
          <h5>Mon profil</h5>
        </Link>
        <Spacer y={0.5} />
        <Link>
          <h5>Mes favoris</h5>
        </Link>
        <Spacer y={0.5} />
        <Link>
          <h5>À regarder plus tard</h5>
        </Link>
        <Spacer y={0.5} />
        <Link>
          <h5>Paramètres</h5>
        </Link>
      </Col>
    </Grid.Container>
  );
};

export default AvatarTooltip;
