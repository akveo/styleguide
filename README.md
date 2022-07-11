# Akveo style guides

- [Angular](./angular/README.md)
- [React](./react/README.md)
- [React Native](./react-native/README.md)
- [Java](./java/README.md)
- [TypeScript](./typescript/README.md)
- [RxJs](./rxjs/README.md)

## ESLint configs

- akveo/typescript:recommended
- akveo/angular:recommended
- akveo/react:recommended
- akveo/react-native:recommended

### Typescript

- follow the installation instructions for [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint)
- install eslint-config-akveo:

```shell
npm i -D eslint-config-akveo
 ```

- add akveo confing to the `extends` array in eslint config for your project.

_eslintrc.json example:_

```json
"extends": [
  "akveo/typescript:recommended"
]
```

### Angular

- follow the installation instructions for [eslint-angular](https://github.com/angular-eslint/angular-eslint)
- install eslint-config-akveo and needed dependencies:

```shell
npm i -D eslint-config-akveo eslint-plugin-rxjs eslint-plugin-rxjs-angular
```

- add akveo confing to the `extends` array in eslint config for your project.

_eslintrc.json example:_

```json
"extends": [
  "akveo/angular:recommended"
]
```

### React

- follow installation instructions for [eslint](https://eslint.org/)
- install eslint-config-akveo and needed dependencies:

```shell
npm i -D eslint-config-akveo eslint-plugin-react
```

- add akveo confing to the `extends` array in eslint config for your project.

_eslintrc.json example:_

```json
"extends": [
  "akveo/react:recommended"
]
```

### React Native

- follow installation instructions for [eslint](https://eslint.org/)
- install eslint-config-akveo and needed dependencies:

```shell
npm i -D eslint-config-akveo eslint-plugin-react-native
```

- add akveo confing to the `extends` array in eslint config for your project.

_.eslintrc.js example:_

```js
overrides: [
  {
    extends: [
      'akveo/react-native:recommended',
    ],
    parserOptions: {
      project: ['./tsconfig.json'], // Specify it only for TypeScript files
    },
  },
],
```
