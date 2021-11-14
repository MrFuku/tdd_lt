## 環境構築
```
docker-compose build
```

## 起動
```
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

## Jest実行
https://typescript-jp.gitbook.io/deep-dive/intro-1/jest
```
npx jest
```
