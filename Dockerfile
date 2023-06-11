FROM node as build

WORKDIR /app

COPY package.json .
COPY . .
RUN npm install
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]


FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 for the NGINX server
EXPOSE 80

# Start NGINX server
CMD ["nginx", "-g", "daemon off;"]