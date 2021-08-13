# Akveo RxJs styleguide

Наши правила будут основаны на правилах линтера для rxjs https://github.com/cartant/eslint-plugin-rxjs.

## `akveo/rxjs:recommended`

Этот конфиг будет расширять набор правил `plugin:rxjs/recommended`, который приходит из модуля.

Правила, которые будут включены наследованием конфига:
- `no-async-subscribe`. Асинхронная логика внутри `subscribe` может приводить к утчекам памяти и race condition, поэтому ее надо выносить в `switchMap`/`mergeMap`/и т.д.
- `no-create`. `Observable.create` - помечен устаревшим.
- `no-ignored-notifier`. В операторах `repeatWhen` or `retryWhen` лучше использовать переданные notifier стримы, как точку старта.
- `no-ignored-replay-buffer`. При использовании операторов `publishReplay`, `shareReplay` и `ReplaySubject` надо указывать размер буфера, потому что по умолчанию его размер - `Number.POSITIVE_INFINITY`, что редко необходимо и часто приводит к неожиданному поведению.
- `no-ignored-takewhile-value`. Если значение, переданное в колбек `takeWhile`, не используется, то функция использует внешние факторы, и для избежания утечек памяти лучше использовать `takeUntil`.
- `no-implicit-any-catch`. Лучше типизация ошибок.
- `no-index`. Может приводить к неожиданным багам и утечкам памяти. Больше деталей тут https://github.com/ReactiveX/rxjs/issues/4230
- `no-internal`. Может приводить к неожиданным багам и утечкам памяти. Больше деталей тут https://github.com/ReactiveX/rxjs/issues/4230
- `no-nested-subscribe`. Вложенные подписки? Стоит отрефакторить, иначе это легкий путь к утечкам памяти.
- `no-redundant-notify`. Помогает избегать ненужных notify-событий. Например, если сделать `subject.error();`, то после него `subject.complete();` уже не нужен.
- `no-sharereplay`. `shareReplay` без конфига приводит к утечкам памяти, https://github.com/ReactiveX/rxjs/pull/4059. По умолчанию запрещает использование `shareReplay` без конфига.
- `no-subject-unsubscribe`. `unsubsribe` у subject'ов работает по другому и чаще всего его использование - ошибка.
- `no-unbound-methods`. Передавать функции класса как колбеки – не очень хорошо. https://ncjamieson.com/avoiding-unbound-methods/
- `no-unsafe-subject-next`. Если у `subject` не указан тип `void`, то в `.next()` не стоит вызывать без аргументов.
- `no-unsafe-takeuntil`. Не правильно расположенный `takeUntil` может привести к утчекам памяти. https://ncjamieson.com/avoiding-takeuntil-leaks/

Так же нужны будут следующие изменения:

- Включаем `no-compat`. Кому вообще нужен компат в приложении? Иметь его в зависимости для поддержки старых библиотек еще норм, а вот зачем в приложении его использовать напрямую? Скорее всего это неправильное использование.
- Включаем `no-ignored-observable`. Любой observable должен быть использован, а не просто лежать посреди кода.

## akveo/rxjs:strict

Конфиг будет расширять наш recommended конфиг и делать его строже.

- Включаем `no-exposed-subjects`. Зачастую subject'ы используются как какое-то хранилище данных, а класс который использует subject дает АПИ для получения информации из subject и для его модификации, поэтому выдавать subject наружу – не ок.
- Включаем `no-ignored-error`. Отлавливаем **все** ошибки.
- Включаем `no-topromise`. Если мы начинаем работать со стримами, то удобнее все оставлять в стримах и лучше тогда promise'ы приводить к потокам, а не наоборот.

Возможно правила `no-exposed-subjects` и `no-ignored-error` не имеют большого профита. Тогда `no-topromise` я бы перенес в recommended и убрал бы strict правила, как отдельную настройку.

## akveo/rxjs:with_store

Есть часть правил, которые не включены в `plugin:rxjs/recommended` и в наш recommended, потому что у они узкоспециализированы в работе со стором типа ngrx. Потенциально мы их можем включить в дополнительный набор правил для стора.

- Включаем `no-cyclic-action`. Защищаемся от простых циклических экшенов в эффектах.
- Включаем `no-unsafe-catch`. `catchError` в неправильном месте завершает весь поток, и часто это не желаемое поведение.
- Включаем `no-unsafe-first`. `first` в неправильном месте завершает весь поток, и часто это не желаемое поведение.
- Включаем `no-unsafe-switchmap`. `switchMap` в определенных типах экшенов может приводить к потере данных.

## akveo/rxjs:angular

Правила для ангуляра находятся в другом пакете https://github.com/cartant/eslint-plugin-rxjs-angular.

- Включаем `prefer-takeuntil`. Если сделали подписку, надо отписаться. Надо переопределить настройку `"checkDecorators": ["Component", "Directive", "Pipe", "Service"]`.
