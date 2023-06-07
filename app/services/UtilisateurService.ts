
import RestClient from "./RestClient";

class UtilisateurService {
  private baseUrl = "utilisateurs";

  private restClient: RestClient;
  constructor() {
    this.restClient = new RestClient();
  }

  public async getUtilisateurById(id: number) {
    return await this.restClient.get(`${this.baseUrl}/${id}`);
  }
}

export default new UtilisateurService();
