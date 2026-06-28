FROM node:22-alpine

WORKDIR /workspace
COPY package.json ./
RUN npm install
COPY . .

EXPOSE 4200
CMD ["npm", "run", "start", "--", "--poll", "2000"]

