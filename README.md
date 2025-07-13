# 📘 Postfix Expression Evaluator with Symbol Table

## 📝 Overview

This project implements a **Postfix Expression Interpreter** that supports both **arithmetic operations** and **variable assignments**. A symbol table is included to store and retrieve variable values dynamically. The solution leverages **stack-based evaluation** and simulates a compiler-like behavior suitable for expression parsing.

---

## 🔧 Features

- Evaluation of expressions in **Postfix Notation**
- Support for variables (`A–Z`) with assignment (`=`) operations
- **Symbol Table** implemented via a JavaScript object
- Handles standard arithmetic: `+`, `-`, `*`, `/`
- Modular design with reusable methods: `insert`, `search`, `delete`, `printTable`
- Error handling for invalid tokens and undefined variables

---

## 📂 File Structure

| File              | Description                                 |
|-------------------|---------------------------------------------|
| `index.js`        | Main entry point to run the interpreter     |
| `pa.js`           | Postfix evaluation logic                    |
| `pawv.js`         | Exposes the evaluator with symbol table     |
| `symbolTable.js`  | Implementation of the Symbol Table module   |
| `test.js`         | Sample expressions for testing functionality|

---

## 📌 Sample Usage

```js
let interpreter = PostfixWithVariables();
interpreter.insert("A", 2);
interpreter.insert("B", 3);
interpreter.evaluate("C 4 =");  // Assigns 4 to variable C
let result = interpreter.evaluate("A B * C +"); // Result = 2*3 + 4 = 10
console.log("Result:", result);
interpreter.printSymbolTable();
interpreter.search("A");
interpreter.search("D");
```

---

## 📈 Data Structures

- **Stack:** Used to store operands during expression evaluation (LIFO behavior)
- **Symbol Table:** JavaScript object used for storing key-value pairs (O(1) average lookup)

---

## 🔍 Known Limitations

- Only supports **single-character variable names**
- Does **not support multi-digit numbers** unless expressions are properly tokenized (e.g. split by space)
- No check for division by zero unless explicitly added

### Suggested Fixes:

- Use `split(" ")` on input to support multi-digit numbers
- Add runtime check for `division by zero`:
  ```js
  if (token === '/' && operand2 === 0) {
      throw new Error('Division by zero');
  }
  ```

---

## 📚 References

- GeeksForGeeks: [Evaluation of Postfix Expression](https://www.geeksforgeeks.org/evaluation-of-postfix-expression/)
- Class Slides: Symbol Tables and Postfix Traversal (CM2035)
