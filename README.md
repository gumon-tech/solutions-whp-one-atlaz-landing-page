# One Atlaz Landing Page

Next.js starter that is configured for GitHub Pages deployment using static export and GitHub Actions.

## Run locally

```bash
npm install
npm run dev
```

## Build for GitHub Pages

```bash
npm run build
```

The build output is generated in `out/`.

## Deploy

1. Push this repository to GitHub.
2. In GitHub, open `Settings > Pages`.
3. Set the source to `GitHub Actions`.
4. Push to `main` to trigger `.github/workflows/deploy.yml`.

## Notes

- The project uses `output: "export"` because GitHub Pages serves static files.
- `basePath` and `assetPrefix` are set automatically in GitHub Actions for project repositories such as `https://username.github.io/repository-name/`.
- If the repository is a user or organization site like `username.github.io`, the app deploys at the root path.
