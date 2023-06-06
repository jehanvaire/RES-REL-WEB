"use client";
import { RessourceEntity } from "@/app/ressources/models/RessourceEntity";
import CategorieService from "@/app/services/CategorieService";
import RessourcesService from "@/app/services/RessourcesService";
import { Button, Card, Input, Spacer, Textarea } from "@nextui-org/react";
import React, { Suspense, useEffect, useState } from "react";

const CreationRessourcePage = () => {
  const [categories, setCategories] = useState<CategorieEntity[]>([]);
  const [ressource, setRessource] = useState<RessourceEntity>(
    {} as RessourceEntity
  );

  const [file, setFile] = useState<File>({} as File);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let type = "";
    switch (file.type) {
      case "image/png":
      case "image/jpeg":
        type = "IMAGE";
        break;
      case "application/pdf":
        type = "PDF";
        break;
      case "video/mp4":
        type = "VIDEO";
        break;
      default:
        type = "";
        break;
    }

    const fichier = {
      name: file.name,
      type: type,
      uri: file.name,
    };

    const formData = new FormData();
    formData.append("file", file, file.name);
    formData.append("titre", ressource.titre);
    formData.append("type", type);
    formData.append("idUtilisateur", "1022");

    RessourcesService.AjouterPieceJointe(formData).then(async (res) => {
      await RessourcesService.CreerPublication({
        idCategorie: ressource.idCategorie,
        contenu: ressource.contenu,
        titre: ressource.titre,
        idUtilisateur: ressource.id,
        idPieceJointe: res.id,
      } as RessourceEntity);
    });
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      setFile(file);
      displayPreview(file);
    }
  };

  const displayPreview = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const preview = document.getElementById("preview") as HTMLImageElement;
      preview.src = e.target?.result as string;
    };

    reader.readAsDataURL(file);
  };

  useEffect(() => {
    CategorieService.GetAllCategories().then((res) => {
      setCategories(res);
    });
  }, []);

  return (
    <div>
      <h2
        style={{
          textAlign: "center",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        Création d'une ressource
      </h2>
      <Suspense fallback={<div>Chargement...</div>}>
        <Card
          css={{
            // center the card
            margin: "auto",
            width: "50%",
            minWidth: "300px",
            maxWidth: "600px",
            // center the card
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Card.Body>
            <form onSubmit={handleSubmit} className="ressource-card">
              <Spacer />
              <Input
                type="text"
                labelPlaceholder="Titre"
                id="title"
                name="title"
                color="primary"
                bordered
                required
                onChange={(e) => {
                  setRessource({
                    ...ressource,
                    titre: e.target.value,
                  });
                }}
                css={{
                  width: "100%",
                }}
              />
              <Spacer y={2} />

              <Textarea
                id="description"
                name="description"
                labelPlaceholder="Description"
                color="primary"
                bordered
                required
                onChange={(e) => {
                  setRessource({
                    ...ressource,
                    contenu: e.target.value,
                  });
                }}
                css={{
                  width: "100%",
                }}
              />
              <Spacer />

              <select
                id="category"
                name="category"
                required
                defaultValue={0}
                onChange={(e) =>
                  setRessource({
                    ...ressource,
                    idCategorie: Number(e.target.value),
                  })
                }
                style={{
                  borderRadius: "10px",
                  width: "100%",
                  padding: "10px",
                  color: "grey",
                  borderColor: "grey",
                }}
              >
                <option value="0" disabled>
                  Choisir une catégorie
                </option>
                {categories.map((categorie) => (
                  <option key={categorie.id} value={categorie.id}>
                    {categorie.nom}
                  </option>
                ))}
              </select>

              <Spacer />

              <Input
                type="file"
                id="file"
                name="file"
                required
                color="primary"
                bordered
                style={{
                  padding: "10px",
                }}
                onChange={() => handleFileChange}
              />
              <Spacer />

              {file.name && (
                <div>
                  <img id="preview" alt="File preview" />
                </div>
              )}

              <select
                id="partage"
                name="partage"
                style={{
                  borderRadius: "10px",
                  width: "100%",
                  padding: "10px",
                }}
              >
                <option value="">Public</option>
                <option value="prive">Privé</option>
              </select>
              <Spacer />

              <Button type="submit">Créer la ressource</Button>

              <Spacer />
            </form>
          </Card.Body>
        </Card>
      </Suspense>
    </div>
  );
};

export default CreationRessourcePage;
