## 環境構築
```
docker-compose build
```

## 起動
```
docker-compose up

or

docker-compose run node sh
```

## TSビルド
```
npx tsc
# output => ls ./dist
```

## TS実行
```
npx ts-node src/index.ts

or

npx ts-node-dev --respawn src/index.ts
```
