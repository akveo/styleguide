# Akveo Typescript styleguide

## Table of content

1. [Syntax](#syntax)
1. [Formatting](#formatting)
1. [Language Rules](#language-rules)
1. [Source code organization](#source-code-organization)
1. [Types](#types)
1. [Other](#other)

## Syntax

1. #### Naming Style **[⬆](#table-of-content)**

| Category         | Style           |
| ------------- |:-------------:|
| class     | UpperCamelCase |
| interface | UpperCamelCase |
| type      | UpperCamelCase |
| enum      | UpperCamelCase |
| variable  | lowerCamelCase |
| function  | lowerCamelCase |
| method    | lowerCamelCase |
| property  | lowerCamelCase |
| enum values  | lowerCamelCase |
| module alias  | lowerCamelCase |
| global constant values  | CONSTANT_CASE |
| static readonly values  | CONSTANT_CASE |

* Prefixes are forbidden.
* Generics parameters like `Array<T>` should use a single uppercase character.

## Formatting

1. #### Braces **[⬆](#table-of-content)**

   * Braces are required for all control structures (i.e. if, else, for, do, while, as well as any others), even if the body contains only a single statement.
   * For nonempty code blocks use "Egyptian brackets"
     * No line break before the opening brace.
     * Line break after the opening brace.
     * Line break before the closing brace.
     * Line break after the closing brace if that brace terminates a statement or the body of a function or class statement, or a class method. Specifically, there is no line break after the brace if it is followed by else, catch, while, or a comma, semicolon, or right-parenthesis.

   ```typescript
   class SomeClass {
     constructor() {}

     public someMethod(param: boolean): void {
       const obj = {};
       if (param) {
         try {
          doSomething();
         } catch (err: Error) {
            handleError(err);
         }
       }
     }
   }
   ```

   * An empty block construct may be closed immediately after it is opened, with no symbols in between `{}`, unless it is a part of a multi-block statement (one that directly contains multiple blocks: `if/else` or `try/catch/finally`).

1. #### Indentation +2 **[⬆](#table-of-content)**

   * Each time a new block construct is opened, the indent increases by **2** spaces.
   * In switch statement after a switch label a new line should be inserted and the indentation is increased by +2.

1. #### Statements **[⬆](#table-of-content)**

   * Each statement is followed by a line break.
   * Every statement must be terminated with a semicolon. Relying on automatic semicolon insertion is forbidden.

1. #### Column limit: 80 **[⬆](#table-of-content)**

   * If a line is longer than 120 symbols it should be wrapped.
   * Line break should be placed after the operator. This does not apply to the 'dot' (which is not an operator).
   * Break lines at a **higher syntactic level**.
     * The syntactic levels from highest to lowest are as follows: assignment, division, function call, parameters, number constant.
   * Indent continuation lines at least +4 spaces from the original line.

1. #### Vertical Whitespace **[⬆](#table-of-content)**

   * A single blank line appears:
     * Between methods in a class or object literal. A blank line between two consecutive properties is optional. Such blank lines could be used for logical separation.
     * Inside methods bodies for logical groupings of statements. Do not put blank lines at the beginning and end of the method.
     * After import section, between class definitions.
     * Optionally before the first method in a class or object literal.
     * Optionally between properties in a class or object literal for logical grouping.
   * Multiple blank lines are permitted, but never required (nor encouraged).

1. #### Horizontal whitespace **[⬆](#table-of-content)**

   The use of horizontal whitespace depends on location and falls into three broad categories: leading (at the start of a line), trailing (at the end of a line), and internal. Leading whitespace (i.e., indentation) is addressed [here](#indentation-2-). Trailing whitespace is forbidden.

   A single internal space appears in the following places:
   * Separating any reserved word (such as `if`, `for`, or `catch`) except for `function` and `super`, from an open parenthesis (`(`) that follows it on that line.
   * Separating `case` from a closing curly brace (`}`) that precedes it on that line.
   * After opening curly brace `{` and before closing `}` curly brace when it's a single property object literal: `{ name: 'John' }`, `{ lastname }`, `{ ...data }`.
   * After opening bracket `[` and before closing `]` bracket: `[ 4, 5, 6 ]`, `[ ...data ]`.
   * Before any open curly brace (`{`), with two exceptions:
     * Before an object literal that is the first argument of a function or the first element in an array literal (e.g. `foo({ a: [{ c: d }] })`).
     * In a template expansion, as it is forbidden by the language (e.g. valid: `ab${1 + 2}cd`, invalid: `xy$ {3}z`).
   * On both sides of any binary or ternary operator.
   * After a comma (`,`) or semicolon (`;`). Note that spaces are never allowed before these characters.
   * After the colon (`:`) in an object literal.

## Language Rules

1. #### Visibility **[⬆](#table-of-content)**

   * Limit visibility of properties, methods and types as much as possible.
   * Always use visibility modifiers as `public`, `private`, `protected`.

1. #### Constructors **[⬆](#table-of-content)**

   * Omit empty constructors or one that simply delegates into its parent class. However, constructors with parameters should not be omitted even if the body of the constructor is empty.

1. #### Class Members **[⬆](#table-of-content)**

   * Initialize class property where it's declared.
   * Getter should be a pure function. Do not create trivial getters and setters (without any logic or decorators).

1. #### Primitive Types & Wrapper Classes **[⬆](#table-of-content)**

   * Do not use wrapper classes for the primitive types like `Boolean`, `String`.

1. #### Objects **[⬆](#table-of-content)**

   * Use trailing commas whenever there is a line break between the final property and the closing brace.
   * Use the literal syntax for object creation:
    ```typescript
    const obj = {};
    ```
   * Use property shorthand syntax.
    ```typescript
    const firstName = 'Boris';
    const lastName = 'Blade';

    const user = {
      firstName,
      lastName,
    };
    ```

1. #### Strings **[⬆](#table-of-content)**

   * Use single quotes for strings.
   * When building up strings use template strings instead of concatenation.
    ```typescript
    const str = `Hello ${user}!`;
    ```

1. #### Arrays **[⬆](#table-of-content)**

   * Do not use `Array()` constructor. Instead, always use brackets to initialize arrays.
   * Include a trailing comma whenever there is a line break between the final element and the closing bracket.

1. #### Variables **[⬆](#table-of-content)**

   * Always use `const` or `let` to declare variables. Use `const` by default, unless a variable needs to be reassigned. Never use `var`.

1. #### Exceptions **[⬆](#table-of-content)**

   * Always throw `Error` or subclass of `Error`. Use `new Error()` when instantiating exceptions, instead of just calling `Error()`.

1. #### Iterating and loops **[⬆](#table-of-content)**

   * Do not use `for (... in ...) to` iterate over arrays. It will counterintuitively give the array's indices (as strings!), not values. Use `for (... of someArr)` or vanilla for loops with indices to iterate over arrays.

1. #### Switch statement **[⬆](#table-of-content)**

   * All `switch` statements must contain a `default` statement, even if it contains no code.
   * Each case in a `switch` statement must be wrapped in a `{}` block.

1. #### Equality Checks **[⬆](#table-of-content)**

   * Always use triple equals `(===)` and not equals `(!==)`.
   * Use double equals `(==)` only to catch both `null` and `undefined`. In this case all other falsy values like `0`, `false` does not catch.

1. #### Function Declaration **[⬆](#table-of-content)**

   * Use regular function declaration `function someFunction() {...}` to declare named functions.
   * Use arrow function properties `const someFunction = () => {...}` instead of rebinding `someFunction.bind(this)`.
   * Use arrow functions to call instance methods:
   ```typescript
   setTimeout(() => {
     this.someFunction()
   }, 5000)
   ```

1. #### Event Handlers **[⬆](#table-of-content)**

   * Use arrow function properties as event handlers. It's possible to use arrow functions as event handlers if there is no need tp uninstall the handler.

1. #### @ts-ignore **[⬆](#table-of-content)**

   * Try not to use `@ts-ignore`. Try to avoid `@ts-ignore` when dealing with type error. Advices from [Type any](#type-any-table-of-content) could help.

1. #### Decorators **[⬆](#table-of-content)**

   * When using decorators, the decorator must immediately precede the symbol it decorates, with no empty lines between.
   * Decorators should be on the line above the decorated class, property or method:
   ```typescript
   @injectable()
   class UserService {

     @observable
     private username = '';
   }
   ```
1. #### Non-nullability Assertions **[⬆](#table-of-content)**

   * You should not use type and non-nullability assertions without an obvious or explicit reason for doing so.
      Instead of
   ```typescript
   (x as Foo).foo();

   y!.bar();
   ```
      Use the following code. It will produce runtime check and code will not crash.

   ```typescript
   if (x instanceof Foo) {
     x.foo();
   }

   if (y) {
     y.bar();
   }
   ```
   * Use optional chaining `?.` operator for "presence" (if value is not `null` or `undefined`) check.
   ```typescript
   // bad
   if(user && user.address && user.address.street)

   //good
   if(user?.address?.street)
   ```
   * Use nullish coalescing `??` operator as "fall back" to a default value when dealing with `null` or `undefined`.



## Source code organization

1. #### File Names **[⬆](#table-of-content)**

   * File name should be in `lowerCamelCase` format. File name may have dot separator (`.`) and details of file type: `users.api.tsx`

1. #### Modules **[⬆](#table-of-content)**

   * Use named exports. Do not use default exports.
   * Use destructing imports by default. You may use also use renaming imports if necessary.

## Types

1. #### Type Inference **[⬆](#table-of-content)**

   * Type annotations for variables, fields, etc should improve code readability.
   Do not annotate trivially inferred types: `string`, `number`, `boolean` or `new` expression. For example:
    ```typescript
    const x = 5; // Clearly number

    // Compare:

    const s1: Set<string> = new Set<string>();
    const s2 = new Set<string>();
    // Again, type of s2 is simply recognized and more readable.
    ```

   * Return types for functions and methods should be always explicitly annotated.

1. #### Null and Undefined **[⬆](#table-of-content)**

   * There is no rule to use `null` over `undefined` or vice versa. Use what suits better for particular case.
   * Types must not include `|null` or `| undefined` in a union type.
      Instead of `type Direction = Left | Right | undefined` use
      `Direction | undefined`
   * Use optional `someFunction(param?: ParamType)` fields and parameters instead of defining `| undefined` type. For classes preferably avoid this pattern altogether and initialize as many fields as possible.

1. #### Interface and Type Aliases **[⬆](#table-of-content)**

   * Interfaces and Type aliases are almost identical. So in order to write code in the same style let's use one approach. Use interfaces over the type aliases.

1. #### Arrays **[⬆](#table-of-content)**

   * For simple types (single shor type name) use `T[]` syntax. For longer and complex forms use `Array<T>`
   ```typescript
   const a1: string[];
   const a2: User[];
   // but
   const a3: Array<number | undefined>
   ```

1. #### Type `any` **[⬆](#table-of-content)**

   * Consider not to use `any`. In circumstances where you want to use any, consider one of:
     * Provide a more specific type. Use interface, an inline object type, or a type alias
     * Use `unknown`
     * Suppress the lint warning and document why it is legitimate
   * Take a look at the recommendation [here](https://thoughtbot.com/blog/typescript-stop-using-any-there-s-a-type-for-that).

## Other

1. #### Code style principles **[⬆](#table-of-content)**

   * Be consistent. If some questions are not covered in the list above, format code the same way as it formatted in other files of a project.
   * Write new code in standardized style unless this will introduce huge changes in linting.

2. #### File layout **[⬆](#table-of-content)**

   Typical file layout should have the following order:
   1. Import statements. Imports from the libraries should be above the local imports;
   2. File constants (not class constants);
   3. Interface and type definitions;
   4. Class definition;
   5. Export statement;

   Class layout:
   1. public properties
   2. protected properties
   3. private properties
   4. constructors
   5. public methods
   6. protected methods
   7. private methods
