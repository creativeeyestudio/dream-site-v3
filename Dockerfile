# Étape 1 : Construire l'application Strapi dans une image temporaire
FROM node:18-alpine AS builder

WORKDIR /app

# Copier les fichiers essentiels pour l'installation des dépendances
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Copier tout le code source
COPY . .

# Générer les fichiers de build pour Strapi
RUN yarn build

# Étape 2 : Créer une image minimale pour l’exécution
FROM node:18-alpine

WORKDIR /app

# Problème de permissions
RUN addgroup -S strapi && adduser -S strapi -G strapi
RUN chown -R strapi:strapi /app
USER strapi

# Expose le port par défaut de Strapi
EXPOSE 1337

CMD ["yarn", "start"]
