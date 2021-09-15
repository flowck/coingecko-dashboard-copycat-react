module.exports = {
  branches: ["develop"],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/changelog",
    "@semantic-release/npm",
    "@semantic-release/git",
    "@semantic-release/github",
  ],
  repositoryUrl: "https://github.com/flowck/coingecko-dashboard-copycat-react.git",
};
