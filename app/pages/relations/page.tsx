"use client";
import DemandeRelation from "@/app/components/DemandeRelation";
import RelationService from "@/app/services/RelationService";
import { Grid } from "@nextui-org/react";
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
        <Grid.Container gap={2} justify="flex-start" className="demande-relation">

          {demandesRelations.map((demandeRelation) => (
            <Grid xs={6} sm={3} key={demandeRelation.idDemandeur}>
              <DemandeRelation
                key={demandeRelation.id}
                demandeRelation={demandeRelation}
              />
            </Grid>
          ))}
        </Grid.Container>
      </Suspense>
    </div>
  );
};

export default RelationsPage;
