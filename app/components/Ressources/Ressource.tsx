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
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <img
          src={
            LiensTelechargementsEnum.PHOTOPROFILURL +
            ressource.utilisateur.id +
            LiensTelechargementsEnum.DOWNLOAD
          }
          alt="avatar"
          style={{ height: 50, width: 50, borderRadius: 25 }}
        />
        <div style={{ marginLeft: 10 }}>
          <p>
            Partagé par {ressource.utilisateur.prenom}{" "}
            {ressource.utilisateur.nom}
          </p>
        </div>
        <div style={{ flex: 1 }}></div>
        <div>
          <p>
            {moment(ressource.dateCreation).fromNow() === "Invalid date"
              ? "quelques secondes"
              : moment(ressource.dateCreation).fromNow()}
          </p>
        </div>
      </div>
      <h1 style={{ margin: "10px 0" }}>{ressource.titre}</h1>
      <p>{ressource.contenu}</p>
      <div>
        <div>
          <img
            src={
              LiensTelechargementsEnum.PIECESJOINTEURL +
              ressource.pieceJointe.id +
              LiensTelechargementsEnum.DOWNLOAD
            }
            style={{ height: 200, width: "auto" }}
          />
          <p>{ressource.pieceJointe.type}</p>
        </div>
      </div>
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <button onClick={LikePublication}>
          {liked ? (
            <IonIcon
              icon={heart}
              size="small"
              style={{ color: "red" }}
            ></IonIcon>
          ) : (
            <IonIcon icon={heartOutline} size="small"></IonIcon>
          )}
        </button>
        <div style={{ flex: 1 }}></div>
        <button onClick={ShowCommentsSection}>
          <IonIcon icon={chatbubbleOutline} size="small"></IonIcon>
        </button>
        <div style={{ flex: 1 }}></div>
        <button onClick={SauvegarderPublication}>
          <IonIcon icon={bookmarksOutline} size="small"></IonIcon>
        </button>
        <div style={{ flex: 1 }}></div>
        <button onClick={AfficherPlusOptions}>
          <IonIcon icon={ellipsisVertical} size="small" />
        </button>
      </div>
    </div>
  );
};

export default Ressource;
