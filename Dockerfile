# Phase de build (production)
FROM node:18-alpine as build

# Installer les dépendances pour Sharp et autres outils de compilation
RUN apk update && apk add --no-cache \
  build-base \
  gcc \
  autoconf \
  automake \
  zlib-dev \
  libpng-dev \
  vips-dev \
  git \
  python3 \
  make \
  g++ > /dev/null 2>&1

# Configurer l'environnement de production
ENV NODE_ENV=production
WORKDIR /opt/

# Copier les fichiers de configuration pour l'installation des dépendances
COPY package.json yarn.lock ./
RUN yarn global add node-gyp

# Installer les dépendances en mode production
RUN yarn config set network-timeout 600000 -g && yarn install --production

# Préparer l'environnement pour l'application
ENV PATH=/opt/node_modules/.bin:$PATH

# Copier le reste de l'application et la builder
WORKDIR /opt/app
COPY . .
RUN yarn build

# Phase finale (image de production ou dev)
FROM node:18-alpine

# Installer les dépendances nécessaires au mode dev et production
RUN apk add --no-cache \
  vips-dev \
  python3 \
  make \
  g++ \
  libpng-dev

# Configurer l'environnement pour le mode production ou dev
WORKDIR /opt/

# Copier les fichiers du build (node_modules et app)
COPY --from=build /opt/node_modules ./node_modules
WORKDIR /opt/app
COPY --from=build /opt/app ./

# Mettre à jour le PATH
ENV PATH=/opt/node_modules/.bin:$PATH

# Définir une variable d'environnement pour déterminer l'environnement d'exécution
ENV STRAPI_ENV=production

# Donner les droits à l'utilisateur 'node'
RUN chown -R node:node /opt/app
USER node

# Exposer le port pour Strapi
EXPOSE 1337

# Lancer Strapi en fonction de l'environnement (dev ou prod)
CMD [ "sh", "-c", "if [ \"$STRAPI_ENV\" = \"development\" ]; then yarn develop --watch-admin; else yarn start; fi" ]