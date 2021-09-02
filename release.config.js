module.exports = {
  branches: ["main"],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/changelog",
    "@semantic-release/npm",
    "@semantic-release/git",
    [
      "@semantic-release/gitlab",
      {
        gitlabUrl: "https://gitlab.com",
        gitlabApiPathPrefix: "/api/v4",
      },
    ],
  ],
  repositoryUrl: "https://gitlab.com/firmino.changani/coingecko-dashboard-copycat-react",
};
