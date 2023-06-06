"use client";
import DemandeRelation from "@/app/components/DemandeRelation";
import RelationService from "@/app/services/RelationService";
import React, { Suspense, useEffect, useState } from "react";

const RelationsPage = () => {
  const [demandesRelations, setDemandesRelations] = useState<any[]>([]);

  useEffect(() => {
    const params = {
      "idReceveur[equals]=": 1011,
      accepte: null,
      include: "typeRelation,demandeur",
    };

    RelationService.GetRelations(params).then((relations) => {
      setDemandesRelations(relations);
    });
  }, []);

  return (
    <div>
      <h1>Demandes de relations</h1>
      <Suspense fallback={<div>Chargement des ressources...</div>}>
        {demandesRelations.map((demandeRelation) => (
          <DemandeRelation
            key={demandeRelation.id}
            demandeRelation={demandeRelation}
          />
        ))}
      </Suspense>
    </div>
  );
};

export default RelationsPage;
