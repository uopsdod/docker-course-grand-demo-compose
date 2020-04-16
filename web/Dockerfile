# image build phase
FROM node
WORKDIR /myapp
COPY package.json .
RUN npm install
COPY . .
COPY wait-for-it.sh ./wait-for-it.sh
RUN chmod +x wait-for-it.sh
# container running phase
CMD ["npm", "start"]


