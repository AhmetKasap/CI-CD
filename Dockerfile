FROM node

WORKDIR /opt/node-app
COPY . /opt/node-app
RUN npm install


CMD ["node", "app.js"]