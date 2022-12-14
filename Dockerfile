FROM node:19.2.0-alpine

RUN mkdir -p /app/test

WORKDIR /app/test

COPY package.json /app

ENV PNPM_HOME="/.pnpm"
ENV PATH="${PATH}:${PNPM_HOME}"

RUN npm install --global pnpm
RUN pnpm install -g grunt-cli
RUN pnpm install

RUN chown -R 1001 /app
RUN chown -R 1001 /.pnpm


CMD [ "grunt", "test" ]