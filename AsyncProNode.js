"use strict";
// TOPIC /////////////////////////////////////////////////////////////////////////////////////////////////////
//     Asynchronous Programming in Node
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//      1. What is the difference between aysnchronous vs synchronous programming?
//      
//
// NOTES ////////////////////////////////////////////////////////////////////////////////////////////////////
//        1. Although asynchronous programming is covered in earlier outlines, this is extremely useful to 
//        know before getting into databases like mongoDB.     
//        2. Useful overview of information on asynchronous programming in Node from study, research, tutorials, 
//        mentor meetings, peer discussions, and good ole' fashioned curiosity.  I've put the document in 
//        Question and Answer format for improved readability.
//
// 
//////////////////////////////////////////////////////////////////////////////////////////////////////////////


/* 
1. What is the difference between aysnchronous vs synchronous programming?
//////////////////////////////////////////////////////////////////////////
==SHORT ANSWER==
    •   Node has an Asynchronous, "non-blocking" architecture that uses a single thread to service multiple requests.
    •   A Synchronous "blocking" architecture must service each request before movingon to the next one making it
        inefficient compared to asynchronous arhcitecture.

==EXTENDED ANSWER==
    •   "Synchronous", or "blocking", architecture is where a program will process one thing first and then process a second.
        o   For example:


                        console.log('Before');       <==  When this first line executes, the program in "blocking" the second line which has to wait.
                        console.log('After');        <==  This line can execute only AFTER the first line executes.

                        o   This program would be "synchronous" or "blocking" because one line must finish executing
                            before the next line can execute.


    •   "Asynchronous", or "non-blocking", architecture is where a single thread services multiple requests.
        o   For this example, we'll use a timeout, which will executes a function after a given amount of time.


                        console.log('Before')

                        setTimeout(function() {                                    
                            console.log('Reading a user from a database...')                           
                        }, 2000);

                        console.log('After');                           
                                                
                        
        o   The program will execute as follows:

                        1. First "Before" is displayed in the console...
                        2. Second, setTimeout "schedules" a function to be called after 2 seconds...
                        3. Third, "After" is displayed in the console...
                        4. Fourth, after 2 seconds, the setTimeout executes displaying "Reading a user from a database..."

                                $ node index.js
                                Before
                                After
                                Reading a user from a database...


        o   What happens is that since the setTime function is "asynchronous", when the function is called it will schedule
            a task to be performed in the future, specficially 2 seconds in the future.
        o   The program does NOT wait or BLOCK the rest of the program from executing.       
        o   HOWEVER, asynchronous does NOT mean "concurrent" or "multithreaded"... the example above is a single thread.
        o   Asynchronous functionality is useful to know when you are working with Node programming when you are dealing with
            disk or network access.
*/



/* 
2. What patterns can you use to deal with asynchronous code and why would you need them?
/////////////////////////////////////////////////////////////////////////////////////
==SHORT ANSWER==
    •   The three patterns that help you deal with asynchronous code are: Callbacks, Promises, and Async/Await.
    •   Why would you need these patterns? When you try to access something like a database, the result will not be 
        available immediately.  It might take a few seconds to retrieve the information so you need something like
        these patterns to successfully retrieve the information.

==EXTENDED ANSWER==
    •   Take for example the following program which will unsuccessfully retrieve the information within the
        getUser function because of the extended execution of the setTimeout function within it.


                                console.log('Before')
                                const user = getUser(1);
                                console.log(user);
                                console.log('After');

                                function getUser(id) {
                                    setTimeout(function() {
                                        console.log('Reading a user from a database...');
                                        return { id: id, gitHubUsername: 'joe' }   ;                       
                                    }, 2000);
                                }

                        
        o   The program above will display the following:                        

                                Before
                                undefined                          <== Note that "undefined" is NOT the user object { id: id, gitHubUsername: 'joe' }
                                After
                                Reading a user from a database...

        o   The reason "undefined" is returned instead of the specific user in the getUser function is because the 
            function within the setimeout function is executed 2 seconds after intial execution. 
        o   In other words, the function will NOT be available at the time of calling getUser() to show in the console, so it will
            return as undefined.
        o   To avoid this issue, we use three patterns to help deal with asynchrnous code: Callbacks, Promises, and Async/Await.
*/

/* 
What is a callback and how do you use it?
/////////////////////////////////////////
==SHORT ANSWER==
    •   A "callback" is a function that will be called when the result of an asynchronous operation is ready.
    
==EXTENDED ANSWER==
    •                               
     
    How do you add a callback to a function?
    ========================================
    •   Note: for this example, 

        STEP 1: Add "callback" as a paramater to your function
        ======================================================

                                function getUser(id, callback) {                         <== "callback" added to function parameters.           
                                    setTimeout(function() {
                                        console.log('Reading a user from a database...');
                                        return { id: id, gitHubUsername: 'joe' }   ;                       
                                    }, 2000);
                                }

        STEP 2: Add "callback()" with the code you want to return (e.g. user object):
        ==============================================================================

                                function getUser(id, callback) {                                   
                                    setTimeout(function() {
                                        console.log('Reading a user from a database...');
                                        callback({ id: id, gitHubUsername: 'joe' });         <== callback function with user object inside it.                      
                                    }, 2000);
                                }

        
        STEP 3: Call the "getUser" with 2 arguments: First argument for the id and Second argument with a function that
                will be called with the argument "{ id: id, gitHubUsername: 'joe' }"
        ================================================================================================================

                                                takes "user" because we're passing a user object (i.e. { id: id, gitHubUsername: 'joe' })
                                                    \
                                getUser(1, function(user) {
                                    console.log('User', user)   <== so "user" is passed the parameter "user" that was passed from the getUser callback function.
                                });    

                o   The return of this program would be:

                               $ node index.js
                                Before
                                After
                                Reading a user from a database...
                                User { id: 1, gitHubUsername: 'joe' }     <== now the console prints the user object!


        OPTIONAL: Suppose you wanted add another layer of complexity by getting the repositories of this user:
        ======================================================================================================
 
                                function getUser(id, callback) {
                                    setTimeout(function() {
                                        console.log('Reading a user from a database...');
                                        callback({ id: id, gitHubUsername: 'joe' });                       
                                    }, 2000);
                                }

                                function getRepositories(username, callback) {              <== first, we add another function to get the repos for the user...
                                    setTimeout(function() {                                 <== then, the setTimout to simulate delay...
                                        console.log('Calling Github API...')                <== with message logged on execution...
                                        callback(['repo1', 'repo2', 'repo3']);              <== and the callback function with the repos of the user!
                                    }, 2000);
                                }

                                getUser(1, function(user) {                                  <== Then when the getUser() function is called...
                                    console.log('User', user);
                                    getRepositories(user.gitHubUsername, function(repos) {   <== we call getRepositories with the user name and the callback function.
                                        console.log('Repos', repos );
                                    });
                                });  
                    
                o   The return of this program would be:

                                $ node index.js
                                Before
                                After
                                Reading a user from a database...
                                User { id: 1, gitHubUsername: 'joe' }
                                Calling Github API...
                                Repos [ 'repo1', 'repo2', 'repo3' ]
*/


/* 
What is Callback Hell and how do you avoid it?
///////////////////////////////////////////////
==SHORT ANSWER==
    •  "Callback Hell" or "Christmas tree problem" or "pyramid of doom" occurs when you have a nested structure of 
        callbacks one after the other and is usually the result of poor coding practices.
    •   To avoid Callback hell, you need to replace the anonymous functions with named functions.

==EXAMPLE==
    •   An example of "Callback Hell" would look something like this in asynchronous code: 
            o   For example:                                  

                                getUser(1, function(user) {                                 
                                    getRepositories(user.gitHubUsername, function(repos) {        <== first nested callback.
                                        getCommits(repo, function(commits) {                      <== second nexted callback, etc.
                                            console.log(commits); 
                                        });
                                    });
                                }); 
     
    •   To avoid the nested "callback hell" structure, you need to replace the anonymous function with named functions.
            o   For example:

                                getUser(1, getRepositories);                <== when you call getUser, you have the user (1) and then get repositories for that user (i.e. getRepositories)...

                                function getRepositories(user) {                      <== This function takes the user object...
                                   getRepositories(user.gitHubUsername, getCommits);  <== ... and then calls getRepositories and pass the reference of getCommits.
                                }
                                
                                function getCommits(repos) {             <== This function becomes "getCommits" that takes an array of repos...
                                   getCommits(repo, displayCommits);     <== ...and then call getCommits with the repo and pass the reference of displayCommits.
                                }

                                function displayCommits(commits) {         <== The innermost anonymous function becomes "displayCommits "which takes an array of commits... 
                                   console.log(commits);                   <== ... and displays them on the console.
                                } 
                                
            o  So the logical flow of the functions above go as follows:

                    1.   When you call "getUser", you will get the repositories for that user.
                    2.   Then, when you get the repositories for that user, you pass the user name (e.g. gitHubUserName) and 
                         then get the commits for that user (e.g. getCommits).
                    3.   THEN, when you get the commits for the user, you will display the commits with "displayCommits".
                    4.   FINALLY, you display the commits!
*/

/* 
What are Promises and how do they work?
///////////////////////////////////////
    •   A "promise" is an object that holds the eventual result of an asynchrnous operation.
    •   When an asynchrnous operation completes, it can result in either another value or error.    
    •   A "promise" essentially promisses you to give you the result of an asynchronous operation. 

    What are the three states that a promise can be in?
    ===================================================
    •   A Promise can be in one of three states: pending, .  


                                                                            [ Fulfilled ]
                              [ Pending ] ----Asynchronous Operation ---->      -or-
                                                                            [ Rejected ]


            o   Pending 
                o   When you create a promise object, it will be in the pending state.
                o   It can then kick-off some asynchronous operation.

            o   Fulfilled (or "resolved")
                o   When the result is ready, the promise can be "fulfilled" (or "resolved") which means the asynchronous operation
                    completed successfully, so you will have a value.

            o   Rejected
                o   Otherwise, if something went wrong with the execution of that asynchronous operation, then the promise will 
                    be in the "rejected" state.
*/















/* 
http://callbackhell.com/ -- callbacks, callback hell
*/