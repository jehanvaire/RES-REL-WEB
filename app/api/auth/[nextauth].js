import NextAuth from "next-auth";
const options = {
  site: "https://api.victor-gombert.fr/api/v1/connexion", //process.env.NEXTAUTH_URL
};
export default (req, res) => NextAuth(req, res, options);
