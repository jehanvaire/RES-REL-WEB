"use client";
import { LiensTelechargementsEnum } from "@/app/ressources/enums/LiensTelechargements";
import CommentaireEntity from "@/app/ressources/models/CommentaireEntity";
import CommentaireService from "@/app/services/CommentaireService";
import {
  Card,
  Container,
  Input,
  Loading,
  Spacer,
  User,
  Text,
} from "@nextui-org/react";
import React, { Suspense } from "react";
import { BoutonEnvoi } from "@/app/components/Button/BoutonEnvoi";
import { IconeEnvoi } from "@/app/components/Button/IconeEnvoi";

const EspaceCommentairePage = ({ params: { id } }: any) => {
  const [commentaires, setCommentaires] = React.useState<CommentaireEntity[]>(
    []
  );
  const [commentaire, setCommentaire] = React.useState("");

  const [reponseA, setReponseA] = React.useState<CommentaireEntity>(
    {} as CommentaireEntity
  );

  React.useEffect(() => {
    loadCommentaires();
  }, []);

  const sendOnEnterPress = (e: any) => {
    if (e.key === "Enter") {
      sendCommentaire();
      setCommentaire("");
    }
  };

  function loadCommentaires() {
    const params = {
      "idRessource[equals]=": id,
      include: "utilisateur",
    };
    // Récupérer les commentaires ainsi que leurs réponses
    CommentaireService.GetCommentairePourUneRessource(params).then(
      (commentaires: CommentaireEntity[]) => {
        const promises = commentaires.map((commentaire) => {
          const paramsReponses = {
            "idCommentaire[equals]=": commentaire.id,
            include: "utilisateur",
          };

          return CommentaireService.GetReponsesPourUnCommentaire(
            paramsReponses
          ).then((reponses: CommentaireEntity[]) => {
            reponses.map((reponse) => {
              reponse.estReponse = true;
            });
            commentaire.reponses = reponses;
            return commentaire;
          });
        });
        Promise.all(promises).then((commentairesAvecReponses) => {
          setCommentaires(commentairesAvecReponses);
        });
      }
    );
  }
  // Ajouter le nouveau commentaire à la liste, vider le champ commentaire et fermer le clavier
  const setNouvelleListeCommentaires = (
    nouveauCommentaire: CommentaireEntity
  ) => {
    const listeCommentairesTemp = commentaires;

    if (nouveauCommentaire.estReponse) {
      const commentaireParent = listeCommentairesTemp.find(
        (comm) =>
          comm.id === nouveauCommentaire.idCommentaire && !comm.estReponse
      );
      if (commentaireParent) {
        if (commentaireParent.reponses) {
          commentaireParent.reponses.push(nouveauCommentaire);
        } else {
          commentaireParent.reponses = [nouveauCommentaire];
        }
      }
    } else {
      nouveauCommentaire.reponses = [];
      listeCommentairesTemp.push(nouveauCommentaire);
    }

    setCommentaires(listeCommentairesTemp);
    setCommentaire("");
  };

  const sendCommentaire = () => {
    const params = {
      contenu: commentaire,
      idRessource: id,
      idUtilisateur: 1,
    };
    CommentaireService.PostCommentaire(params).then(
      (nouveauCommentaire: CommentaireEntity) => {
        console.log(nouveauCommentaire);
        nouveauCommentaire.estReponse = false;
        setNouvelleListeCommentaires(nouveauCommentaire);
      }
    );
  };

  const sendReponseCommentaire = () => {
    const params = {
      contenu: commentaire,
      idCommentaire: reponseA.estReponse ? reponseA.idCommentaire : reponseA.id,
      idUtilisateur: 1,
    };

    CommentaireService.PostReponseCommentaire(params).then(
      (reponse: CommentaireEntity) => {
        reponse.estReponse = true;
        setNouvelleListeCommentaires(reponse);
        setReponseA({} as CommentaireEntity);
      }
    );
  };

  return (
    <Container>
      EspaceCommentairePage id ressource {id}
      <Suspense fallback={<Loading />}>
        {commentaires.map((commentaire) => (
          <>
            <Card>
              <Card.Body>
                <User
                  src={
                    LiensTelechargementsEnum.PHOTOPROFILURL +
                    commentaire.utilisateur?.id +
                    LiensTelechargementsEnum.DOWNLOAD +
                    "?quality=50"
                  }
                  name={
                    commentaire.utilisateur?.nom +
                    " " +
                    commentaire.utilisateur?.prenom
                  }
                  squared
                ></User>
                <Text
                  css={{
                    display: "inline-block",
                    marginLeft: "0.8rem",
                  }}
                >
                  {commentaire.contenu}
                </Text>
              </Card.Body>
            </Card>
            <Spacer y={0.5} />
          </>
        ))}
      </Suspense>
      <Input
        clearable
        value={commentaire}
        contentRightStyling={false}
        placeholder="Type your message..."
        onChange={(e) => setCommentaire(e.target.value)}
        onKeyDown={sendOnEnterPress}
        contentRight={
          <BoutonEnvoi
            onClick={() => {
              if (reponseA.id) {
                sendReponseCommentaire();
              } else {
                sendCommentaire();
              }
            }}
          >
            <IconeEnvoi
              filled={undefined}
              size={undefined}
              height={undefined}
              width={undefined}
              label={undefined}
              className={undefined}
            />
          </BoutonEnvoi>
        }
        css={{
          width: "80%",
          left: "50%",
          transform: "translateX(-50%)",
          marginBottom: "3rem",
        }}
      />
    </Container>
  );
};

export default EspaceCommentairePage;
