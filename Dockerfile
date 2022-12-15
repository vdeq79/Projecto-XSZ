FROM node:lts-alpine

#Ejecuciones con root
RUN mkdir -p /app/test

WORKDIR /app/test

COPY package.json /app

ENV NPM_CONFIG_PREFIX="/home/node/.npm-global"
ENV PNPM_HOME="/.pnpm"
ENV PATH="${PATH}:${PNPM_HOME}:/home/node/.npm-global/bin"

#node es el usuario genérico de la imagen base
RUN chown -R node /app

#Cambiar al usuario genérico
USER node

RUN npm install --global pnpm grunt-cli
RUN pnpm install

ENTRYPOINT [ "grunt", "test" ]