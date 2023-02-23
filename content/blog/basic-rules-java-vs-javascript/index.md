---
title: Understanding Basic Rule Differences Between JavaScript and Java
date: "2023-02-23"
description: Understanding Basic Rule Differences Between JavaScript and Java
tag: Java
---

When it comes to programming, there are many languages to choose from, each with its own set of rules and syntax. Two popular programming languages that are often confused are JavaScript and Java. Although both languages share similar names, they have many differences in syntax, rules, and usage.

##### Semicolons at the end of statements

One of the most notable differences between JavaScript and Java is the use of semicolons at the end of statements. In Java, every statement must end with a semicolon (;). For example:

```java
int a = 5;
System.out.println("Hello, World!");
```

In JavaScript, semicolons at the end of statements are not required, but recommended. However, if a statement is followed by another statement on the same line, a semicolon must be used to separate them. For example:

```js
var a = 5
console.log("Hello, World!")

var b = 10
var c = 15 // semicolons needed to separate statements
```

##### Variable declarations

In Java, variables must be declared with a data type before they can be used. For example:

```java
int a = 5;
String message = "Hello, World!";
```

In JavaScript, variables can be declared without a data type using the var, let, or const keywords. For example:

```javascript
var a = 5
let message = "Hello, World!"
const PI = 3.14
```

##### Function declarations

In Java, functions are declared using the public keyword, followed by the return type, function name, and parameter list. For example:

```java
public int add(int a, int b) {
    return a + b;
}
```

In JavaScript, functions are declared using the function keyword, followed by the function name and parameter list. For example:

```javascript
function add(a, b) {
  return a + b
}
```

##### Class declarations

In Java, classes are declared using the class keyword, followed by the class name and class body. For example:

```java
public class MyClass {
    private int a;
    public void setA(int a) {
        this.a = a;
    }
    public int getA() {
        return a;
    }
}
```

In JavaScript, classes can be declared using the class keyword, but this syntax was introduced in ECMAScript 2015. Prior to that, classes were typically declared using functions and prototypes. For example:

```javascript
class MyClass {
  constructor(a) {
    this.a = a
  }
  setA(a) {
    this.a = a
  }
  getA() {
    return this.a
  }
}
```

#### Conclusion

Although both JavaScript and Java share similar names, they are vastly different in syntax, rules, and usage. Java requires semicolons at the end of statements, while JavaScript does not require them, but recommends them. Java requires variables to be declared with a data type, while JavaScript allows variables to be declared without a data type using the var, let, or const keywords. Java declares functions using a specific syntax, while JavaScript declares functions using the function keyword. Java declares classes using the class keyword, while JavaScript can declare classes using the class keyword, but traditionally used functions and prototypes. Understanding these basic differences can help you avoid common mistakes when switching between these two languages.
