
// JS program for Symbol Table 
function SymbolTable() {
    let table = {}; // Object to store key-value pairs

    // INSERT operation: adds or updates a key-value pair in the symbol table
    function insert(key, value) {
        table[key] = value;
        console.log(`Inserted: ${key} = ${value}`);
    }

    // SEARCH operation: retrieves the value associated with a key
    function search(key) {
        if (key in table) {
            console.log(`Found: ${key} = ${table[key]}`);
            return table[key];
        } else {
            console.log(`Key ${key} not found.`);
            return undefined;
        }
    }

    // DELETE operation: removes a key-value pair from the symbol table
    function deleteKey(key) {
        if (key in table) {
            delete table[key];
            console.log(`Deleted: ${key}`);
        } else {
            console.log(`Key ${key} not found.`);
        }
    }

    // Function to print the entire symbol table
    function printTable() {
        console.log("Symbol Table:");
        for (let key in table) {
            console.log(`${key}: ${table[key]}`);
        }
    }
    return {
        insert,
        search,
        deleteKey,
        printTable
    };
}

// Test the SymbolTable class
let symbolTable = SymbolTable();
symbolTable.insert("A", 2);
symbolTable.insert("B", 3);
symbolTable.search("A");
symbolTable.search("C");
symbolTable.deleteKey("B");
symbolTable.printTable();   
