var name = "Preeti";

//Camel case
var firstName = "Preeti";
var lastName = "Hosamani";

//Snakecase
var first_name = "preeti";

// JavaScript Identifier Naming Conventions (Cases)

// ============================================================================
// 1. camelCase
// First word lowercase, each subsequent word capitalized.
// Most commonly used for variables and functions in JavaScript.
// ============================================================================
let firstName = "Alice";
let totalScore = 100;
let isUserLoggedIn = true;
let getUserData = function () { };
let numberOfStudents = 45;

// ============================================================================
// 2. PascalCase (UpperCamelCase)
// First letter of every word is capitalized.
// Commonly used for class names and constructor functions.
// ============================================================================
class UserProfile { }
class BankAccount { }
let EmployeeDetails = function () { };
let HttpRequest = {};
let DataTableComponent = class { };

// ============================================================================
// 3. snake_case
// All lowercase with words separated by underscores.
// Often used for constants or database field names.
// ============================================================================
let user_name = "Bob";
let total_score = 200;
let is_active = false;
let max_limit = 500;
let file_path = "/home/user/docs";

// ============================================================================
// 4. SCREAMING_SNAKE_CASE (UPPER_SNAKE_CASE)
// All uppercase with underscores separating words.
// Conventionally used for constants.
// ============================================================================
const PI = 3.14159;
const MAX_USERS = 100;
const API_BASE_URL = "https://api.example.com";
const DB_PASSWORD = "secret";
const HTTP_STATUS_OK = 200;

// ============================================================================
// 5. kebab-case (NOT valid for identifiers, but common in filenames/HTML)
// Lowercase with hyphens. Cannot be used as JS variable names.
// ============================================================================
// let user-name = "invalid";   // INVALID in JS identifier
// Used in HTML/CSS: data-user-id, my-class-name

// ============================================================================
// 6. Hungarian Notation (legacy style)
// Prefix indicates the variable type or purpose.
// ============================================================================
let strName = "Charlie";       // str = string
let nCount = 10;               // n = number
let bIsReady = true;           // b = boolean
let arrScores = [90, 80, 70];  // arr = array
let elButton = null;           // el = DOM element

// ============================================================================
// Summary Table (for reference)
// ============================================================================
// | Convention          | Example           | Typical Use Case           |
// |---------------------|-------------------|----------------------------|
// | camelCase           | userProfile       | Variables, Functions       |
// | PascalCase          | UserProfile       | Classes, Components        |
// | snake_case          | user_profile      | Variables, DB fields       |
// | SCREAMING_SNAKE_CASE| USER_PROFILE      | Constants, Enums           |
// | kebab-case          | user-profile      | File names, CSS classes    |
// | Hungarian Notation  | strUserProfile    | Legacy / Type hinting      |
// ============================================================================
