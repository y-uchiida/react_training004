# react_training004

React を利用して、認証付きの簡易ブログを作成しました。  
認証情報と投稿内容の記録を Firebase の機能を利用しています。

## 開発環境

- Windows 11 (21H2)
- WSL2 Ubuntu20.04
- React 18.2
- Node.js 16.17.0
- vite 3.1.0

## ローカルでの動作の手順

node が利用できる環境に当リポジトリをクローンします  
下記コマンドで依存パッケージをインストールします

```bash
$ npm install
```

`src/firebase.tsx` に、firestore の設定を持たせるようになっています  
ご自身の firestore に posts コレクションを作成したデータベースを用意し、  
その情報を ファイル内に記述してください

firestore データベースの設定画面から、設定すべき項目の値を確認できます

下記コマンドで vite のローカルサーバを起動します

```bash
$ npm run dev

> react_trainig004@0.0.0 dev
> vite


  VITE v3.1.0  ready in 466 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

ターミナルに表示された localhost の URL にアクセスすると、トップページが表示さます

## 大変だったこと

firebase を typescript で扱う際に、型定義の問題によるエラーが発生し、その調査と修正に時間がかかりました  
firebase の便利さを感じつつ、始めて使うサービスは勝手がわからなくてつまづくのは変わらないなと思いました

## 参考資料

以下の教材をベースにソースコードを作成しました  
【React アプリ開発】3 種類の React アプリケーションを構築して、React の理解をさらに深めるステップアップ講座:  
https://www.udemy.com/course/react-trello-development
