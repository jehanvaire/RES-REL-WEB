"use client";
import Ressource from "@/app/components/Ressources/Ressource";
import { LiensTelechargementsEnum } from "@/app/ressources/enums/LiensTelechargements";
import { UtilisateurEntity } from "@/app/ressources/models/UtilisateurEntity";
import RessourcesService from "@/app/services/RessourcesService";
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
import React, { Suspense, useEffect, useState } from "react";
import { useSession } from "next-auth/react";

const ProfilPage = ({ params: { id } }: any) => {
  const { data: session } = useSession();

  const [utilisateur, setUtilisateur] = useState<UtilisateurEntity>(
    {} as UtilisateurEntity
  );
  const [ressourcesUtilisateur, setRessourcesUtilisateur] = useState<any[]>([]);

  useEffect(() => {
    UtilisateurService.getUtilisateurById(id).then((res) => {
      setUtilisateur(res.data);
    });

    const params = {
      "idUtilisateur[equals]=": id,
      include: "categorie,utilisateur,pieceJointe",
    };

    RessourcesService.GetRessources(params).then((res) => {
      setRessourcesUtilisateur(res);
    });
  }, [id]);

  if (!session?.user) return <div>Vous n&apos;avez pas accès à cette page</div>;
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
          maxWidth: "800px",
          margin: "auto",
          marginTop: "20px",
        }}
      >
        <Row align="center" justify="center">
          <Avatar
            squared
            src={
              LiensTelechargementsEnum.PHOTOPROFILURL +
              utilisateur.id +
              LiensTelechargementsEnum.DOWNLOAD
            }
            css={{
              height: "200px",
              width: "200px",
              maxHeight: "200px",
              maxWidth: "200px",
            }}
          />

          <Spacer x={1} />

          <div>
            <Col>
              <Text
                b
                css={{
                  fontSize: "1.5rem",
                }}
              >
                {utilisateur.prenom} {utilisateur.nom}
              </Text>

              <Spacer y={0.5} />

              <p
                style={{
                  maxWidth: "600px",
                  fontSize: "0.8rem",
                }}
              >
                {utilisateur.bio}
              </p>
            </Col>
          </div>
        </Row>
      </Card>

      <Spacer y={1} />

      <Suspense fallback={<div>Chargement des ressources...</div>}>
        <Container
          css={{
            maxWidth: "850px",
            margin: "auto",
          }}
        >
          {ressourcesUtilisateur.map((ressource) => (
            <>
              <Ressource key={ressource.id} ressource={ressource} />
              <Spacer y={1} />
            </>
          ))}
        </Container>
      </Suspense>
    </Container>
  );
};

export default ProfilPage;
