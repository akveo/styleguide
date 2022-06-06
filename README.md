# Akveo style guides

- [Angular](./angular/README.md)
- [React](./react/README.md)
- [React Native](./react-native/README.md)
- [Java](./java/README.md)
- [TypeScript](./typescript/README.md)
- [RxJs](./rxjs/README.md)

## Intallation
- run a basic lint installation for your platform
- if you are using typescript make sure the following plugins are installed:
  'plugin:@typescript-eslint/recommended',
  'eslint:recommended',
- to use angular configs run `npm i eslint-plugin-rxjs eslint-plugin-rxjs-angular` and make sure the following plugins are also installed and extended from:   
  'plugin:@angular-eslint/recommended',
  'plugin:@angular-eslint/template/process-inline-templates',
- to use react configs make sure the following plugins are installed and are extended from :
  'plugin:react/recommended',
  'plugin:react/jsx-runtime',
- if you are using react native make sure that in adition to react plugins the following plugin is installed: 
  'eslint-plugin-react-native'
# How to apply
add the necessary confing to the "extends" array of eslintrc.json :
"extends": [
  "akveo/angular"
]
