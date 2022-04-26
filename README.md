# symbol-ts-lesson

symbol-sdkを学習するためだけのリポジトリ
環境構築依存などありますが、
まずはsymbol-sdkを学ぶためのリポジトリです。

なのでこのプロジェクトをクローンしてから操作できるようにしたいなと。

``` terminal
npm install
```

でインストールができます

今のところプロジェクトには
ts-node
typescript
symbol-sdk
rxjs
の４つが入っています。

## 動作テスト

クローンをしてきたリポジトリのメインブランチにはアカウントを作成する機能が書かれています

``` terminal
npx ts-node helloworld.ts
```

を実行すると

``` console.log
symbol-ts-lesson$ npx ts-node helloworld.ts
Your new account address is: TA5A3E-RRYUUO-4TM7D6-I3SWQC-Y3GR2D-PKWVRX-RZQ and its private key 5E79319E37EBC72BECD711C2AF20BB0A7A39DB4EFE34ECACB067D60671D694E0
```

このような形でターミナルにログが出力されるようになります。

基本的にこの

``` terminal
ts-node ファイル名
```

でそれぞれの機能を確認していきながら学習していくことになります。

まずはこの動作が確認できるかどうかのチェックをしましょう。
