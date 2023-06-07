"use client";

import RessourcesService from "@/app/services/RessourcesService";
import moment from "moment";
import React, { useEffect, useState } from "react";
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
import PdfPreview from "./PdfPreview";
import Link from "next/link";

const Ressource = ({ ressource }: any) => {
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const videos = document.getElementsByClassName(
      "video"
    ) as HTMLCollectionOf<Element>;
    for (let i = 0; i < videos.length; i++) {
      (videos[i] as HTMLVideoElement).volume = 0;
    }
  }, []);

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
    <Card>
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

          {ressource.pieceJointe.type === "IMAGE" && (
            <Image
              src={
                LiensTelechargementsEnum.PIECESJOINTEURL +
                ressource.pieceJointe.id +
                LiensTelechargementsEnum.DOWNLOAD
              }
              style={{ height: "400px" }}
            />
          )}
          {ressource.pieceJointe.type === "VIDEO" && (
            <video
              className="video"
              autoPlay
              src={
                LiensTelechargementsEnum.PIECESJOINTEURL +
                ressource.pieceJointe.id +
                LiensTelechargementsEnum.DOWNLOAD
              }
              style={{ height: "400px", width: "100%" }}
              controls
            ></video>
          )}
          {/* {ressource.pieceJointe.type === "PDF" && (
            <PdfPreview
              lien={
                LiensTelechargementsEnum.PIECESJOINTEURL +
                ressource.pieceJointe.id +
                LiensTelechargementsEnum.DOWNLOAD
              }
            />
          )} */}

          <Spacer y={1} />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Button onPress={LikePublication}>
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
            <Link href={`/pages/commentaires/${ressource.id}`}>
              <IonIcon icon={chatbubbleOutline} size="small"></IonIcon>
            </Link>
            <div style={{ flex: 1 }}></div>
            <Button onPress={SauvegarderPublication}>
              <IonIcon icon={bookmarksOutline} size="small"></IonIcon>
            </Button>
            <div style={{ flex: 1 }}></div>
            <Button onPress={AfficherPlusOptions}>
              <IonIcon icon={ellipsisVertical} size="small" />
            </Button>
          </div>
        </Col>
      </Card.Body>
    </Card>
  );
};

export default Ressource;
