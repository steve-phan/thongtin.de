---
title: Understand Varargs in Java
date: "2023-02-27"
description: Understand Varargs in Java
---

In Java, a method can accept a variable number of arguments using the varargs mechanism. Varargs (short for variable arguments) allows a method to accept zero or more arguments of a specified type. The syntax for declaring a varargs parameter is to use an ellipsis (...) after the type name in the method declaration.

For example, here's a method that takes a variable number of integers and returns their sum:

```java
public static int sum(int... numbers) {
    int sum = 0;
    for (int n : numbers) {
        sum += n;
    }
    return sum;
}
```

In this example, the parameter numbers is declared as a varargs parameter of type int. This means that the method can accept any number of int values, including zero. The method body uses a for loop to iterate over the array of arguments and calculate their sum.

Here are some examples of how this method can be called:

```java
int sum1 = sum(1, 2, 3);         // sum1 = 6
int sum2 = sum(10, 20, 30, 40);  // sum2 = 100
int sum3 = sum();                // sum3 = 0
```

As you can see, the method can be called with any number of int arguments, including zero. If no arguments are provided, the method returns zero.

Varargs can also be used in conjunction with other parameters in a method declaration. For example:

```java
public static void printValues(String prefix, int... values) {
    System.out.print(prefix + ": ");
    for (int n : values) {
        System.out.print(n + " ");
    }
    System.out.println();
}
```

This method takes a String parameter prefix and a varargs parameter values of type int. The method body prints the prefix string followed by the values of the values array.

Here are some examples of how this method can be called:

```java
printValues("Numbers", 1, 2, 3);           // prints "Numbers: 1 2 3"
printValues("More numbers", 10, 20, 30);   // prints "More numbers: 10 20 30"
printValues("No numbers");                // prints "No numbers: "
```

As you can see, the method can be called with any number of int arguments, including zero, and with a String prefix.

In summary, varargs in Java are a convenient mechanism for defining methods that can accept a variable number of arguments of a specified type. They allow you to write more flexible and concise code, and are used extensively in the Java API.
