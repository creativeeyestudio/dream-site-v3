# Étape 1 : Construire l'application Strapi dans une image temporaire
FROM node:18-alpine AS builder

# Définit le répertoire de travail
WORKDIR /app

# Installe uniquement les dépendances de production
COPY package.json ./
RUN yarn install --frozen-lockfile

# Copie le code source de l'application
COPY . .

# Génère les fichiers de build pour Strapi
RUN yarn build

# Étape 2 : Créer une image minimale pour exécuter l'application en production
FROM node:18-alpine

# Définir le répertoire de travail
WORKDIR /app

# Copier uniquement les fichiers nécessaires depuis l'étape de build
COPY --from=builder /app/package.json ./
COPY --from=builder /app/build ./build
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/public ./public
COPY --from=builder /app/config ./config
COPY --from=builder /app/src ./src

# Configure l'utilisateur non-root pour améliorer la sécurité
RUN addgroup -S strapi && adduser -S strapi -G strapi
USER strapi

# Expose le port par défaut de Strapi
EXPOSE 1337

# Commande pour démarrer Strapi en mode production
CMD ["yarn", "start"]