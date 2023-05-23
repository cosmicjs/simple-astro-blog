/** @type {import("prettier").Config} */
module.exports = {
  ...require('prettier-config-standard'),
  pluginSearchDirs: [__dirname],
  plugins: [
    require.resolve('prettier-plugin-astro'),
    require('prettier-plugin-tailwindcss')
  ],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro'
      }
    }
  ],
  tailwindConfig: './tailwind.config.cjs'
}
