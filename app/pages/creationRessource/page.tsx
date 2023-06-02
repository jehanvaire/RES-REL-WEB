"use client";
import CategorieService from "@/app/services/CategorieService";
import React, { Suspense, useEffect, useState } from "react";

const CreationRessourcePage = () => {
  const [categories, setCategories] = useState<CategorieEntity[]>([]);
  const [fileContent, setFileContent] = useState<string>("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const content = event.target?.result as string;
        setFileContent(content);
      };
      reader.readAsText(file);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Do something with the file content
  };

  useEffect(() => {
    CategorieService.GetAllCategories().then((res) => {
      setCategories(res);
    });
  }, []);

  return (
    <div>
      <Suspense fallback={<div>Chargement...</div>}>
        <div className="ressource-card">
          <label htmlFor="category">Catégorie:</label>
          <select id="category" name="category" required>
            <option value="" disabled selected>
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
          <input type="text" id="title" name="title" required />
          <br />

          <label htmlFor="description">Description:</label>
          <input type="text" id="description" name="description" required />
          <br />

          <label htmlFor="file">Fichier:</label>
          <input type="file" id="file" name="file" />
          <br />

          {fileContent && (
            <div>
              <h3>File content:</h3>
              <pre>{fileContent}</pre>
            </div>
          )}

          <label htmlFor="partage">Partage:</label>
          <select id="partage" name="partage">
            <br />
            <option value="">Public</option>
            <option value="prive">Privé</option>
          </select>
          <br />

          <button type="submit">Créer la ressource</button>
        </div>
      </Suspense>
    </div>
  );
};

export default CreationRessourcePage;
