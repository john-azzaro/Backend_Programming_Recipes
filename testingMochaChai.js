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
*/

/* 
3. What is Mocha?
/////////////////
    •   Mocha is a test framework.
    •   Mocha provides a command line argument that can be run (e.g. mocha) that will look for an execute tests.
    •   Mocha provides syntax for describing features and specifications..
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
How does Mocha work?
/////////////////////
    •   
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


    STEP 2: Have (or create) a JavaScript file for code you want to test:
    =====================================================================.
        •   In the case of this example, we'll create a file called "isEqual.js" with the following code:
        ---------------------------------------------------
        module.exports = function(a,b) {return a === b}
        ---------------------------------------------------


    STEP 3: Create a "test" folder:
    ===============================
        •   





    
*/
