"use client";
import Ressource from "@/app/components/Ressources/Ressource";
import { RessourceEntity } from "@/app/ressources/models/RessourceEntity";
import RessourcesService from "@/app/services/RessourcesService";
import { Container, Spacer } from "@nextui-org/react";
import React, { Suspense, useEffect, useState } from "react";

const RessourcesPage = () => {
  const params = {
    fromRelations: 3, // Remplacer avec user.id
    include: "categorie,utilisateur,pieceJointe",
  };

  const [listeRessources, setListeRessources] = useState<RessourceEntity[]>([]);

  useEffect(() => {
    RessourcesService.GetRessources(params).then((ressources) => {
      setListeRessources(ressources);
    });
  }, []);

  return (
    <Container
      css={{
        maxWidth: "850px",
        margin: "auto",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        Ressources
      </h1>

      <Suspense fallback={<div>Chargement des ressources...</div>}>
        {listeRessources.map((ressource) => (
          <>
            <Ressource key={ressource.id} ressource={ressource} />
            <Spacer y={1} />
          </>
        ))}
      </Suspense>
    </Container>
  );
};

export default RessourcesPage;
