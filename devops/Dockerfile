FROM node:10

ARG ENVKEY
ARG APP_DIR=/app
ARG DSHOP_BACKEND_SOURCE="backend"
ARG DSHOP_DAPP_SOURCE="shop"

ENV NODE_ENV=production
ENV ENVKEY=$ENVKEY
ENV DISABLE_SYNC=true

RUN export PATH="$PATH:$APP_DIR/shop/node_modules/.bin:$APP_DIR/backend/node_modules/.bin"
RUN echo $DSHOP_BACKEND_SOURCE
RUN echo $DSHOP_DAPP_SOURCE
RUN yarn global add lerna

######
# Clone source from dshop repo
######

WORKDIR $APP_DIR

COPY packages ./packages
COPY package.json ./package.json
COPY lerna.json ./lerna.json
COPY yarn.lock ./yarn.lock

COPY $DSHOP_BACKEND_SOURCE/data ./backend/data
COPY $DSHOP_BACKEND_SOURCE/dist ./backend/dist
COPY $DSHOP_BACKEND_SOURCE/models ./backend/models
COPY $DSHOP_BACKEND_SOURCE/queues ./backend/queues
COPY $DSHOP_BACKEND_SOURCE/routes ./backend/routes
COPY $DSHOP_BACKEND_SOURCE/utils ./backend/utils
COPY $DSHOP_BACKEND_SOURCE/*.js ./backend/
COPY $DSHOP_BACKEND_SOURCE/package.json ./backend/package.json

COPY $DSHOP_DAPP_SOURCE/public ./shop/public
COPY $DSHOP_DAPP_SOURCE/src ./shop/src
COPY $DSHOP_DAPP_SOURCE/scripts ./shop/scripts
COPY $DSHOP_DAPP_SOURCE/package.json ./shop/package.json
COPY $DSHOP_DAPP_SOURCE/*.js ./shop/

# Install with dev Dependencies (need to build dapp)
RUN yarn install --pure-lockfile --no-cache --production=false && yarn cache clean

######
# Build dapp for use by the backend
######

WORKDIR $APP_DIR/shop

RUN yarn run build:dist

######
# Copy openpgp dist build to public
######

WORKDIR $APP_DIR/backend

RUN ls -lah 
RUN ls -lah ../
RUN ls -lah ../backend
RUN ls -lah ../node_modules
RUN cp -r ../node_modules/openpgp/dist public

######
# Cleanup after dapp build
######

WORKDIR $APP_DIR

RUN lerna clean --no-progress -y
RUN rm -rf $APP_DIR/$DSHOP_DAPP_DIR
RUN yarn install --pure-lockfile --no-cache && yarn cache clean

######
# Run backend
######

WORKDIR $APP_DIR/backend

CMD npm run migrate && node index.js