import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const repository = process.env.GITHUB_REPOSITORY ?? "";
const repositoryName = repository.split("/")[1] ?? "";
const isUserOrOrgPagesRepo = repositoryName.endsWith(".github.io");
const cnamePath = join(process.cwd(), "public", "CNAME");
const customDomain = existsSync(cnamePath) ? readFileSync(cnamePath, "utf8").trim() : "";
const hasCustomDomain = customDomain.length > 0;
const basePath =
  isGithubActions && repositoryName && !isUserOrOrgPagesRepo && !hasCustomDomain
    ? `/${repositoryName}`
    : "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath,
  assetPrefix: basePath || undefined
};

export default nextConfig;
