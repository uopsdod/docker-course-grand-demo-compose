# image build phase
FROM node
WORKDIR /myapp
COPY package.json .
RUN npm install
COPY . .
# container running phase
CMD ["npm", "start"]


