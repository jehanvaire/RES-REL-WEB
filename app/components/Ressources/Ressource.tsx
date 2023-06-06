"use client";

import RessourcesService from "@/app/services/RessourcesService";
import moment from "moment";
import React, { useState } from "react";
import { IonIcon } from "@ionic/react";
import {
  ellipsisVertical,
  bookmarksOutline,
  heart,
  heartOutline,
  chatbubbleOutline,
} from "ionicons/icons";
import { LiensTelechargementsEnum } from "@/app/ressources/enums/LiensTelechargements";
import {
  Avatar,
  Button,
  Card,
  Col,
  Image,
  Row,
  Spacer,
  Text,
} from "@nextui-org/react";

const Ressource = ({ ressource }: any) => {
  const [liked, setLiked] = useState(false);

  function LikePublication() {
    console.log("TODO: like publication", ressource);
    setLiked(!liked);
  }

  function ShowCommentsSection() {
    console.log("TODO: show comments section");
  }

  function SauvegarderPublication() {
    RessourcesService.SauvegarderPublication(1).then((res) => {
      console.log(res);
    });
  }

  function AfficherPlusOptions() {
    console.log("TODO: afficher plus d'options");
  }

  return (
    <Card style={{ display: "flex", flexDirection: "column" }}>
      <Card.Body
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <Col>
          <Row>
            <Avatar
              src={
                LiensTelechargementsEnum.PHOTOPROFILURL +
                ressource.utilisateur.id +
                LiensTelechargementsEnum.DOWNLOAD
              }
              alt="avatar"
            />
            <Spacer x={1} />
            <Text>
              Partagé par {ressource.utilisateur.prenom}{" "}
              {ressource.utilisateur.nom}
            </Text>
            <div style={{ flex: 1 }}></div>
            <Text>
              {moment(ressource.dateCreation).fromNow() === "Invalid date"
                ? "quelques secondes"
                : moment(ressource.dateCreation).fromNow()}
            </Text>
          </Row>
          <h2 style={{ margin: "10px 0" }}>{ressource.titre}</h2>
          <Text>{ressource.contenu}</Text>
          <Image
            src={
              LiensTelechargementsEnum.PIECESJOINTEURL +
              ressource.pieceJointe.id +
              LiensTelechargementsEnum.DOWNLOAD
            }
            style={{ height: "400px" }}
          />
          <Spacer y={1} />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Button onClick={LikePublication}>
              {liked ? (
                <IonIcon
                  icon={heart}
                  size="small"
                  style={{ color: "red" }}
                ></IonIcon>
              ) : (
                <IonIcon icon={heartOutline} size="small"></IonIcon>
              )}
            </Button>
            <div style={{ flex: 1 }}></div>
            <Button onClick={ShowCommentsSection}>
              <IonIcon icon={chatbubbleOutline} size="small"></IonIcon>
            </Button>
            <div style={{ flex: 1 }}></div>
            <Button onClick={SauvegarderPublication}>
              <IonIcon icon={bookmarksOutline} size="small"></IonIcon>
            </Button>
            <div style={{ flex: 1 }}></div>
            <Button onClick={AfficherPlusOptions}>
              <IonIcon icon={ellipsisVertical} size="small" />
            </Button>
          </div>
        </Col>
      </Card.Body>
    </Card>
  );
};

export default Ressource;
