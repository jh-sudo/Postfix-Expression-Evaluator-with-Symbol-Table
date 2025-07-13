// JS program to evaluate value of a postfix expression with varibles 
function PostfixWithVariables() {
    let stack = [];
    // Object to store variable values
    let symbolTable = {}; 
    
    function evaluate(exp) {
        for (let i = 0; i < exp.length; i++) {
            let c = exp[i];
            
            // Check if the token is a number and push it to the stack
            if (parseInt(c)) {
                stack.push(parseInt(c));
            }
            // Check if the token is a variable (single uppercase letter)
            else if (c.length === 1 && /^[A-Z]$/.test(c)) {
                stack.push(c);
            }
            // Check if the token is an operator
            else if (['+', '-', '*', '/'].includes(c)) {
                let operand2 = stack.pop();
                let operand1 = stack.pop();

                // Retrieve values from the symbol table if the operands are variables
                if (typeof operand2 === 'string') {
                    operand2 = symbolTable[operand2];
                }
                if (typeof operand1 === 'string') {
                    operand1 = symbolTable[operand1];
                }

                // Apply the operator
                switch (c) {
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
            }
            // Check if the token is the assignment operator
            else if (c === '=') {
                let value = stack.pop();
                let variable = stack.pop();
                symbolTable[variable] = value;
            }
        }

        // Return the top of the stack if it is not empty
        return stack.length > 0 ? stack[stack.length - 1] : null;
    }

    // Expose the evaluate function
    return {
        evaluate
    };
}

// Test the PostfixWithVariables class
let interpreter = PostfixWithVariables();
interpreter.evaluate("A2=");
interpreter.evaluate("B3=");
let result = interpreter.evaluate("AB*1+");
console.log(result); // Output: 6
