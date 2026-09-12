# Prototype Micro-frontends — Native Federation

Ce prototype illustre une architecture micro-frontend avec Angular et Native Federation.

## Structure

- `mfe-host/` — application hôte (port 4200), charge dynamiquement le composant distant
- `mfe-remote/` — application distante (port 4201), expose un composant via Module Federation

## Lancer le projet

Dans deux terminaux séparés :
\`\`\`bash
cd mfe-remote && ng serve
cd mfe-host && ng serve
\`\`\`

Puis ouvrir http://localhost:4200 et cliquer sur le lien "Aller vers le composant distant".
