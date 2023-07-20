#!/bin/bash

if [ -z "$1" ]
  then
    printf "######\nStart HAN UI\n######\nUsage\n./start-ui.sh docker-version\nExample:\n./start-ui.sh 001\n"
    exit 1
fi

tag=$1
docker stop han-ui
docker rm han-ui
docker run \
  --restart=on-failure \
  -d \
  -p 443:443 \
  -p 80:80 \
  -v /home/kchew/han-cloud/app:/usr/local/apache2/htdocs \
  --name han-ui \
  --link han-db:han-db \
  "smartnetworks/han:cloud-ui-$tag" \
