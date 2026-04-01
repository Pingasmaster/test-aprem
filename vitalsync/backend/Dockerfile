# multi-stage build, deux raisons :
# 1. sécurité : l'image finale ne contient pas les devdeps ni les outils de test
# 2. fiabilité : si les tests échouent, le build s'arrête, on ne déploie jamais du code cassé

# stage 1 : lint + tests
FROM node:24-alpine AS testeur
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run lint && npm test

# stage 2 : production minimale
FROM node:24-alpine AS prod
WORKDIR /app
# deps prod seulement, pas de jest ni eslint
COPY package*.json ./
RUN npm ci --omit=dev
COPY server.js .
ENV NODE_ENV=production
EXPOSE 3000
CMD ["node", "server.js"]
