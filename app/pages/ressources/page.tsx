"use client";
import Ressource from "@/app/components/Ressources/Ressource";
import { RessourceEntity } from "@/app/ressources/models/RessourceEntity";
import RessourcesService from "@/app/services/RessourcesService";
import React, { useEffect, useState } from "react";

const RessourcesPage = async () => {
  const params = {
    fromRelations: 3, // Remplacer avec user.id
    include: "categorie,utilisateur,pieceJointe",
  };

  const [listeRessources, setListeRessources] = useState<RessourceEntity[]>([]);

  useEffect(() => {
    RessourcesService.GetPublications(params).then((ressources) => {
      setListeRessources(ressources);
    });
  }, []);

  return (
    <div>
      <h1>Ressources</h1>
      <ul>
        {listeRessources.map((ressource) => (
          <Ressource key={ressource.id} ressource={ressource} />
        ))}
      </ul>
    </div>
  );
};

export default RessourcesPage;
