# Portfolio

これは **Next.js + Docker + GitHub Actions** を使用して構築されたポートフォリオサイトです。開発環境と本番環境の構成を分け、**ローカルではDockerで開発**、**本番環境はVercelで自動デプロイ（CD）**されています。


---

## 🛠 使用技術

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Docker](https://www.docker.com/)
- [Vercel](https://vercel.com/)
- [GitHub Actions](https://github.com/features/actions)

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

## CI / CD
### CI（GitHub Actions）

dev ブランチに push / PR 時に以下を自動チェック

・TypeScript 型チェック (tsc --noEmit)
・ESLint によるコード品質チェック (next lint)
・Next.js build の確認 (next build)

### CD（Vercel）

main ブランチへマージすると、自動的に Vercel に本番デプロイされます。
dev や feat/〜 ブランチは Preview URL が自動生成されます。

## ブランチ戦略
main    ... 本番用ブランチ（Vercelデプロイ対象）
dev     ... 開発統合ブランチ

## ディレクトリ構成
portfolio/
├── docker-compose.yml
├── Dockerfile
├── .gitignore
├── package.json
├── public/
├── src/
└── ...

