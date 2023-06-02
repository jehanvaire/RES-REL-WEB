import Link from "next/link";
import React from "react";
import iconeResRel from "../../public/assets/icon.png";

const UtilisateurConnecteLinks = () => {
  return (
    <>
      <Link href="/pages/ressources">Ressources</Link>
      <Link href="/pages/activites">Activités</Link>
      <Link href="/pages/creationRessource">Créer une ressource</Link>
      <Link href="/pages/relations">Mes relations</Link>
    </>
  );
};

const InviteLinks = () => {
  return (
    <>
      <Link href="/connexion">Connexion</Link>
      <Link href="/inscription">Inscription</Link>
    </>
  );
};

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="links">
          <Link href="/">
            <img
              src={iconeResRel.src}
              alt="Logo res rel"
              className="logo"
              height="60px"
            />
          </Link>

          <UtilisateurConnecteLinks />
        </div>
      </div>
    </header>
  );
};

export default Header;
