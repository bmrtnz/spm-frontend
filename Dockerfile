# ---- Build Stage ----
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
# AJOUTEZ CECI POUR VÉRIFIER LE CONTENU DE /app/dist APRÈS LE BUILD
RUN echo "Contenu de /app/dist après le build:" && ls -la /app/dist

# ---- Run Stage ----
FROM nginx:1.27-alpine-slim
# Supprime la configuration Nginx par défaut
# RUN rm /etc/nginx/conf.d/default.conf # Décommenter si vous ajoutez une conf personnalisée plus tard

COPY --from=builder /app/dist /usr/share/nginx/html
# AJOUTEZ CECI POUR VÉRIFIER LE CONTENU DE /usr/share/nginx/html DANS L'IMAGE NGINX
RUN echo "Contenu de /usr/share/nginx/html dans l'image Nginx:" && ls -la /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]