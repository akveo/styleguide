# Akveo React styleguide

## Table of content

1. [General](#general)
2. [Syntax](#syntax)
3. [Formatting](#formatting)
4. [Component Structure](#component-structure)
5. [Eslint](#eslint)


## General

1. #### Class components vs Hooks **[⬆](#table-of-content)**

   There are no preferences in using classes over hooks. So make sure you follow the project rules.  The main principle is to be consistent. One exception is when the project team decides to move from classes to hooks or vice versa.

1. #### Component files **[⬆](#table-of-content)**

   * Only one React component per file. 
     * As an exception multiple small pure or stateless components are allowed in one file.
     
## Syntax

1. #### Naming Style **[⬆](#table-of-content)**

   * Always use `.jsx` | `.tsx` extensions.
   * Use UpperCamelCase as a components name.
   * Use lowerCamelCase for prop names.
   * It's recommended to use suffixes `Component` or `Container` for explicit definition of "dumb" and "smart" components: `UserProfileComponent` and `UserProfileContainer`.
   * Component name should be the same as the file name. This means that the use of `index` files is forbidden for components. It's easier to find components by filename rather than by folder name.
   * Component filenames should be in UpperCamelCase. It's allowed to use dots (`.`) to explicitly mention type of component: `dashboard.component.tsx`, `userProfile.container.tsx`.
   * Props and state interface definitions shouldn't be prefixed with `I`. Use UpperCamelCase instead.
   * Exported props types should have a suffix `Props`: `ProgressBarProps`. Not exported props and state interfaces recommended naming `Props` and `State` respectively.   

## Formatting

1. #### Horizontal spacing and indentation **[⬆](#table-of-content)**

   * Each nested component increases indentation by ** 2 ** spaces relative to the parent component.
   * There is no space after opening curly brace (`{`) and before closing curly brace (`}`) when wrapping JS expression in JSX:
   ```tsx
   <Component user={someUser} />
   
   {isLoading && <Loader />}
   ```
   * Before self-closing `/>` tag should be a single space.

1. #### Line breaks **[⬆](#table-of-content)**

   * Component with a single prop without children should take a single line.
   * Component with more than one prop or with children must be multiline
     * Each prop should start from the new line
     * Children should start from the new line
     * Closing bracket of the opening tag `>` and self-closing `/>` tag should stick to the line with last prop.
     ```tsx
     <Button
       size='small'
       onPress={onPress}>
       {buttonText}
     </Button>
     
     <UserProfile
       name='Boris'
       lastName='Blade' />
     ```
   * Multiline JSX is wrapped in parentheses. After opening parenthesis `(` and before closing `)` should be a line break.
   ```tsx
   return (
     <CustomComponent 
       prop1={value1}
       prop2={value2} />
   );
   ```

1. #### Props **[⬆](#table-of-content)**

   * Use single quotes `'` for jsx attributes.
   * Do not use braces `{}` for string literals unless it's JS expression.
   * Use explicit value for boolean props even if default value is `true`. 
   ```tsx
   <Component enabled={true} />
   ```
   * Do not inline object or array creation inside jsx. Prepare the data before `return` statement.
   * Inline styles are forbidden. Use `Stylesheet.create` or its analogue.
   * Destruct props and state before usage.
   

## Component Structure

1. #### Naming of component members **[⬆](#table-of-content)**

   * Methods that return React Node must start with `render` prefix: `renderTableFooter()`.
   * Event handlers must start with `on` prefix: `onSettingsPress()`.

1. #### Component members ordering **[⬆](#table-of-content)**

   * Members of class component should be in following order:
     1. `static`fields and methods
     1. `constructor`
     1. component lifecycle methods (`componentDidMount`, `shouldComponentUpdate`, etc)
     1. utility methods (not event handlers, nor render methods)
     1. event handlers
     1. render methods like `renderProfilePicture()`
     1. render


## ESLint

1. #### Recommended packages **[⬆](#table-of-content)**

    * To enforce code consistency & avoid potential bugs, the usage of [ESLint](https://github.com/eslint/eslint) is strongly recommended.
    * It is recommended to use [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react) package in order for ESLint to recognize React semantics.
    * When using TypeScript, using [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint) is a necessity for ESLint and TypeScript working together.
    * The preferred format for `.eslintrc` config file is `.json`.

2. #### ESLint setup via --init command **[⬆](#table-of-content)**
    If you prefer setting up the ESLint configuration by using the `npx eslint --init` command, here's the recommended selection:
    * How would you like to use ESLint? -> To check syntax, find problems, and enforce code style
    * What type of modules does your project use? -> JavaScript modules (import/export)
    * Which framework does your project use? -> React
    * Does your project use TypeScript? -> _Depends on the project_
    * Where does your code run? -> _depends on the project_
    * How would you like to define a style for your project? -> Use a popular style guide
    * Which style guide do you want to follow? -> Airbnb
    * What format do you want your config file to be in? -> JSON

    This setup automatically will install the packages mentioned in the **Recommended packages** section.
    However, this setup will still cause error even in the basic create-react-app project. 
    The additional steps to make sure that ESLint is running smoothly with React application are listed below.

   **Guide for JavaScript project**
   * install [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import) package, in order to prevent issues with misspelling of file paths and import names:
     ```
     npm install eslint-plugin-import --save-dev
     ```
   * add `.eslintignore` file to avoid checking some file types. We recommend skipping `.css` & `.svg`, add the following code inside file to do that:
     ```
     *.css
     *.svg
     ```
   * add the overrides section to .eslintrc.json file:
   ```json
   {
     // ...
     "overrides": [
       {
         "files": [
           "**/*.spec.js",
           "**/*.spec.jsx",
           "**/*.test.js",
           "**/*.test.jsx"
         ],
         "env": {
           "jest": true
         }
       }
     ]
   }
   ```
 
   **Guide for Typescript project**
    * Add following rules to `.eslintrc.json`:
   ```json
   {
     // ...
     "rules": {
       // fix 'React was used before it was defined' error
       "no-use-before-define": "off",
       "@typescript-eslint/no-use-before-define": ["error"],
       // fix 'JSX not allowed in files with extension ‘.tsx’' error
       "react/jsx-filename-extension": [ "warn", {"extensions": [".tsx"]} ],
       // fix ‘Enum is already declared in the upper scope' error
       "no-shadow": "off",
       "@typescript-eslint/no-shadow": ["error"],
       // fix 'import/extensions' error
       "import/extensions": [
         "error",
         "ignorePackages",
         {
           "ts": "never",
           "tsx": "never"
         }
       ],
     }
   }
   ```
    * install [eslint-import-resolver-typescript](https://www.npmjs.com/package/eslint-import-resolver-typescript) package, in order to prevent issues with misspelling of file paths and import names:
      ```
      npm install eslint-import-resolver-typescript --save-dev
      ```
      also add a `settings` property to `.eslintrc.json`: 
      ```json
      {
        // ...
        "settings": {
          "import/resolver": {
            "typescript": {}
          }
        }
      }
      ```
    * add `.eslintignore` file to avoid checking some file types. We recommend skipping `.css` & `.svg`, add the following code inside file to do that:
      ```
      *.css
      *.svg
      ```
    * add `@typescript-eslint/recommended` plugin to the extends property inside `.eslintrc.json`:
      ```json
      {
        // ...
        "extends": [
          // ...
          "plugin:@typescript-eslint/recommended"
        ],
      }
      ```
    **No React import with New JSX Transform** 
    * if you're using React 17 and prefer not to include the React import in JSX files    ,
      disable following rules in `.eslintrc.json` file:
       ```json
       {
         // ...
         "rules": {
            // ...
           "react/jsx-uses-react": "off",
           "react/react-in-jsx-scope": "off"
         }
       }
       ```




