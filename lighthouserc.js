module.exports = {
  ci: {
    collect: {
      numberOfRuns: 3,
      target: "temporary-public-storage",
    },
    assert: {
      preset: "lighthouse:recommended",
      assertions: {
        "color-contrast": "off",
        "external-anchors-use-rel-noopener": "off",
        "heading-order": "off",
        "maskable-icon": "off",
        "meta-description": "off",
        "non-composited-animations": "off",
        "is-on-https": "off",
        "legacy-javascript": "off",
        "uses-webp-images": "off",
        "resource-summary:third-party:size": [
          "error",
          { maxNumericValue: 5000 },
        ],
        "resource-summary:font:size": ["error", { maxNumericValue: 9000 }],
        "resource-summary:script:size": ["error", { maxNumericValue: 40000 }],
        "resource-summary:total:size": ["error", { maxNumericValue: 170000 }],
      },
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
