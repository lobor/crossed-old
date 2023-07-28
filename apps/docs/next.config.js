/** @type {import('next').NextConfig} */

const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
});

const { withCrossed } = require('@crossed/ui-next-adapter');

module.exports = withNextra(
  withCrossed({
    transpilePackages: ['@crossed/ui', '@crossed/core', 'react-native'],
  })
);
