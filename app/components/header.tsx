"use client";
import Link from "next/link";
import React from "react";
import iconeResRel from "../../public/assets/icon.png";
import { IonIcon } from "@ionic/react";
import { notifications } from "ionicons/icons";
import { Button, Avatar, Row, Card, Spacer, Tooltip } from "@nextui-org/react";
import AvatarTooltip from "./AvatarTooltip";

const espacement = 1;

const UtilisateurConnecteLinks = () => {
  return (
    <>
      <Link href="/pages/ressources">
        <b>Ressources</b>
      </Link>
      <Spacer x={espacement} />

      <Link href="/pages/activites">
        <b>Activités</b>
      </Link>
      <Spacer x={espacement} />

      <Link href="/pages/creationRessource">
        <b>Créer une ressource</b>
      </Link>
      <Spacer x={espacement} />

      <Link href="/pages/relations">
        <b>Mes relations</b>
      </Link>
      <div style={{ flex: 1 }}></div>

      <Link href="/pages/notifications">
        <IonIcon icon={notifications} />
      </Link>
      <Spacer x={espacement} />

      {/* <img
        src="https://media.tenor.com/vxFNoJHV3I4AAAAC/chiquichico.gif"
        alt="Logo res rel"
        className="image-profil"
        height="60px"
      /> */}
      <Tooltip content={<AvatarTooltip />} placement="bottom">
        <Avatar
          src="https://media.tenor.com/vxFNoJHV3I4AAAAC/chiquichico.gif"
          alt="Logo res rel"
        />
      </Tooltip>
      <Spacer x={espacement} />

      <Button>Se déconnecter</Button>
    </>
  );
};

const InviteLinks = () => {
  return (
    <>
      <Link href="/connexion">Connexion</Link>
      <Link href="/inscription">Inscription</Link>
    </>
  );
};

const Header = () => {
  return (
    <Card
    //  css={{ $$cardColor: "$colors$primary" }}
    >
      <Card.Body>
        <Row justify="center" align="center">
          <Spacer x={espacement} />

          <Link href="/">
            <Avatar src={iconeResRel.src} alt="Logo res rel" />
          </Link>

          <Spacer x={espacement} />

          <UtilisateurConnecteLinks />
        </Row>
      </Card.Body>
    </Card>
  );
};

export default Header;
