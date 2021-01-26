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
      },
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
