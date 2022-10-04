FROM node:latest

ARG PROJECT_NAME
COPY ./ /app
WORKDIR /app
RUN node -v
RUN apt-get update
RUN apt-get install git ca-certificates -y
RUN npm install 
#RUN npm install 
ENV PORT=8081
EXPOSE 81
CMD ["node", "app.js"]

