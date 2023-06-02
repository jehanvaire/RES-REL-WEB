This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# Gestion des branches github

Lors de la création d'une nouvelle fonctionnaité, voici les étapes à suivre :

- Se mettre sur la branche master

- Faire un `git fetch` pour mettre à jour le référentiel (récupérer une branche à été créée et publiée depuis un autre PC par exemple)

- Faire un `git pull` pour tirer tous les changement sur cette branche

- Créer une nouvelle branche sous la forme `tasks/nom de la fonctionnalité` (mettre `fix/` si c'est un fix)

- Puis aller sur cette nouvelle branche.

Une fois ces étapes faites, tu peux commencer à développer ta fonctionnalité.

**Toujours sauvegarder son code (même si pas fini, c'est pas grave)**

Pense bien à ton comit et push si tu pars de ton pc, comme ça on garde toujours une trace (_et ça fait monter tes stats Github_)

Une fois la fonctionnalité finie, tu peux aller sur [le repos du github](https://github.com/jehanvaire/RES-REL-WEB)

Et créer une nouvelle requête de tirage (pull request en français) (normalement le bouton le propose automatiquement dès que des changements sont poussés.)
