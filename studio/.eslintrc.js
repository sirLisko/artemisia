module.exports = {
  extends: ['standard', 'standard-react', 'plugin:prettier/recommended'],
  rules: {
    'react/prop-types': 0,
  },
  settings: {
    react: {
      pragma: 'React',
      version: '16.5.0',
    },
  },
};
