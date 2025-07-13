// Simple Symbol Table Implementation
function SymbolTable() {
    let table = {}; // Object to store key-value pairs

    // INSERT operation: adds or updates a key-value pair in the symbol table
    function insert(key, value) {
        table[key] = value;
    }

    // SEARCH operation: retrieves the value associated with a key
    function search(key) {
        if (key in table) {
            return table[key];
        } else {
            return undefined;
        }
    }

    // DELETE operation: removes a key-value pair from the symbol table
    function deleteKey(key) {
        if (key in table) {
            delete table[key];
        }
    }

    // Function to print the entire symbol table
    function printTable() {
        console.log("Symbol Table:");
        for (let key in table) {
            console.log(`${key}: ${table[key]}`);
        }
    }

    // Expose the functions
    return {
        insert,
        search,
        deleteKey,
        printTable
    };
}

// Postfix Evaluator with Variables
function PostfixWithVariables() {
    let stack = [];
    let symbolTable = SymbolTable(); // Using the symbol table

    function evaluate(exp) {
        for (let i = 0; i < exp.length; i++) {
            let token = exp[i];
            
            // Check if the token is a number and push it to the stack
            if (!isNaN(parseInt(token))) {
                stack.push(parseInt(token));
            }
            // Check if the token is a variable (single uppercase letter)
            else if (token.length === 1 && /^[A-Z]$/.test(token)) {
                stack.push(token);
            }
            // Check if the token is an operator
            else if (['+', '-', '*', '/'].includes(token)) {
                let operand2 = stack.pop();
                let operand1 = stack.pop();

                // Retrieve values from the symbol table if the operands are variables
                if (typeof operand2 === 'string') {
                    operand2 = symbolTable.search(operand2);
                    if (operand2 === undefined) throw new Error(`Variable ${operand2} is not defined`);
                }
                if (typeof operand1 === 'string') {
                    operand1 = symbolTable.search(operand1);
                    if (operand1 === undefined) throw new Error(`Variable ${operand1} is not defined`);
                }

                // Apply the operator
                switch (token) {
                    case '+':
                        stack.push(operand1 + operand2);
                        break;
                    case '-':
                        stack.push(operand1 - operand2);
                        break;
                    case '*':
                        stack.push(operand1 * operand2);
                        break;
                    case '/':
                        stack.push(operand1 / operand2);
                        break;
                }
            } else {
                throw new Error(`Invalid token ${token}`);
            }
        }

        // Return the top of the stack if it is not empty
        return stack.length > 0 ? stack[stack.length - 1] : null;
    }

    // Expose the evaluate function and the symbol table functions
    return {
        evaluate,
        insert: function(key, value) {
            symbolTable.insert(key, value);
            console.log(`Inserted: ${key} = ${value}`);
        },
        search: function(key) {
            let result = symbolTable.search(key);
            if (result !== undefined) {
                console.log(`Found: ${key} = ${result}`);
            } else {
                console.log(`Key ${key} not found.`);
            }
            return result;
        },
        deleteKey: symbolTable.deleteKey,
        printSymbolTable: symbolTable.printTable
    };
}

// Test the PostfixWithVariables class
let interpreter = PostfixWithVariables();
interpreter.insert("A", 2);
interpreter.insert("B", 3);
let result = interpreter.evaluate("AB*");
console.log(result); // Output: 6
interpreter.printSymbolTable();
interpreter.search("A");
interpreter.search("C");
