"use client";
import React from "react";
import { LiensTelechargementsEnum } from "../ressources/enums/LiensTelechargements";
import { Button, Card, Row } from "@nextui-org/react";

const DemandeRelation = ({ demandeRelation }: any) => {

  return (

    <Card isPressable isHoverable>

      <Card.Body css={{ p: 0 }} >
        <Card.Image
          objectFit="cover"
          width="100%"
          height={450}
          src={LiensTelechargementsEnum.PHOTOPROFILURL +
            demandeRelation.idDemandeur +
            LiensTelechargementsEnum.DOWNLOAD}
          className="image-profil"
        />
      </Card.Body>
      <Card.Footer css={{ justifyItems: "flex-start" }}>
        <Row gap={0} wrap="wrap" justify="space-between" align="center" >
          <b>
            {demandeRelation.demandeur.nom} {demandeRelation.demandeur.prenom}{" "}
          </b>
          demande une relation de type :
          <b> {demandeRelation.typeRelation.nom}</b>

          <Button size="sm" color="success" auto ghost>Accepter relation</Button>
          <Button size="sm" color="error" auto ghost>Refuser relation</Button>
        </Row>
      </Card.Footer>
    </Card>

  );
};

export default DemandeRelation;
