FROM node:19.2.0-alpine

RUN mkdir -p /app/test

WORKDIR /app/test

COPY package.json /app

ENV PNPM_HOME="/.pnpm"
ENV PATH="${PATH}:${PNPM_HOME}"

RUN npm install --global pnpm && pnpm install -g grunt-cli
RUN pnpm install

#node es el usuario genérico de la imagen base
RUN chown -R node /app /.pnpm

#Cambiar el usuario de la imagen
USER node

ENTRYPOINT [ "grunt" ]
#Default task
CMD [ "test" ]