# Akveo RxJs styleguide

Our rules will be based on the linter rules for RxJs https://github.com/cartant/eslint-plugin-rxjs.

## `akveo/rxjs:recommended`

This config will extend the `plugin:rxjs/recommended` rule set.

Rules to be enabled by config inheritance:
- `no-async-subscribe`. Asynchronous logic inside `subscribe` can lead to memory leaks and race conditions, so it should be moved to `switchMap`/`mergeMap`/etc.
- `no-create`. `Observable.create` - marked deprecated.
- `no-ignored-notifier`. In the `repeatWhen` and `retryWhen` operators, it is better to start the logic with the passed `notifier`.
- `no-ignored-replay-buffer`. When using the `publishReplay`, `shareReplay` and `ReplaySubject` operators, it is necessary to specify the buffer size because its default size is `Number.POSITIVE_INFINITY`, which is rarely necessary and often leads to unexpected behavior.
- `no-ignored-takewhile-value`. Not using passed value to the callback of `takeWhile`, means the function uses external factors. In that case, it is better to use `takeUntil` to avoid memory leaks.
- `no-implicit-any-catch`. Better error typing.
- `no-index`. Can cause unexpected bugs and memory leaks. More details here https://github.com/ReactiveX/rxjs/issues/4230
- `no-internal`. Can cause unexpected bugs and memory leaks. More details here. https://github.com/ReactiveX/rxjs/issues/4230
- `no-nested-subscribe`. Nested subscriptions? Worth refactoring, otherwise it's an easy path to memory leaks.
- `no-redundant-notify`. It helps to avoid unnecessary notify events. For example, if you make `subject.error();`, then after it `subject.complete();` is no longer needed.
- `no-sharereplay`. `shareReplay` without config leads to memory leaks, https://github.com/ReactiveX/rxjs/pull/4059. By default, disallow using `shareReplay` without config.
- `no-subject-unsubscribe`. `unsubsribe` of the subjects works differently, and its use is most often a mistake.
- `no-unbound-methods`. The passing class functions as the callback is not good. https://ncjamieson.com/avoiding-unbound-methods/
- `no-unsafe-subject-next`. If `subject` has no `void` type, `.next()` should be called **with** arguments.
- `no-unsafe-takeuntil`. Incorrectly placed `takeUntil` can lead to memory leaks. https://ncjamieson.com/avoiding-takeuntil-leaks/

Extra turned on rules:

- Turn on `no-compat`. Who needs `compat` in an application anyway? Having it in a dependency to support old libraries is fine, but why use it directly in an application? This is most likely a misuse.
- Enable `no-ignored-observable`. Any observable should be used, not just lying in the middle of code.
- Enable `no-exposed-subjects`. Often subjects are used as data storage, and the class that uses the subject gives the API to get information from the subject and modify it, so giving the subject out is not good.
- Enable `no-topromise`. If we start working with observables, it's more convenient to leave everything in observables and it's better to bring promises to observables, not vice versa.

## akveo/rxjs:with_store

There are some rules which are not included in `plugin:rxjs/recommended` and in our `recommended`, because they are highly specialized in dealing with a store like `ngrx`. We could potentially include them in an additional set of store rules.

- Enable `no-cyclic-action`. Protect against simple cyclic actions in effects.
- Enable `no-unsafe-catch`. `catchError` in the wrong place terminates the whole observable, and this is often not the desired behavior.
- Enable `no-unsafe-first`. `first` in the wrong place terminates the whole observable, and this is often not the desired behavior.
- Enable `no-unsafe-switchmap`. `switchMap` in certain types of actions that may cause loss of data.

## akveo/rxjs:angular

The rules for Angular are in another package https://github.com/cartant/eslint-plugin-rxjs-angular.

- Enable `prefer-takeuntil`. If you have subscribed, you have to unsubscribe. We have to override the setting `"checkDecorators" : ["Component", "Directive", "Pipe", "Service"]`.
