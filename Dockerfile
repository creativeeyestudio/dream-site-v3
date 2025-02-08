# -------------------------
# ---- STAGE 1 : Build ----
# -------------------------
FROM node:18-alpine AS builder

# Définition du dossier de travail
WORKDIR /app

# Copie des fichiers package.json et package-lock.json
COPY package.json yarn.lock ./

# Installation des dépendances
RUN yarn install --frozen-lockfile

# Copie du reste du projet
COPY . .

# Compilation de Strapi (génération de la build)
RUN yarn build

# ------------------------------
# ---- STAGE 2 : Production ----
# ------------------------------
FROM node:18-alpine

# Définition du dossier de travail
WORKDIR /app

# Création d'un utilisateur non-root pour la sécurité
RUN addgroup -S strapi && adduser -S strapi -G strapi

# Copie des fichiers nécessaires depuis le builder
COPY --from=builder /app ./

# Donne les permissions au user Strapi
RUN chown -R strapi:strapi /app

# Passage en utilisateur non root
USER strapi

# Exposition du port Strapi
EXPOSE 1337

# Lancement de Strapi en mode production
CMD ["yarn", "start"]
    