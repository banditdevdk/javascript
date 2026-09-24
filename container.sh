set -e
docker run -d --name hello-world nginx

docker exec hello-world ls /usr/share/nginx/html