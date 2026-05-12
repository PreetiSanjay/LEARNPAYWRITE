// JavaScript Identifier Rules with Examples

// ============================================================================
// Rule 1: Allowed characters are letters (a-z, A-Z), digits (0-9), underscore (_), and dollar sign ($)
// ============================================================================
let userName = "Alice";      // letters only
let data_value = 100;        // underscore used
let $price = 50;             // dollar sign used
let item2 = "book";          // digits allowed (but not at the start)

// ============================================================================
// Rule 2: First character must be a letter, underscore (_), or dollar sign ($); cannot be a digit
// ============================================================================
let _private = true;         // starts with underscore (valid)
let $element = null;         // starts with dollar sign (valid)
let result = 42;             // starts with letter (valid)
// let 2ndItem = "invalid";  // INVALID: starts with a digit

// ============================================================================
// Rule 3: Identifiers are case-sensitive
// ============================================================================
let score = 10;
let Score = 20;
let SCORE = 30;
// All three are different identifiers

// ============================================================================
// Rule 4: No spaces or special symbols allowed (except _ and $)
// ============================================================================
let user_name = "valid";     // underscore is allowed
let user$name = "valid";     // dollar sign is allowed
// let user-name = "invalid"; // INVALID: contains hyphen (-)
// let user name = "invalid"; // INVALID: contains space
// let user@name = "invalid"; // INVALID: contains @

// ============================================================================
// Rule 5: Cannot use reserved keywords as identifiers
// ============================================================================
// let var = 5;        // INVALID: var is a keyword
// let let = 5;        // INVALID: let is a keyword
// let function = 5;   // INVALID: function is a keyword
// let return = 5;     // INVALID: return is a keyword
// let class = 5;      // INVALID: class is a keyword
// let const = 5;      // INVALID: const is a keyword
let myVar = 5;           // VALID: "var" is part of name, not used alone
let className = "JS";    // VALID: "class" is part of name, not used alone

// ============================================================================
// Valid Examples
// ============================================================================
let firstName = "John";
let _index = 0;
let $jquery = "library";
let MAX_LIMIT = 100;
let camelCaseVariable = true;
let data123 = [];

// ============================================================================
// Invalid Examples (commented out to prevent errors)
// ============================================================================
// let 123abc = 1;           // starts with digit
// let my-variable = 2;      // contains hyphen
// let my variable = 3;      // contains space
// let my@variable = 4;      // contains special character @
// let if = 5;               // reserved keyword
// let true = 6;             // reserved keyword
// let null = 7;             // reserved keyword
