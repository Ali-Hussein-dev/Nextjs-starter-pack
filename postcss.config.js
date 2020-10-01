const purgecss = [
  '@fullhuman/postcss-purgecss',
  {
    enabled: true,
    content: [
      './components/**/*.js',
      './pages/**/*.js',
      './components/**/*.jsx',
      './pages/**/*.jsx',
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
    ...(process.env.NODE_ENV === 'production' ? [purgecss] : []),
  ],
};
