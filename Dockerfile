ARG NODE_VERSION=20.11.0

FROM node:${NODE_VERSION}-alpine

ENV NODE_ENV production


WORKDIR /usr/src/app

RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=yarn.lock,target=yarn.lock \
    --mount=type=cache,target=/root/.yarn \
    yarn install --production --frozen-lockfile

USER node

COPY . .

EXPOSE 8080

CMD if [${NODE_ENV} = "production"]; then yarn start; else yarn dev; fi