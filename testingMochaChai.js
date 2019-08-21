'use strict';
// TOPIC /////////////////////////////////////////////////////////////////////////////////////////////////////
//     Server-Side Testing with Mocha and Chai
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//      1. What is a software test?
//      2. Why do you run software tests?
//      3.
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
What is a unit test?
////////////////////
    •   Unit testing means testing the bahavior of code in small, independant units.
    •   "Units" are designed to be the smallest of meaningful chuncks of independently testable code.
    •   This is in comparison to "integration testing", where modules are are tested in a group.



*/


/* 
3. What is Mocha?
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
What is a test suite and test case?
////////////////////////////////////
    •   A "test suite" is a collection of tests all realting to a single functionality or behavior.
    •   A "test case" is a signle description about the desired behavior of a code that either passes or fails.
    •   Test suites are bached underneath "describe" keywords.
    •   Test cases are batched underneath "it" keywords.
    
*/

/* 
How do you install Mocha?
//////////////////////////
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
How do you make a basic Mocha test?
///////////////////////////////////

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
        •   "describe" is used to decalre the entity to be tested, and a callback function sets up the test.
        •   "describe" is for grouping, which can be used to nest as deep as you need.  

        grouping for test     file to test       callback function 
                        \          |             /
                        describe('isEqual', function() {
                            ...
                        });

        ------------------------------------------------------
        
        describe('isEqual', function() {
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
        });

        ------------------------------------------------------  


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
What is chai?
//////////////
    •   chai



*/






/* 
Additional resources
===================
https://samwize.com/2014/02/08/a-guide-to-mochas-describe-it-and-setup-hooks/  -- mocha summary
https://www.codecademy.com/articles/bapi-testing-intro  -- testing
*/
