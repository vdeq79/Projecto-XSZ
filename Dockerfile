FROM node:latest

RUN mkdir -p /app/test

WORKDIR /app/test

COPY package*.json /app/test/

ENV PNPM_HOME="/root/.local/share/pnpm"
ENV PATH="${PATH}:${PNPM_HOME}"

RUN npm install --global pnpm
RUN pnpm install -g grunt-cli
RUN pnpm install

RUN chown -R 1001:1001 /app

ENTRYPOINT [ "grunt", "test" ]