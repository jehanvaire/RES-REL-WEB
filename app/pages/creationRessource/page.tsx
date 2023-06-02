"use client";
import { RessourceEntity } from "@/app/ressources/models/RessourceEntity";
import CategorieService from "@/app/services/CategorieService";
import React, { Suspense, useEffect, useState } from "react";

const CreationRessourcePage = () => {
  const [categories, setCategories] = useState<CategorieEntity[]>([]);
  const [ressource, setRessource] = useState<RessourceEntity>(
    {} as RessourceEntity
  );

  const [pieceJointe, setPieceJointe] = useState<File | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Do something with the file content
    console.log("ressource", ressource);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      setPieceJointe(file);
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
        <form className="ressource-card">
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

          {pieceJointe && (
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

          <button type="submit" onSubmit={() => handleSubmit}>
            Créer la ressource
          </button>
        </form>
      </Suspense>
    </div>
  );
};

export default CreationRessourcePage;
