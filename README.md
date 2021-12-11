# tdd_lt

[テスト駆動開発](https://www.amazon.co.jp/dp/B077D2L69C/ref=dp-kindle-redirect?_encoding=UTF8&btkr=1) の書籍を元に TypeScript で実装していきテスト駆動開発の素晴らしさを確認していく勉強会です。  
基本的にはコンテナの中で実装をするので Docker が起動できる環境を用意しておいてください。

## 💪 環境構築

```shell
$ docker-compose build
```

## 💻 開発

開発で使用しているコマンドをこちらに記載してきます。

### 💡 コンテナの起動

```shell
$ docker-compose run --rm node
```

### 🤖 コンテナ内で使用するコマンド群

コンテナ内で使用することを想定されているコマンド群です。

#### TypeScript のビルド

```shell
$ yarn run build

# output => ls ./dist
```

#### Jest の実行

```shell
$ yarn run test
```

#### ts-node の実行

```shell
$ yarn run exec
```

## 📖 勉強会履歴

勉強会で行った履歴をこちらにつらつらと記載して起きます

### ✏️ 第1回 - 2021年12月5日

- [✨ 【第1章 仮実装】TODOリストの中で一番簡単に実装できなそうな times メソッドのテストを追加](https://github.com/MrFuku/tdd_lt/commit/67d1437c5c89f5da9834344dfb52c68b07d12e79)
- [♻️ 【第1章 仮実装】Dollar クラスを作成しコンパイルエラーを解消する](https://github.com/MrFuku/tdd_lt/commit/aa337af163763f97eb82b505fc57168bd79d27e8)
- [♻️ 【第1章 仮実装】テストがまずは通すことを優先して改修する](https://github.com/MrFuku/tdd_lt/commit/1fc3b76e964873e82eb136038923b5699e6a3a36)
- [♻️ 【第1章 仮実装】リファクタリングを行い、重複を除去する](https://github.com/MrFuku/tdd_lt/commit/9cfc8d6cd95fbd13ad60e520c83e290b7665c2b9)
- [🐛 【第2章 明白な実装】Dollar の副作用の確認](https://github.com/MrFuku/tdd_lt/commit/a6db3c982ac09cd1860ac3caec4efc2a2f61280a)
- [♻️ 【第2章 明白な実装】Dollarの副作用の解消をする①](https://github.com/MrFuku/tdd_lt/commit/c94e39764cb1341a25f8b36dc73ea34dd2824a35) 
- [♻️ 【第2章 明白な実装】Dollarの副作用の解消をする②](https://github.com/MrFuku/tdd_lt/commit/6444ad9187ef79f1f5699cabda67185944cbb103)
- [✨ 【第3章 三角測量】equals メソッドのテストを実装しとりあえずテストが成功するまで実装する](https://github.com/MrFuku/tdd_lt/commit/bc2b5724fe4708d66b3556341ba823d53cacf8b3)
- [♻️ 【第3章 三角測量】等値性比較のメソッドを実装](https://github.com/MrFuku/tdd_lt/commit/d0570aa550e5beaa2d892d3160ffe4a5d5d4b45e)
- [✨ 【第3章 三角測量】null との等値性比較のテストを追加](https://github.com/MrFuku/tdd_lt/commit/730d6f29fdcd96d04f6337cda18f875ff2d67ebe)
- [♻️ 【第3章 三角測量】null との等値性比較の実装](https://github.com/MrFuku/tdd_lt/commit/0285a78106a7911f89023e7833eea3c7a3fd774a)
