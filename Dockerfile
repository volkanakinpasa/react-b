FROM node:11-alpine AS builder
WORKDIR /app
COPY . .

RUN apk add curl bash
RUN curl -sfL https://install.goreleaser.com/github.com/tj/node-prune.sh | bash -s -- -b /usr/local/bin


RUN  npm i --quiet --no-progress
RUN npm run --silent build
RUN npm prune --production && node-prune

FROM node:11-alpine as project
WORKDIR /proj
COPY --from=builder /app/build /proj/build
COPY --from=builder /app/package.json /proj/package.json
COPY --from=builder /app/index.js /proj/index.js
COPY --from=builder /app/node_modules /proj/node_modules

EXPOSE 3000
CMD ["node", "/proj/index.js"]
