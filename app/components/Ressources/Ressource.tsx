import RessourcesService from "@/app/services/RessourcesService";
import moment from "moment";
import React from "react";
import { IonIcon } from "@ionic/react";

const Ressource = ({ ressource }: any) => {
  const [liked, setLiked] = React.useState(false);

  function LikePublication() {
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
          src="https://i.imgflip.com/2xc9z0.png"
          alt="avatar"
          style={{ height: 50, width: 50 }}
        />
        <div style={{ marginLeft: 10 }}>
          <p>Partagé par {ressource.auteur}</p>
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
          {/* <img
            src={ressource.lienImage}
            style={{ height: 200, width: "auto" }}
          /> */}
          <p>Image</p>
        </div>
      </div>
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <button onClick={LikePublication}>
          {liked ? (
            <IonIcon
              name="heart"
              size="small"
              style={{ color: "red" }}
            ></IonIcon>
          ) : (
            <IonIcon name="heart-outline" size="small"></IonIcon>
          )}
        </button>
        <div style={{ flex: 1 }}></div>
        <button onClick={ShowCommentsSection}>
          <IonIcon name="chatbubble-outline" size="small"></IonIcon>
        </button>
        <div style={{ flex: 1 }}></div>
        <button onClick={SauvegarderPublication}>
          <IonIcon name="bookmark-outline" size="small"></IonIcon>
        </button>
        <div style={{ flex: 1 }}></div>
        <button onClick={AfficherPlusOptions}>
          <button onClick={AfficherPlusOptions}>
            <IonIcon icon="ellipsisVertical" size="small" />
          </button>
        </button>
      </div>
    </div>
  );
};

export default Ressource;
