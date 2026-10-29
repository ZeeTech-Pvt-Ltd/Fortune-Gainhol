import nextVitals from 'eslint-config-next/core-web-vitals'

const eslintConfig = [
  ...nextVitals,
  {
    rules: {
      // The site intentionally uses plain <img> (ticker coins, avatars)
      // and does not need next/image.
      '@next/next/no-img-element': 'off',
    },
  },
]

export default eslintConfig
