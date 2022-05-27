# Akveo style guides

- [Angular](./angular/angular-styleguide.md)
- [React](./react/react-styleguide.md)
- [React Native](./react-native/react-native-styleguide.md)
- [Java](./java/java-styleguide.md)
- [Java Spring](./java/spring-styleguide.md)
- [TypeScript](./typescript/typescript-styleguide.md)
- [RxJs](./rxjs/rxjs-styleguide.md)

## Linters

Es lint rules can be found in the respective folders

## Before use
* run a basic lint install for your platform
* run  npm i eslint-plugin-deprecation,
* to use angular configs run  npm i eslint-plugin-rxjs eslint-plugin-rxjs-angular

# How to apply
add the necessary confing to the "extends" array of eslintrc.json :

"extends": [
  "plugin:@angular-eslint/recommended",
  "plugin:@angular-eslint/template/process-inline-templates",
  "akveo/angular"
]
