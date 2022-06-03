# Akveo style guides

- [Angular](./angular/README.md)
- [React](./react/README.md)
- [React Native](./react-native/README.md)
- [Java](./java/README.md)
- [TypeScript](./typescript/README.md)
- [RxJs](./rxjs/README.md)

## Intall
* run a basic lint install for your platform
* to use angular configs run `npm i eslint-plugin-rxjs eslint-plugin-rxjs-angular`

# How to apply
add the necessary confing to the "extends" array of eslintrc.json :

"extends": [
  "plugin:@angular-eslint/recommended",
  "plugin:@angular-eslint/template/process-inline-templates",
  "akveo/angular"
]
