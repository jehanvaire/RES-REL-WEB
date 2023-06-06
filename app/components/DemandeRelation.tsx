"use client";
import React from "react";
import { LiensTelechargementsEnum } from "../ressources/enums/LiensTelechargements";

const DemandeRelation = ({ demandeRelation }: any) => {
  return (
    <div>
      <div className="demande-relation">
        <img
          src={
            LiensTelechargementsEnum.PHOTOPROFILURL +
            demandeRelation.idDemandeur +
            LiensTelechargementsEnum.DOWNLOAD
          }
          alt="avatar"
          className="image-profil"
        />
        <p>
          <b>
            {demandeRelation.demandeur.nom} {demandeRelation.demandeur.prenom}{" "}
          </b>
          demande une relation de type :
          <b> {demandeRelation.typeRelation.nom}</b>
        </p>
        <div className="buttons">
          <button className="btn-see-ressource">Voir profil</button>
          <button className="btn-add-relation">Accepter relation</button>
          <button className="btn-add-relation">Refuser relation</button>
        </div>
      </div>
    </div>
  );
};

export default DemandeRelation;
