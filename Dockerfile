FROM node:lts-alpine

RUN mkdir -p /app/test

WORKDIR /app/test

COPY package.json /app

ENV PNPM_HOME="/.pnpm"
ENV PATH="${PATH}:${PNPM_HOME}"

#node es el usuario genérico de la imagen base
RUN chown -R node /app

#Aquí es necesario utilizar el privilegio de root para instalar pues son instalaciones globales
RUN npm install --global pnpm grunt-cli

#Cambiar el usuario de la imagen
USER node
RUN pnpm install

ENTRYPOINT [ "grunt", "test" ]