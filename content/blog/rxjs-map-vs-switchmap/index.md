---
title: map vs switchMap in rxjs
date: "2023-04-15"
description: Umap vs switchMap in rxjs
tag: rxjs
---

### Introduction to Mapping Operators in RxJS

RxJS is a powerful library for handling reactive programming in JavaScript applications. One of the key features of RxJS is its collection of mapping operators, which transform the data emitted by observables into different formats.

Mapping operators are a category of RxJS operators that modify the emitted data from an observable. They are powerful tools that allow developers to perform a wide range of transformations on observable data. In this blog post, we will discuss two of the most commonly used mapping operators in RxJS - map and switchMap.

### The map Operator

The map operator is one of the simplest mapping operators in RxJS. It takes an observable as input and returns another observable that has transformed the original data.

Here is an example of using the map operator to transform the emitted data from an observable:

```javascript
import { from } from "rxjs"
import { map } from "rxjs/operators"

const observable = from([1, 2, 3, 4, 5])

observable.pipe(map(x => x * 10)).subscribe(x => console.log(x))

// Output: 10, 20, 30, 40, 50
```

In this example, we create an observable that emits the values 1 through 5, and then use the map operator to multiply each emitted value by 10. The output of the subscription is the transformed values - 10, 20, 30, 40, and 50.

The map operator is useful for making simple transformations to the data emitted by an observable. It takes a single function as an argument, which is called on each emitted value.

### The switchMap Operator

The switchMap operator is a bit more complicated than map, but it is also more powerful. It is often used when you want to switch to a new observable based on the value emitted by the previous observable.

Here is an example of using the switchMap operator to switch to a new observable:

```javascript
import { fromEvent } from "rxjs"
import { switchMap } from "rxjs/operators"

const button = document.getElementById("my-button")

fromEvent(button, "click")
  .pipe(switchMap(() => from([1, 2, 3, 4, 5])))
  .subscribe(x => console.log(x))

// Output: 1, 2, 3, 4, 5
```

In this example, we create an observable from a click event on a button element. When the button is clicked, the switchMap operator switches to a new observable that emits the values 1 through 5.

The switchMap operator is useful for cases where you need to switch to a new observable based on the emitted value of a previous observable. It takes a function as an argument that returns a new observable. When the source observable emits a value, the function is called with that value, and the returned observable is used as the new source.

### Other Mapping Operators

In addition to map and switchMap, there are many other mapping operators in RxJS that can be used to transform observable data. Here are a few examples:

- `concatMap`: This operator maps each value to an observable, then flattens all the inner observables into a single observable.
- `mergeMap`: This operator maps each value to an observable, then merges all the inner observables into a single observable.
- `exhaustMap`: This operator ignores new values from the source observable until the current inner observable has completed.

### Conclusion

`map`, `switchMap`, `mergeMap`, `concatMap`, and `exhaustMap` are powerful operators in RxJS that allow you to transform. By understanding these operators and when to use them, you can create efficient and concise code that is easy to read and maintain.
