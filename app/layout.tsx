import "./globals.css";
import { Poppins } from "next/font/google";
import Header from "./components/header";

const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin-ext"],
});

export const metadata = {
  title: "Ressources Relationnelles",
  description: "La plateforme de ressources relationnelles",
  keywords: "ressources, relationnelles, plateforme, ressources relationnelles",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={poppins.className}>
        <Header />
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
