FROM judge0/compilers

# Install dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    libpq-dev

# create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install

# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 8080

CMD [ "node", "server.js" ]