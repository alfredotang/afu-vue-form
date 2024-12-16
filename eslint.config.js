import antfu from '@antfu/eslint-config'
import tailwind from 'eslint-plugin-tailwindcss'

export default antfu(
  {
    typescript: true,
    vue: true,
    javascript: true,
    jsonc: false,
    yaml: false,
    markdown: false,
    test: true,
    lessOpinionated: true,
    formatters: {
      css: true,
      html: true,
    },
    stylistic: {
      indent: 2,
      quotes: 'single',
      semi: false,
      jsx: true,
    },
    // `.eslintignore` is no longer supported in Flat config, use `ignores` instead
    ignores: [
      '**/dist/**',
      '**/dist-ssr/**',
      '**/coverage/**',
      '**/src/templates/**',
      'src/ajax/**',
      '!src/ajax/index.ts',
    ],
  },
  {
    files: ['**/*.vue'],
    rules: {
      'vue/block-order': ['error', {
        order: ['template', 'script', 'style'],
      }],
      'vue/first-attribute-linebreak': ['error', {
        singleline: 'beside',
        multiline: 'below',
      }],
      'vue/max-attributes-per-line': ['error', {
        singleline: {
          max: 1,
        },
        multiline: {
          max: 1,
        },
      }],
      'vue/attribute-hyphenation': 'off',
      'import/first': 'off',
    },
  },
  {
    files: ['**/*.vue', '**/*.ts'],
    rules: {
      'import/no-relative-parent-imports': 'error',
      'jsdoc/check-param-names': 'off',
      'no-useless-return': 'off',
      'curly': 'off',
    },
  },
  ...tailwind.configs['flat/recommended'],
  {
    settings: {
      tailwindcss: {
        callees: ['cva', 'clsx', 'cn', 'cx'],
      },
    },
  },
  {
    files: ['**/*.vue', '**/*.ts'],
    rules: {
      'tailwindcss/no-custom-classname': 'off',
      'tailwindcss/no-contradicting-classname': 'warn',
    },
  },
)
