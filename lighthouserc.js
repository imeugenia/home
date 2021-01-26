module.exports = {
  ci: {
    collect: {
      numberOfRuns: 3,
      target: "temporary-public-storage",
    },
    assert: {
      preset: "lighthouse:recommended",
      assertions: {
        "categories:accessibility": ["warn", { minScore: 1 }],
      },
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
