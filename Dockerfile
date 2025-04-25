# Image de base
FROM node:20-alpine

# Dépendances pour Sharp & node-gyp
RUN apk update && apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev nasm bash vips-dev git

# Variables d'env
ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

# Dossier de travail
WORKDIR /opt/app

# Copie des fichiers de dépendances
COPY package.json yarn.lock ./

# Installation des dépendances
RUN yarn global add node-gyp
RUN yarn config set network-timeout 600000 -g && yarn install

# Copie du code source
COPY . .

# Build de Strapi
RUN yarn build

# Permissions
RUN chown -R node:node /opt/app
USER node

# Exposition du port
EXPOSE 1337

# Commande de démarrage
CMD ["yarn", "develop"]
