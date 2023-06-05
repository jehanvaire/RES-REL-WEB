import { RessourceEntity } from "../ressources/models/RessourceEntity";
import RestClient from "./RestClient";

class RessourcesService {
    private baseUrl = "ressources";
    private pieceJointeUrl = "piecesJointes";

    private restClient: RestClient;
  
    constructor() {
      this.restClient = new RestClient();
    }
  

    public async AddLikeToPublication(id: number): Promise<any> {
        // const response = await fetch(`${this.baseUrl}/${id}/like`, {
        //   method: "POST",
        // });
        // const data = await response.json();
        const data = "Publication likée";
        return data;
      }
    
      public async SauvegarderPublication(id: number): Promise<any> {
        // const response = await fetch(`${this.baseUrl}/${id}/save`, {
        //   method: "POST",
        // });
        // const data = await response.json();
        const data = "Publication sauvegardée";
        return data;
      }
    
      public async GetPublications(params: any = {}): Promise<RessourceEntity[]> {
        const response = await this.restClient.get(this.baseUrl, params);
    
        const listePublications = response.data.map((publication: any) => {
          return new RessourceEntity(publication);
        });
    
        return listePublications;
      }
    
      public async ValiderPublication(id: number): Promise<any> {
        const response = await this.restClient.patch(
          `${this.baseUrl}/${id}/enable`
        );
        return response;
      }
    
      public async RefuserPublication(params = {}): Promise<any> {
        const response = await this.restClient.patch(
          `${this.baseUrl}/disable`,
          params
        );
        return response;
      }
    
      public async CreerPublication(
        publicationData: RessourceEntity
      ): Promise<any> {
        const response = await this.restClient.post(this.baseUrl, publicationData);
        return response;
      }
    
      public async AjouterPieceJointe(params: FormData): Promise<any> {
        const response = this.restClient.upload(this.pieceJointeUrl, params);
        return response;
      }
    

      public getPdfName(id: number): Promise<any> {
        return this.restClient.head(this.pieceJointeUrl + "/" + id + "/download");
      }
}

export default new RessourcesService();
