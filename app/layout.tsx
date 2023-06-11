import "./globals.css";
import { Poppins } from "next/font/google";
import Header from "./components/header";
import Providers from "./Providers";

const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin-ext"],
});

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="fr">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="La plateforme de ressources relationnelles"
        />
        <meta
          name="keywords"
          content="ressources, relationnelles, plateforme, ressources relationnelles"
        />
        <meta name="author" content="Ressources Relationnelles" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Ressources Relationnelles</title>
        <link rel="icon" href="/assets/icon.png" />
      </head>
      <body className={poppins.className}>
        <Providers>
          <Header />
          <main className="container">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
