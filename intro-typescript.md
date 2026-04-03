# TypeScript Documentation
Official site: [https://www.typescriptlang.org/](https://www.typescriptlang.org/)

---

## Install TypeScript Globally
```
npm install -g typescript
```

## What is Typescript
TypeScript is a superset of JavaScript that adds static typing and compiles to plain JavaScript.


## Why use Typescript
- Adds type safety
- Improves tooling and developer experience
- Helps maintain large projects
- Supports modern JavaScript features

## How to Compile a TypeScript File to JavaScript
```bash
tsc filename.ts
```

## How to Add Restriction if Errors Exist
```
{
  "compilerOptions": {
    "strict": true,
    "noEmitOnError": true
  }
}
```

## 01-basics.ts
Demonstrates **type inference**, **explicit typing**, and what happens when assigning mismatched types.

## 02-vanilla-js-types.js
Shows how JavaScript’s `typeof` operator works to check variable types at runtime.

## 03-flexible-types.ts
Illustrates the `any` type, allowing reassignment to different types and showing its flexibility (and risks).

## 04-arrays-objects.ts
Covers arrays with union types, object typing with nested properties, and the `Record` type for flexible objects.

## 05-enum.ts
Introduces enums, specifically string enums, and shows how to assign `enum` values properly.

## 06-alternative-to-enum.ts 
It defined a fixed set of allowed values without using the 'enum' keyword.
So, the userRole can only be one of these exact values:
'admin', 'guess, 'teacher', 'student'.

// Experimentation
It ensures that only valid values are allowed 

## 07-custom-type-role.ts
This file demonstrates the use of type aliases to create reusable custom types and define structured objects in TypeScript.

It shows how to simplify code by reusing a Role type and how to enforce strict data structures using object types like User.

## 08-functions.ts
This file demonstrates how Twell-structured to use functions in TypeScript.
It shows how TypeScript enforces type safety in functions, ensures correct return values, and improves reliability when using callbacks and object methods.

## 09-special-types.ts
This file is handle missing or empty values safely. It uses 'null' and 'underfined' for strict type checking.

## 10-type-narrowing.ts
It is a siple HTML form used to connect the user input and connect it to a TypeScript file or JavaScript file by using the '<script>' tag.
It allows user to input data but that will processed using TypScript.

This shows how TypeScript helps prevent errors when working with user input and the DOM.

## 11-optional.ts
This demonstrates how TypeScript handles optional values in dfferent scenarios.

