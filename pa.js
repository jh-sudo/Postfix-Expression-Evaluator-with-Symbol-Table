// JS program to evaluate value of a postfix expression
function postfix(exp)
{
    //create stack
        let stack=[];
        // iterate sequentially over each tokens one by one
        for(let i=0;i<exp.length;i++)
        {
            // exp is the input expression
            let c=exp[i];
            // If the character is an number,push it to the stack.  
            if(parseInt(c)) 
            stack.push(parseInt(c));
              
            //  If the character is an operator,which will be stored in c, pop two elements from stack and apply the operator
            else
            {
                let num1 = stack.pop();
                let num2 = stack.pop();
                //depending on which operator, itll perform that specific operation
                switch(c)
                {
                    case '+':
                    stack.push(num2+num1);
                    break;
                      
                    case '-':
                    stack.push(num2-num1);
                    break;
                      
                    case '*':
                    stack.push(num2*num1);
                    break;

                    case '/':
                    stack.push(num2/num1);
                    break;
                }
            }
        }
        return stack.pop();   
}

//test values   
let exp="791+2/*3-";
//print out the function outputx
console.log("postfix evaluation: "+ postfix(exp));