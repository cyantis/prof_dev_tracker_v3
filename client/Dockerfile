FROM mhart/alpine-node:11
RUN apk add --no-cache bash
WORKDIR /usr/app
COPY package*.json ./
RUN npm install -qy
COPY . .
EXPOSE 3000
# PORT 35729 needed for auto-refresh on file change
EXPOSE 35729
CMD ["npm", "start"]