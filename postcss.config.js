const purgecss = [
  '@fullhuman/postcss-purgecss',
  {
    enabled: true,
    content: [
      './src/components/**/*.{ts, tsx,js,jsx}',
      './src/pages/**/*.{ts, tsx,js,jsx}',
    ],
    defaultExtractor: (content) =>
      content.match(/[\w-/:]+(?<!:)/g) || [],
  },
];
module.exports = {
  plugins: [
    'postcss-import',
    'tailwindcss',
    'autoprefixer',
    'postcss-flexbugs-fixes',
    'postcss-preset-env',
    ...(process.env.NODE_ENV === 'production' ? [purgecss] : []),
  ],
};
