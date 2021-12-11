ARG NODE_VERSION
FROM node:$NODE_VERSION as builder

WORKDIR /usr/src

COPY package.json yarn.lock ./

# see: https://yarnpkg.com/getting-started/migration#step-by-step
RUN yarn set version berry \
 && echo nodeLinker: \"node-modules\" >> .yarnrc.yml \
 && yarn

FROM node:$NODE_VERSION as runner

WORKDIR /usr/src

COPY --from=builder /usr/src/node_modules ./node_modules
COPY --from=builder /usr/src/.yarn ./.yarn

COPY .dockerdev/Apkfile /tmp/Apkfile

RUN apk add --no-cache \
    $(cat /tmp/Apkfile | xargs) \
 && rm -rf /tmp/*

CMD [ "node" ]
