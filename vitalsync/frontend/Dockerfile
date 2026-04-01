# nginx alpine — officielle, légère, stable
FROM nginx:stable-alpine
# config personnalisée à la place du default
COPY nginx.conf /etc/nginx/conf.d/default.conf
# page d'accueil
COPY index.html /usr/share/nginx/html/index.html
EXPOSE 80
