module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "body-max-length": [0, "never", Infinity],
    "body-max-line-length": [0, "never", Infinity],
    "footer-max-line-length": [0, "never", Infinity],
  },
};
