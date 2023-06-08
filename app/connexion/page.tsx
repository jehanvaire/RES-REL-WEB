"use client";

import React from "react";
import { POST } from "../api/auth/[...nextauth]/route";

const ConnexionPage = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const password = data.get("password");

    if (typeof email === "string" && typeof password === "string") {
      POST("/api/auth/signin", {
        email,
        password,
      }).then((res: any) => console.log(res));
    }
  };

  return (
    <div>
      <h1>Connexion</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          className="rounded-md p-2"
        />

        <label htmlFor="password">Mot de passe</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Mot de passe"
          className="rounded-md p-2"
        />

        <button type="submit" className="rounded-md p-2 bg-blue-500 text-white">
          Connexion
        </button>
      </form>
    </div>
  );
};

export default ConnexionPage;
