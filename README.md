# Data Structures and Algorithms labs

## Lab 1 (Sorts)
### Script
Using yarn
```bash
yarn lab1
```
Using npm
```bash
npm run lab1
```
### Arguments
Every next argument requires that all previous arguments were provided
| Name           | Type                                                                                                  | Example                              |
|----------------|-------------------------------------------------------------------------------------------------------|--------------------------------------|
| Sort's name    | "selection" \|<br>  "insertion" \|<br> "bubble" \|<br> "shell" \|<br> "quick" \|<br> "heap", required | ``` yarn lab1 quick ```              |
| Number of rows | Number, optional                                                                                      | ``` yarn lab1 quick 5 ```            |
| Number of cols | Number, optional                                                                                      | ``` yarn lab1 quick 5 5 ```          |
| Minimum limit  | Numer, optional                                                                                       | ``` yarn lab1 quick 5 5 -100 ```     |
| Maximum limit  | Number, optional                                                                                      | ``` yarn lab1 quick 5 5 -100 100 ``` |