import { StatusPublicationEnum } from "../enums/StatusPublicationEnum";
import { PieceJointeEntity } from "./PieceJointeEntity";
import { UtilisateurEntity } from "./UtilisateurEntity";

export class RessourceEntity {
  id!: number;
  titre!: string;
  contenu!: string;
  status!: StatusPublicationEnum;
  raisonRefus!: any;
  dateCreation!: Date;
  datePublication!: Date;
  image!: any;
  idCategorie!: number;
  idUtilisateur!: number;
  utilisateur!: UtilisateurEntity;
  navigation!: any;
  idPieceJointe!: number;
  pieceJointe!: PieceJointeEntity;
  categorie!: any;

  constructor(init?: Partial<RessourceEntity>) {
    Object.assign(this, init);
  }
}
