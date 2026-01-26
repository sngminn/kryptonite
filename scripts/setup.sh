#!/bin/bash

ADDR=".env.local"

if [ -f "$ADDR" ] || [ -f ".env" ]; then
    echo "이미 .env 파일이 있습니다"
    exit 1
else
    read -p "API: " API_KEY
    read -p "Secret: " API_SECRET
    echo "API_KEY=$API_KEY" > "$ADDR"
    echo "API_SECRET=$API_SECRET" >> "$ADDR"
    echo "생성 완료"
fi

exit 0