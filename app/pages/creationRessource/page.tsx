"use client";
import { PieceJointeEntity } from "@/app/ressources/models/PieceJointeEntity";
import { RessourceEntity } from "@/app/ressources/models/RessourceEntity";
import CategorieService from "@/app/services/CategorieService";
import RessourcesService from "@/app/services/RessourcesService";
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
      <p>Création d'une ressource</p>
      <Suspense fallback={<div>Chargement...</div>}>
        <form onSubmit={handleSubmit} className="ressource-card">
          <label htmlFor="category">Catégorie:</label>
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

          <br />

          <label htmlFor="title">Titre:</label>
          <input
            type="text"
            id="title"
            name="title"
            required
            onChange={(e) => {
              setRessource({
                ...ressource,
                titre: e.target.value,
              });
            }}
          />
          <br />

          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            name="description"
            required
            onChange={(e) => {
              setRessource({
                ...ressource,
                contenu: e.target.value,
              });
            }}
          />
          <br />

          <label htmlFor="file">Fichier:</label>
          <input
            type="file"
            id="file"
            name="file"
            onChange={handleFileChange}
          />
          <br />

          {file && (
            <div>
              <img id="preview" alt="File preview" />
            </div>
          )}

          <label htmlFor="partage">Partage:</label>
          <select id="partage" name="partage">
            <option value="">Public</option>
            <option value="prive">Privé</option>
          </select>
          <br />

          <button type="submit">Créer la ressource</button>
        </form>
      </Suspense>
    </div>
  );
};

export default CreationRessourcePage;
