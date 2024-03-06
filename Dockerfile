FROM node:20.11.1

WORKDIR /home/node-test
COPY . ./

RUN npm install

RUN npm run build 

# EXPOSE 4000

# CMD ["npx", "npx cross-env NODE_ENV=production node .\build\app.js"]
# CMD ["npm", "run prod"]