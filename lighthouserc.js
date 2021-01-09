module.exports = {
  ci: {
    collect: {
      numberOfRuns: 3,
      target: "temporary-public-storage",
    },
    assert: {
      assertions: {
        "categories:seo": "warn",
      },
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
