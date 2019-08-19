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
    •   Mocha is a test framwork.
    •   Mocha provides a command line argument that can be run (e.g. mocha) that will look for an execute tests.
    •   Mocha provides syntax for describing features and specifications..
*/
