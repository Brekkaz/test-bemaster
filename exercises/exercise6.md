```
Ejercicio 6: Nomenclatura
Crea un documento de políticas de nomenclatura para el equipo de desarrollo de una
compañía, la política debe incluir nomenclatura de: bases de datos, variables, funciones,
clases, git, etc.
```
# Naming

## Introduction
Naming is crucial for readability, maintainability, and effective collaboration in software development. This document establishes guidelines for naming various entities used in the software development process at our company.

## Theoretical framework
- Camel Case:
Description: Camel Case is a naming convention where words are written without spaces, and each additional word starts with a capital letter, except for the first word which may start with either upper or lower case. The name comes from the appearance of the capitals in the middle of the text string, resembling the humps of a camel.  
Example: `myLocalVariable`, `calculateTotalSale`, `userName`.

- Upper Camel Case (also known as Pascal Case):
Description: Upper Camel Case is similar to Camel Case, but the first letter of each word is also capitalized. It's commonly used for naming classes or types in object-oriented programming.  
Example: `MyClass`, `CalculateTotalSale`, `UserName`.

- Snake Case:
Description: Snake Case is a naming convention where words are separated by underscores and all letters are lowercase. It's useful when spaces are not allowed in the name, such as in variable names or in some programming languages that don't support Camel Case.  
Example: `my_variable_local`, `calculate_total_sale`, `user_name`.

- Descriptiveness in Naming
Descriptive naming is essential in software development to enhance code readability and maintainability. When naming variables, functions, classes, or any other entity, choosing names that accurately reflect their purpose or functionality can significantly improve comprehension for both current and future developers working on the codebase.
Clear and descriptive names:
Help developers understand the intent behind each component without needing to delve into its implementation details.
Serve as documentation within the code, reducing the need for additional comments to explain the purpose of the entity.
Facilitate effective communication among team members, as descriptive names convey meaning more efficiently than cryptic or abbreviated ones.
Aid in debugging and troubleshooting, as well-named entities provide valuable context when identifying and fixing issues.

## Databases
Database Names: Use descriptive names in snake case that reflect the purpose or functionality of the database. Avoid cryptic abbreviations.
- Tables: Table names should be plural nouns in upper camel case that clearly describe the entity they represent.
- Columns: Use descriptive names in snake case that clearly indicate the content of the column. Avoid abbreviations and unclear acronyms.

## Programming Lenguage
- Variables: Use meaningful names in camel case that reflect the purpose or content of the variable.
- Functions: Use verbs in camel case that describe the action performed by the function, followed by a descriptive name.
- Classes: Use singular noun names in upper camel case that describe the entity represented by the class.
- Objects: Use meaningful names in camel case that reflect the purpose or functionality of the object.
- Constants: Use uppercase names separated by underscores for constants. Example: `GLOBAL_VARIABLE`
- Comments: Use clear and concise comments to explain the purpose or logic behind the code.

## Git
- Branches: Use descriptive names in snake case with middle dashes that clearly indicate the purpose or function of the branch. Avoid generic names like "new-feature" or "fix". Consider using prefixes such as "feature", "fix", or "refactor" to provide additional context. Example: `feature/shopping-cart`
- Commits: Write clear and concise commit messages that effectively describe the changes made. Use the present tense and be specific about what was modified.
