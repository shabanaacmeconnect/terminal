FROM node:10-alpine
WORKDIR /usr/src/app
COPY . /usr/src/app
# RUN PUPPETEER_PRODUCT=chrome
# RUN apk add --no-cache udev ttf-freefont chromium git
# ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD true
# ENV CHROMIUM_PATH /usr/bin/chromium-browser
RUN npm install -g nodemon
RUN npm install

ENTRYPOINT ["nodemon", "/usr/src/app/index.js"]