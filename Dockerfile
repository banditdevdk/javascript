FROM nginx

COPY indexe.html /usr/share/nginx/html/index.html

RUN sed -i 's/listen       80;/listen       8000;/' /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]