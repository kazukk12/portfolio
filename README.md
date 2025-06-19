# Portfolio

これは Next.js + Docker を使用して構築されたポートフォリオサイトのプロジェクトです。開発環境をDockerで統一し、将来的なデプロイやCI/CDも見据えた構成となっています。

---

## 🛠 使用技術

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)（導入している場合）
- [Docker](https://www.docker.com/)
- [Vercel](https://vercel.com/)（デプロイ予定）

---

## 🚀 開発環境構築

### 前提条件

- Docker / Docker Compose がインストールされていること

### 起動手順

```bash
# イメージをビルド（初回 or Dockerfile 変更時）
docker compose build

# コンテナを起動（Next.js dev サーバーが立ち上がります）
docker compose up
```

##　ブラウザで以下にアクセス
http://localhost:3000

## ディレクトリ構成
portfolio/
├── docker-compose.yml
├── Dockerfile
├── .gitignore
├── package.json
├── public/
├── src/
└── ...

