# Étape 1 : Construire l'application Strapi
FROM node:18-alpine AS builder

WORKDIR /app

# Copier package.json et yarn.lock AVANT d'installer les dépendances
COPY package.json yarn.lock ./

# Vérifie que package.json est bien copié
RUN ls -la /app

# Installe les dépendances
RUN yarn install --frozen-lockfile

# Copie tout le reste du projet
COPY . .

ENV NODE_ENV production

# Vérifie que tout est bien copié
RUN ls -la /app

# Build de l’application
RUN yarn build

# Étape 2 : Image finale Strapi
FROM node:18-alpine

WORKDIR /app

# Copier package.json et les fichiers essentiels
COPY --from=builder /app/package.json yarn.lock ./

# Vérifie le contenu après copie
RUN ls -la /app

# Problème de permissions
RUN addgroup -S strapi && adduser -S strapi -G strapi
RUN chown -R strapi:strapi /app
USER strapi

# Expose le port de Strapi
EXPOSE 1337

CMD ["yarn", "start"]
