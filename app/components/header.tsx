"use client";
import Link from "next/link";
import React from "react";
import iconeResRel from "../../public/assets/icon.png";
import { IonIcon } from "@ionic/react";
import { notifications } from "ionicons/icons";
import { Button, Avatar, Row, Card, Spacer, Tooltip, Navbar, styled, Image } from "@nextui-org/react";
import AvatarTooltip from "./AvatarTooltip";
import Layout from "../layout";

const espacement = 1;
const Box = styled("div", {
  boxSizing: "border-box",
});

const UtilisateurConnecteLinks = () => {
  return (
    <>
      <Navbar.Content>
        <Navbar.Link color="primary" href="/pages/ressources">
          <b>Ressources</b>
        </Navbar.Link>
        <Navbar.Link color="primary" href="/pages/activites">
          <b>Activités</b>
        </Navbar.Link>
        <Navbar.Link color="primary" href="/pages/creationRessource">
          <b>Créer une ressource</b>
        </Navbar.Link>
        <Navbar.Link color="primary" href="/pages/relations">
          <b>Mes relations</b>
        </Navbar.Link>
      </Navbar.Content>
      <Navbar.Link color="primary" href="/pages/notifications">
        <IonIcon icon={notifications} />
      </Navbar.Link>

      {/* <img
        src="https://media.tenor.com/vxFNoJHV3I4AAAAC/chiquichico.gif"
        alt="Logo res rel"
        className="image-profil"
        height="60px"
      /> */}
      <Tooltip content={<AvatarTooltip />} placement="bottom" >
        <Avatar
          src="https://media.tenor.com/vxFNoJHV3I4AAAAC/chiquichico.gif"
          alt="photo profil"
        />
      </Tooltip>

      <Navbar.Item>
        <Button auto flat>Se déconnecter</Button>
      </Navbar.Item>
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
    <>
      <Box css={{ maxW: "100%" }}>
        <Navbar isBordered variant="sticky">
          <Navbar.Toggle showIn="xs" />
          <Navbar.Brand>
            <Link href="/">
              <Image
                width={50}
                height={50}
                src={iconeResRel.src}
                alt="Logo res rel" />
            </Link>
          </Navbar.Brand>
          <Navbar.Content
            enableCursorHighlight
            activeColor="secondary"
            hideIn="xs"
            variant="highlight-rounded"
          >
            <UtilisateurConnecteLinks />
          </Navbar.Content>
        </Navbar>
      </Box>
    </>

  );
};

export default Header;
