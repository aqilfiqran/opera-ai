module.exports = {
  tabWidth: 2,
  printWidth: 120,
  endOfLine: 'auto',
  arrowParens: 'avoid',
  trailingComma: 'es5',
  semi: true,
  useTabs: false,
  singleQuote: true,
  bracketSpacing: true,
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindFunctions: ['clsx', 'cva', 'cn'],
  experimentalTernaries: true,
};
