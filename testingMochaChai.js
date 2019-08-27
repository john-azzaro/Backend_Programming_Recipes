'use strict';
// TOPIC /////////////////////////////////////////////////////////////////////////////////////////////////////
//     Server-Side Testing with Mocha and Chai
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//      1. What is a software test?
//      2. Why do you run software tests?
//      3. What is a unit test?
//      4. What is Mocha?
//      5. What is a test suite and test case?
//      6. How do you install Mocha?
//      7. How do you make a basic Mocha test?
//      8. What is chai?
//      9. How do you use Chai (with Mocha)?
//      10. What are expect-style assertions?
//      11. What should your test strategy be like?
//      12. What are integration tests?
//      
//      
//
// NOTES ////////////////////////////////////////////////////////////////////////////////////////////////////
//        1. Useful overview of information on server-side testing with Mocha and Chai from study, research,
//        tutorials, mentor meetings, peer discussions, and good ole' fashioned curiosity.  I've put the document
//        in Question and Answer format for improved readability.
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* 
1. What is a software test?
////////////////////////////
    •   A software test is a routine that runs another peice of code (i.e. the subject under test) and determines 
        whether or not the tested code conformed to expectations.
*/

/* 
2. Why do you run software tests?
//////////////////////////////////
    •   Running software tests are useful for two reasons:
        1.  Well-written test suites can guard against REGRESSION.
            •   For example, any change to a code base that unintentionally breaks the previously wokig behavior would
                be regressive.
        2.  Well-written tests server as documentation for code collaborators.
            •   For example, tests can illustrate the way we expect the code to be used, and what should have if given 
                specific inputs.    
            •   In other words, tests are a common way to document the core functionality of code to make sure that any
                new features do NOT introduce breaking changes.    
*/

/* 
3. What is a unit test?
///////////////////////
    •   Unit testing means testing the bahavior of code in small, independant units.
    •   "Units" are designed to be the smallest of meaningful chuncks of independently testable code.
    •   This is in comparison to "integration testing", where modules are are tested in a group.



*/


/* 
4. What is Mocha?
/////////////////
    •   Mocha is a test framework.
    •   Mocha's testing framework provides functions that are executed according to a specific order and logs the 
        result in the terminal window.
    •   Mocha provides a command line argument that can be run (e.g. mocha) that will look for an execute tests.
    •   Mocha provides syntax for describing features and specifications.
    •   With Mocha, you will regualarly use keywords like "describe" and "it", which provide structure to the tests
        by batching them into test suites and test cases.
*/


/* 
5. What is a test suite and test case?
///////////////////////////////////////
    •   A "test suite" is a collection of tests all realting to a single functionality or behavior.
    •   A "test case" is a signle description about the desired behavior of a code that either passes or fails.
    •   Test suites are bached underneath "describe" keywords.
    •   Test cases are batched underneath "it" keywords.

*/

/* 
6. How do you install Mocha?
/////////////////////////////
    •   Assuming you have a project folder, cd into that project folder, and run "npm init", install mocha
        by running:
        --------------------------------------
        npm install mocha --save-dev 
        -------------------------------------- 
    *   When you run this, it will install mocha in the devDependencies array for development environments, which 
        will NOT be installed in production.
        --------------------------------------------------
        {
            "name": "mocha-chai-demo-2",
            "version": "1.0.0",
            "description": "",
            "main": "index.js",
            "scripts": {
                "test": "echo \"Error: no test specified\" && exit 1"
            },
            "keywords": [],
            "author": "",
            "license": "ISC",
            "devDependencies": {                                        <== mocha installed in devDependencies.
                "mocha": "^6.2.0"
            }
        }
        --------------------------------------------------
*/

/* 
7. How do you make a basic Mocha test?
//////////////////////////////////////

    STEP 1: Install Mocha:
    =======================   
        •   Inside your project folder, assuming you have already run "npm init", install mocha to your
            development environment.
        --------------------------------------------------
        npm install mocha --save-dev
        --------------------------------------------------    


    STEP 2: In your package.json file, add a "test" property to the "scripts" object:
    =================================================================================
        •   By default, you will see other code but you can remove that and add this or add the line below below 
            it which will allow you to run your mocha tests in Gitbash with a single command.
        --------------------------------------------------
        "scripts": {
            "test":"mocha --exit"
        }
        --------------------------------------------------


    STEP 3: Have (or create) a JavaScript file for code you want to test:
    =====================================================================.
        •   In the case of this example, we'll create a file called "isEqual.js" with the following code:
        ---------------------------------------------------
        module.exports = function(a,b) {return a === b}
        ---------------------------------------------------


    STEP 4: Create a "test" folder:
    ===============================
        •   This "test" folder will contain all the tests we wish to perform.


    STEP 5: Create a test file:
    ===========================
        •   Test files will test individual files in your project folder.
        •   Note that for every file you create inside your "test" files, it should always:
                1.  begin with "test-"
                2.  use "-" between words
                3.  Be all lowercase

        •   For example:
            ----------------------
             test
                test-is-equal
                test-is-even
                test-is-odd           
            ----------------------


    STEP 6: Inside your test file, first load the JavaScript file you want to test:
    ================================================================================
        •   In this example, we load the JavaScript file "isEqual".
        ----------------------------------------------------

        const isEqual = require('../isEqual');

        ----------------------------------------------------


    STEP 7: Use "describe" to group your tests:
    ============================================
        •   "describe" is for grouping, which can be used to nest as deep as you need.     
        •   "describe" takes a string and a callback.
            •   The string is used to decalre the entity to be tested=.
            •   The callback function sets up the test. 

        grouping for test     file to test       callback function 
                        \          |             /
                        describe('isEqual', function() {

                        });

        ------------------------------------------------------
        
        describe('isEqual', function() {
            ...
            ...
            ...
        });

        ------------------------------------------------------   


    STEP 8: Inside "describe", use "it" to indicate the behavior to test:
    =====================================================================
        •   "it" is the test case.
        •   Inside "it", there are two arguments.
            1.  The string value of the argument being tested.
            2.  A callback function that provides the test for the behavior.
        
        •   In the example below, we only have the string value so we can test to see if everything is hooked up
            correctly.
        ------------------------------------------------------
        
        describe('isEqual', function() {
            it('should give right answers for equal and unequal inputs')
            ...
            ...
        });

        ------------------------------------------------------  
         •   Note at this point that "it" also takes a string and a callback, but this uses "expect" from the chai 
             framework/assertion library (see next questions on chai).


    STEP 9: Run initial test from gitbash:
    ======================================
        •   Always a good idea to make sure everything is hooked up correctly.
        •   To run a test, run "npm test" (remember, we added a script called "test" that runs "mocha --exit" ).

        ------------------------------
        npm test 
        ------------------------------ 

        •   If everything was setup successfully, you should see the following:

        ----------------------------------------------------------------------
        $ npm test                                                              <== when you run "npm test"...

        > mocha-demo-2@1.0.0 test C:\Users\Admin\Desktop\mocha-demo             <== mocha-demo (i.e. the test folder)...
        > mocha --exit                                                          <== ... runs mocha --exit (i.e. the script for "test")

        isEqual                                                                 <== name of the function being tested...
            - should give right answers for equal and unequal inputs            <== first argument is a string value indicating the bahavior to be tested in that block.

        0 passing (9ms)
        1 pending                                                               <== Test is pending because we have not supplied a callback function.

        ---------------------------------------------------------------------- 
*/


/* 
8. What is chai?
/////////////////
    •   Chai is an assertion library that is often used alongside Mocha.
    •   Chai provides functions and methods that can help compare the output of certain tests with its expected value
    •   Chai provides a clean syntax that is almost comparable to english.
*/


/* 
9. How do you use Chai (with Mocha)?
/////////////////////////////////////
    •   This example uses the previous "isEqual" example to implement chai and it is assumed that you have already
        loaded mocha and the previous steps. 


    STEP 1: In gitbash, install the "chai" dependency in your project folder:
    =========================================================================
        •   Remember to save the chai package to the dev dependencies with --save-dev.
        ---------------------------------------------
        npm install chai --save-dev
        ---------------------------------------------


    STEP 2: Require chai in your test file:
    ========================================
        ----------------------------------------------
        const expect = require('chai');
        ----------------------------------------------


    STEP 3: Inside "it", add "expect" with the code to test:
    =========================================================
        •   Here we expect that if you test "isEqual" with the arguments 1 and 1, it will be true (i.e. to-be-true)
            since 1 === 1.
        ----------------------------------------------------------------
        
        describe('isEqual', function() {
            it('should give right answers for equal and unequal inputs', function(){
            expect(isEqual(1, 1)).to.be.true;
            });
          }
        );

        ----------------------------------------------------------------  

    STEP 4: Run "npm test" to view a successful test!
    ==================================================
        •   Remember that for this test, we have assigned the return value of the cll to "isEqual" to a variable and
            then chain ".to.be.true" (supplied by chai) to test whether or not tha answer generated by the subject
            under test conforms to expectations.  
        •   If the test conforms to expectations, it will PASS.
        •   If the test does NOT conform to expectations, it will FAIL.  
        -------------------------------------------------------------------------------------

        $ npm test

        > mocha-chai@1.0.0 test C:\Users\Admin\Desktop\mocha-chai
        > mocha --exit

        isEqual
            √ should give right answers for equal and unequal inputs

        1 passing (10ms)

        -------------------------------------------------------------------------------------
*/



/* 
10. What are expect-style assertions?
/////////////////////////////////////
    •   "Expect-style assertions" refer to the presence of the "expect" function where "expect" serves as the 
         starting point for chaining other keywords together.
    •   To see a concise list, see: https://www.chaijs.com/api/bdd/ or https://devhints.io/chai .           
*/


/* 
11. What should your test strategy be like?
///////////////////////////////////////////
    •   Test at a minimum normal case using a wide range of inputs.
    •   Then, think of important edge cases.
*/



/* 
12. What are integration tests?
///////////////////////////////
    •   An integration test targets the HTTP layer and tests (and documents) how clients will inteact with your API.
    •   For example, suppose you write API endpoints for user management (exposed at the /users endpoint).
    •   Once you make a GET request to /users, the list should include a list of all current users.
    •   If a POST request is made to /users (with the right values), the new user should be created and persisted.         
*/

/* 
13. How do you create a basic integration test for a GET Request?
/////////////////////////////////////////////////////////////////
    •   

*/







/* 
Additional resources
===================
https://samwize.com/2014/02/08/a-guide-to-mochas-describe-it-and-setup-hooks/  -- mocha summary
https://www.codecademy.com/articles/bapi-testing-intro  -- testing
https://devhints.io/chai  -- chai devhints
https://dev.to/mcarpenter/testing-w-mocha-and-chai-39b7 -- chai
https://stackabuse.com/testing-node-js-code-with-mocha-and-chai/  -- chai testing
https://www.codementor.io/olatundegaruba/integration-testing-supertest-mocha-chai-6zbh6sefz -- integration testing

*/
