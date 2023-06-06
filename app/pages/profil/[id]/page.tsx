"use client";
import { LiensTelechargementsEnum } from "@/app/ressources/enums/LiensTelechargements";
import { UtilisateurEntity } from "@/app/ressources/models/UtilisateurEntity";
import UtilisateurService from "@/app/services/UtilisateurService";
import {
  Avatar,
  Card,
  Col,
  Container,
  Row,
  Spacer,
  Text,
} from "@nextui-org/react";
import React, { useEffect, useState } from "react";

const ProfilPage = ({ params: { id } }: any) => {
  const [utilisateur, setUtilisateur] = useState<UtilisateurEntity>(
    {} as UtilisateurEntity
  );

  useEffect(() => {
    UtilisateurService.getUtilisateurById(id).then((res) => {
      setUtilisateur(res.data);
      console.log(res);
    });
  }, []);

  return (
    <Container>
      <h2
        style={{
          textAlign: "center",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        {utilisateur.prenom} {utilisateur.nom}
      </h2>
      <Card
        css={{
          padding: "20px",
        }}
      >
        <Row align="center" justify="center">
          <Avatar
            src={
              LiensTelechargementsEnum.PHOTOPROFILURL +
              utilisateur.id +
              LiensTelechargementsEnum.DOWNLOAD
            }
            css={{
              width: "200px",
              height: "200px",
            }}
          />
          <Spacer y={0.5} />
          <div>
            <Col>
              <Text>
                {utilisateur.prenom} {utilisateur.nom}
              </Text>
              <Text>{utilisateur.bio}</Text>
            </Col>
          </div>
        </Row>
      </Card>
    </Container>
  );
};

export default ProfilPage;
