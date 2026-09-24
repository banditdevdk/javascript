set -e
docker run -d --name hello-world nginx
docker run -d --name hello-world2 nginx

docker exec hello-world ls /usr/share/nginx/html

docker logs hello-world

