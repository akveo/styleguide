# Akveo RxJs styleguide

Наши правила будут основаны на правилах линтера для rxjs https://github.com/cartant/eslint-plugin-rxjs.

## akveo/rxjs:recommended

Этот конфиг будет расширять `plugin:rxjs/recommended`, который приходит из модуля. Правила напротив которых будет галочка – будут включены.

Так же нужны будут следующие изменения:

- Включаем `no-compat`. Кому вообще нужен компат?
- Включаем `no-ignored-observable`.
- Надо проверить дефолтное значение у `no-sharereplay`, оно должно быть таким: `{ "allowConfig": true }`, если отличается, надо указать как в примере.

## akveo/rxjs:strict

Конфиг будет расширять наш recommended конфиг и делать его строже.

- Включаем `no-exposed-subjects`
- Включаем `no-ignored-error`
- Включаем `no-topromise`

Возможно правила `no-exposed-subjects` и `no-ignored-error` не имеет большого профита. Тогда `no-topromise` я бы перенес в recommended и убрал бы strict правила

## akveo/rxjs:with_store

Есть часть правил, которые не включены в `plugin:rxjs/recommended` и в наш recommended, потому что у они узкоспециализированы в работе со стором типа ngrx. Потенциально мы их можем включить в дополнительный набор правил для стора.

- Включаем `no-cyclic-action`
- Включаем `no-unsafe-catch`
- Включаем `no-unsafe-first`
- Включаем `no-unsafe-switchmap`

## akveo/rxjs:angular

Правила для ангуляра находятся в другом пакете https://github.com/cartant/eslint-plugin-rxjs-angular.

- Включаем `prefer-takeuntil`
