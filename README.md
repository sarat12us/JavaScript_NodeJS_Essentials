

## Folder Structure

- src
  - All of your code will go in here.
  
- test
  - Existing tests for all algorithms are here.

## Eslint
  - Please lint your code and fix any issues before returning.
  - npm run lint

## How to Test
  
#### Run all tests
  - ./node_modules/mocha/bin/_mocha test/
  - Or you can use this shortcut I created in the package.json
    - npm run test

#### Run tests from a single file   
  - ./node_modules/mocha/bin/_mocha test/intersection-spec
  
#### Using mocha .only / .skip
  - Every 'it' and 'describe' block can be post-fixed with a .only or a .skip flag.
  - If you use a .only flag then only that test or test block will be executed.
  - If you use a .skip flag then all tests except for the ones marked as skipped will executed.
    
```
  it.only("Should only run this stuff", function () {})
  it.skip("Should not run this test", function () {})
```
