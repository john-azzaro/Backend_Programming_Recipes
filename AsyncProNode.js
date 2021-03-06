"use strict";
// TOPIC /////////////////////////////////////////////////////////////////////////////////////////////////////
//     Asynchronous Programming in Node
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//      1. What is the difference between aysnchronous vs synchronous programming?
//      2. What patterns can you use to deal with asynchronous code and why would you need them?  
//      3. What is a callback and how do you use it? 
//      4. What is "callback hell" and how do you avoid it? 
//      5. What are promises and what are the different states of promises? 
//      6. How do you use promises? 
//      7. How do you replace a callback with a promise? 
//      8. How do you consume promises? 
//      9. How do you create settled promises?
//         + How do you create a promise that is already successfully resolved?
//         + How do you create a promise that is already rejected?
//     10. How do you run promises in parallel?
//         + What if one of the promises is rejected?
//         + What if you want to kick-off one promise while other promises are waiting to complete?
//     11. How do you return the first promise that completes?
//
// NOTES ////////////////////////////////////////////////////////////////////////////////////////////////////
//        1. Although asynchronous programming is covered in earlier outlines, this is extremely useful to 
//        know before getting into databases like mongoDB.     
//        2. Useful overview of information on asynchronous programming in Node from study, research, tutorials, 
//        mentor meetings, peer discussions, and good ole' fashioned curiosity.  I've put the document in 
//        Question and Answer format for improved readability.
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

                                                                o   NOTE: This program would be "synchronous" or "blocking" because  
                                                                    one line must finish executing before the next line can execute.


    •   "Asynchronous", or "non-blocking", architecture is where a single thread services multiple requests.
        o   For this example, we'll use a timeout, which will executes a function after a given amount of time.


                                console.log('Before')                                   <== 1. First "Before" is displayed in the console...

                                setTimeout(function() {                                 <== 2. Second, setTimeout "schedules" a function to be called after 2 seconds...       
                                    console.log('Reading a user from a database...')                            
                                }, 2000);   

                                console.log('After');                                   <== 3. Third, "After" is displayed in the console...
                                                                                        <== 4. Fourth, after 2 seconds, setTimeout executes "Reading a user from a database..."
                        
                    o   The program will execute as follows:

                                $ node index.js
                                Before
                                After
                                Reading a user from a database...


                    o   Since the setTime function is "asynchronous", when the function is called it will schedule 
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
    •   The three patterns that help you deal with asynchronous code are: 
            o   Callbacks, 
            o   Promises,
            o   Async/Await.

    •   You need these patterns because when you try to access something like a database, the result will not be 
        available immediately so you need an asynchronous solution.  
            o   It might take a few seconds to retrieve the information so you need something like
                these patterns to successfully retrieve the information.


==EXAMPLE==
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
                                undefined                            <== Note that "undefined" is NOT the user object { id: id, gitHubUsername: 'joe' }
                                After
                                Reading a user from a database...

                    o   The reason "undefined" is returned instead of the specific user in the getUser function is 
                        because the function within the setimeout function is executed 2 seconds after intial execution. 
                            o   In other words, the function will NOT be available at the time of calling getUser() to show in 
                                the console, so it will return as undefined.
                            o   To avoid this issue, we use three patterns to help deal with asynchrnous code: Callbacks, Promises, 
                                and Async/Await.
*/



/* 
3. What is a callback and how do you use it?
////////////////////////////////////////////
==SHORT ANSWER==
    •   A "callback" is a function that will be called when the result of an asynchronous operation is ready.
    

==PRACTICAL EXAMPLE== 
        STEP 1: To add a callback,  first add "callback" as a paramater to your function
        ================================================================================


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

        
        STEP 3: Call the function 
        ==========================
        •   Call the "getUser" with 2 arguments: First argument for the id and Second argument with a function that
            will be called with the argument "{ id: id, gitHubUsername: 'joe' }".
        

                                getUser(1, function(user) {          <== function takes "user" because we're passing a user object (i.e. { id: id, gitHubUsername: 'joe' })
                                    console.log('User', user)        <== so "user" is passed the parameter "user" that was passed from the getUser callback function.
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
4. What is "callback hell" and how do you avoid it?
//////////////////////////////////////////////////
==SHORT ANSWER==
    •  "Callback Hell" (or "Christmas tree problem" or "pyramid of doom") occurs when you have a nested structure of 
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

                                function getRepositories(user) {                        <== This function takes the user object...
                                   getRepositories(user.gitHubUsername, getCommits);    <== ... and then calls getRepositories and pass the reference of getCommits.
                                }
                                
                                function getCommits(repos) {             <== This function becomes "getCommits" that takes an array of repos...
                                   getCommits(repo, displayCommits);     <== ...and then call getCommits with the repo and pass the reference of displayCommits.
                                }

                                function displayCommits(commits) {         <== The innermost anonymous function becomes "displayCommits "which takes an array of commits... 
                                   console.log(commits);                   <== ... and displays them on the console.
                                } 
                                
                                
            o  The logical flow of the functions above go as follows:

                    1.   When you call "getUser", you will get the repositories for that user.
                    2.   Then, when you get the repositories for that user, you pass the user name (e.g. gitHubUserName) and 
                         then get the commits for that user (e.g. getCommits).
                    3.   THEN, when you get the commits for the user, you will display the commits with "displayCommits".
                    4.   FINALLY, you display the commits!
*/



/* 
5. What are promises and what are the different states or promises?
////////////////////////////////////////////////////////////////////
==SHORT ANSWER==
    •   A "promise" is an object that holds the eventual result of an asynchrnous operation.
    •   A promise can have 3 different states: 
            o   Pending.
            o   Resolved (i.e. fulfilled).
            o   Rejected 


==EXTENDED ANSWER==
    •   When an asynchronous operation completes, it can result in either another value or error.    
    •   A "promise" essentially promisses you to give you the result of an asynchronous operation. 


==ADDITIONAL QUESTIONS==
    What are the three states that a promise can be in?
    ===================================================
    •   A Promise can be in one of three states: pending, fulfilled, or rejected.  


                                                          [ Fulfilled ] => If async operation completed successfully.
                [ Pending ]  -------Asynchronous-------->      -or-
                                     Operation            [ Rejected ]  => If aysn operation has an error.


                o   PENDING 
                    o   When you create a promise object, it will be in the pending state.
                    o   It can then kick-off some asynchronous operation.

                o   RESOLVED (or FULFILLED)
                    o   When the result is ready, the promise can be "fulfilled" (or "resolved") which means the asynchronous operation
                        completed successfully, so you will have a value.

                o   REJECTED
                    o   Otherwise, if something went wrong with the execution of that asynchronous operation, then the promise will 
                        be in the "rejected" state.
*/



/* 
6. How do you create promises and how do you handle resolved and rejected promises?
/////////////////////////////////////////////////////////////////////////////////
==SHORT ANSWER==
    •   To create a promise, create a constructor function and store as a constant with asynchronous work 
        as well as the resolve or rejection logic.
    •   To use the promise, you call the constant (e.g. "p" as in the example below) and use "then" and "catch".
            o   Use ".then" for successful resolution. 
            o   Use ".catch" for the error.

       
==EXAMPLE===
    STEP 1: Create a promise object:
    ================================
    •   First, use a constructor function to create a new promise which takes an argument.
        o   That argument is a function with two parameters, resolve and reject.


                        const p = new Promise(function(resolve, reject) {
                            // start some async work like access a database, etc.
                        });


    STEP 2: When the async work is complete, your code will return a "resolve" function or a "reject" function.
    ============================================================================================================
    •   If there is a VALUE, then you want to return to the consumers of the promise. 
        o   So somewhere in the code we are going to consume the code because the promise object promises us that it will
            give us the result of an asynchronous operation.  
        o   So we need to send the result to the consumer of the promise by using either the resolve or reject parameters.  
        o   It is important to remember that the two paramters resolve and reject are functions, so we can call them and 
            pass a value.
        
        
                        const p = new Promise(function(resolve, reject) {
                            setTimeout(function() {                           <== timeOut function to simulate async work...
                                resolve(1);                                   <== after 2 seconds, this asynchronous operation will produce the value of 1.
                            }, 2000);                                
                            reject(new Error('message'));                     <== call the reject function and pass an error message as an error object (best practice).
                        });


    STEP 3.1: If the asynchronous operation completes successfully, the promise is resolved with ".then":
    ====================================================================================================
    •   The state of this promise changes from "pending" to "resolved".
    •   When calling "p", use the "then" method to get the result.
            o   For example:
    

                        const p = new Promise(function(resolve, reject) {
                            setTimeout(function() {
                                resolve(1);                                   <== if resolved, return 1.
                            }, 2000);                                                    
                        });    

                        p.then( function(result) {                            <== call p, and "then" with an anonymous function with "result" being the "1" passed in.
                            console.log('Result', result);
                        });


                o   In console, the result will be:

                        $ node promise.js
                        Result 1                                               <== successfully resolved!


    STEP 3.2: If the asynchronous operation does NOT complete, the promise is rejected using ".catch":
    =================================================================================================
    •   The state of this promise changes from "pending" to "rejected". 
            o   When calling "p", we chain ".then" for the result and, if there is an error, chain ".catch" to get the rejection.                 


                        const p = new Promise(function(resolve, reject) {
                            setTimeout(function() {
                                reject(new Error('message'));                 <== the async work here returns a rejection...
                            }, 2000);                                                    
                        });


                        p.then( function(result) {                 
                            console.log('Result', result);
                        }).catch(function(err) {                              <== the .catch method covers what happens in the event of a rejection.
                            console.log('Error', err.message);
                        });


            o   In console, the result will be:

                        $ node promise.js
                        Error message                                          <== rejected!          
*/



/* 
7. How do you replace a callback with a promise?
/////////////////////////////////////////////////
==SHORT ANSWER==
    •   To replace callbacks with a promise, you need to:
            1. Add the new logic to return a new Promise.    
            2. Relocate your asynchronous work inside that new promise
            3. Change the "callback" to "resolve" (and even add an error if you choose).  

==PRACTICAL EXAMPLE==
        STEP 0: Observe the orginal getUser() function that uses a callback:
        ====================================================================                    

                            function getUser(id, callback) {
                                setTimeout(function() {
                                    console.log('Reading a user from a database...');
                                    callback({ id: id, gitHubUsername: 'joe' });                       
                                }, 2000);
                            }

            
        STEP 1: First, the getUser() function should return a promise:
        ==============================================================

                            function getUser(id, callback) {
                                return new Promise(function(resolve, reject) {                 <== return a new promise with a function as an argument...
                                    setTimeout(function() {
                                        console.log('Reading a user from a database...');
                                        callback({ id: id, gitHubUsername: 'joe' });                       
                                    }, 2000);
                                });


        STEP 2: Replace the "callback" in the code body with "resolve" and remove "callback" from the function call signature.
        =======================================================================================================================

                            function getUser(id) {                                               <== remove "callback" from call signature.
                                return new Promise(function(resolve, reject) {
                                    setTimeout(function() {
                                        console.log('Reading a user from a database...');
                                        resolve({ id: id, gitHubUsername: 'joe' });              <== change "callback" to "resolve".          
                                    }, 2000);
                                });
*/



/* 
8. How do you consume promises?
///////////////////////////////
==SHORT ANSWER==
    •   To consume a promise, you simply call an initial function and chain the ".then" and ".catch" methods
        to account for the resolved or rejected instances when you run your asynchronous code.      
    
==PRACTICAL EXAMPLE==    
        o   When you used callback (and subsequently fell into callback hell), getUser looked like this:

                        getUser(1, (user) => {
                        getRepositories(user.gitHubUsername, (repos) => {
                            getCommits(repos[0], (commits) => {
                                 console.log(commits);
                                 })
                            })
                        });

        o   Now, we can consume promises by calling getUser and chaining .then methods together:

                        getUser(1)
                            .then (user => getRepositories(user.gitHubUsername))
                            .then (repos => getCommits(repos[0]))
                            .then(commits => console.log('Commits', commits))
                            .catch(err => console.log('Error', err.message));
*/



/* 
9. How do you create settled promises and why would you use one?
////////////////////////////////////////////////////////////////
==SHORT ANSWER==
    •   A "settled promise" is a promise that is already resovled.
    •   Settled promises are useful when writing unit tests.


    How do you create a promise that is already successfully resolved?
    ==================================================================
        •   To return a promise that is already resolved, we call the promise class with the "resolve" static method.
            o   Optionally, we can pass a value or something like a user object (i.e. {id:1} ).   
        •   Then, when you call p.then(), the "result" will be a console.log with the result. 

                            const p = Promise.resolve( { id:1 });     
                            p.then(result => console.log(result));    

                    o   In the console, you will see this returned:

                            $ node promise-api.js
                            { id: 1 }


    How do you create a promise that is already rejected?
    =====================================================
        •   As best practice, it is best to use a native error object (i.e. new Error()) because it will include the callstack.

                            const p = Promise.reject(new Error('This is a rejection message'));     
                            p.then(result => console.log(result));    

                    o   In the console, you will see this returned:

                            Error: This is a rejection message                                                    <== error message.
                                at Object.<anonymous> (c:\Users\Admin\Desktop\async-demo\promise-api.js:5:26)     <== callstack that comes with every error object in js
                                at Module._compile (module.js:652:30)
                                at Object.Module._extensions..js (module.js:663:10)
                                at Module.load (module.js:565:32)
                                at tryModuleLoad (module.js:505:12)
                                at Function.Module._load (module.js:497:3)
                                at Function.Module.runMain (module.js:693:10)
                                at startup (bootstrap_node.js:191:16)
                                at bootstrap_node.js:612:3
*/



/* 
10. How do you run promises in parallel?
/////////////////////////////////////////
==SHORT ANSWER==
   •   To run promises in parallel, you simply need to use Promise.all([ ]).
        o   Within the array add your promises you wish to do something when they both complete.

==EXAMPLE==

                        Promise.all([callApi1, callApi2]);    


==EXTENDED ANSWER==
    •   If you want a few asynchronous operations in parallel (i.e. at the same time), and when ALL of they complete you want 
        to do something.
            o   For example, you may have an app that calls wikipedia, youtube, and dictionary.com at the same time.
            o   When the result of all three of these asynchronous operations are ready, then you return something to the client. 
    •   Using the Promise class, you can use the method "all" to execute all the promise you want when they all complete.
    •   Inside the ".all" method, we use an array to gather our promises to execute when they are all complete.
    •   When the result of "Promise.all" is ready, it will be available as an ARRAY.
    •   Note that with this operation there is no real concurrency (no multithreading), we still have a single thread.
            o   The single thread is kicking off multiple asynchrnous operations at almost the same time with Promise.all()
   
==PRACTICAL EXAMPLE==

    STEP 0: Suppose you have two API's that, when they finish thier asynchronous operation, you want to do something:
    =================================================================================================================

                        const callApi1 = new Promise((resolve) => {      <== API 1 (note reject is removed bc we dont want to reject it)
                            setTimeout(function() {
                                console.log('Async operation 1...');
                                resolve(1);                              <== Promise is resovled with the value 2
                            }, 2000);
                        });

                        const callApi2 = new Promise((resolve) => {       <== API 2
                            setTimeout(function() {
                                console.log('Async operation 2...');
                                resolve(2);                               <== Promise is resovled with the value 2
                            }, 2000);
                        });


    STEP 1: When both asynchronous operations complete, you want to do something after by using Promise.all():
    ==========================================================================================================
        •   "all" is a method of the "Promise" class (instead of a promise object).
        •   Inside the "all" method you give it an array of promises. 
        •   The result of this method will be a new promise that will be resolved when all the promises in the array are resolved.           

                        Promise.all([callApi1, callApi2]);    

                o   In the console, you will see this result after 4 seconds:
                
                        $ node promise-api.js
                        Async operation 1...
                        Async operation 2...

                o   And if you wanted to display the results in the console:

                        Promise.all([callApi1, callApi2])            <== call Promise.all and pass an array promises...
                            .then(result => console.log(result));    <== then for the result, display results...
 
                o   Which in the console will show this:

                        Async operation 1...
                        Async operation 2...
                        [ 1, 2 ]                                     <== ... results displayed.


    OPTIONAL: What if one of the promises is rejected?
    ===================================================
        •   If any of our promises are rejected, the final promise that is returned from Promise.all is considered rejected.
    
                        const callApi1 = new Promise((resolve, reject) => {            <== add a "reject" parameter.
                            setTimeout(function() {
                                console.log('Async operation 1...');
                                reject(new Error('something failed...'));              <== if rejected, create new error object with message "something failed..."
                            }, 2000);
                        });

                        const callApi2 = new Promise((resolve) => {
                            setTimeout(function() {
                                console.log('Async operation 2...');
                                resolve(2);
                            }, 2000);
                        });

                        Promise.all([callApi1, callApi2])
                            .then(result => console.log(result))
                            .catch(err => console.log('Error', err.message));          <== .catch with error printing to console with message.


    OPTIONAL: How do you return the first promise that completes?
    =============================================================
        •   If you want to return the first promise that completes, use ".race" instead of ".all".
        •   The result of ".race" is NOT an array but the FIRST fulfilled promise.        
        
                        Promise.race([callApi1, callApi2])
                        .then(result => console.log(result))
                        .catch(error => console.log('Error', error.message));


            o   In the console, you should the result:

                        Async operation 1...            <== Note that BOTH asynchronous operations were started...
                        Async operation 2...
                        1                               <== However, the promise was resolved when the first asynchronous operation was completed.
                                                            Thus, the result is NOT an array but the FIRST fulfilled promise. 
*/




/* 
What is async and await?
////////////////////////
==SHORT ANSWER==
   •   "Async and await" helps you write asynchronous code like synchronous code.  
   •   In the Async and await approach, you simply add your code with "await" modifier to a function with an "async" modifier 
   
==EXAMPLE==

                        async function displayCommits() {                                    <== "async" modifer added to function
                            const user = await getUser(1);                                   <== "await" modfier added
                            const repos = await getRepositories(user.gitHubUsername);                                       
                            const commits = await getCommits(repos[0]);
                            console.log(commits);
                         }


==PRACTICAL EXAMPLE==

    STEP 0: In the Promise-based approach (which we will rewrite into the async and await approach), we have this:                    
    ==============================================================================================================
    

                        getUser(1)
                            .then (user => getRepositories(user.gitHubUsername))
                            .then (repos => getCommits(repos[0]))
                            .then(commits => console.log('Commits', commits))
                            .catch(err => console.log('Error', err.message));
                               


    STEP 1: For each function (i.e. getUser, getRepositories, etc), add "await" and store to a constant variable:
    =============================================================================================================
    •   When you call a function that returns a promise (i.e. getUser returns a new Promise object that resolves 
        an user object), you can "await" the result of that function and then call the result by calling the 
        variable you stored it to:
            o   So to clarify, for each of these objects below (i.e. user, repos, commits), since you are "await"-ing the 
                promises, they will be accessible via the stored constants.    
            o   Remember here that these follow one from the other so the order is IMPORTANT because one necessarily follow from
                the other. For example, you couldnt call getUser before getRepositories because you wouldnt know what user to
                get the repositories from.


                                const user = await getUser(1);                                 <== First, "await" the promise result of getUser (i.e. 1) and store it to the user object.
                                const repos = await getRepositories(user.gitHubUsername);      <== Second, "await" the promise result of getRepositories and store it to the repos object.                                   
                                const commits = await getCommits(repos[0]);                    <== Third, "await" the promise result of getCommits, in this case the first commit 0...
                                console.log(commits);                                          <== ... and then log to the console the commits object.



    STEP 2: Define a function that will cncapsulate your code and add the "async" modifier:
    ========================================================================================    
    •   When you use the "await" operator in a function, you need to declare a function with the "async" modifier.
    •   In the example below, after all the asynchronous operations, the eventual result will display the commits, thus "displayCommits".


                        Because you use "await" inside the function, declare the "async" modifier.
                                \
                                async function displayCommits() {
                                        const user = await getUser(1);  
                                        const repos = await getRepositories(user.gitHubUsername);                                       
                                        const commits = await getCommits(repos[0]);
                                        console.log(commits);
                                }


                o   When you call "displayCommits()", you will get the same result as the Promise-based appraoch                 

                                After
                                Reading a user from a database...
                                Calling GitHub API...
                                Calling GitHub API...
                                [ 'commit' ]



    STEP 3: Lastly, use the "try/catch" block for catching errors when using async/await:
    ====================================================================================
      
                        async function displayCommits() {
                            try {                                                            <== First, wrap the asynchronous code in a "try" block.
                                const user = await getUser(1);  
                                const repos = await getRepositories(user.gitHubUsername);                                       
                                const commits = await getCommits(repos[0]);
                                console.log(commits);
                            }
                            catch (err) {                                                     <== Second, wrap the error message in a "catch" block if anything goes wrong.
                                console.log('Error', err.message)
                            }    
                        }



==SECOND PRACTICAL EXAMPLE ==

                            async function notifyMember() {
                                try {
                                    const member = await getMember(1);
                                    console.log('member: ', member);
                                    if (member.isMember) {
                                        const movies = await getArticles();
                                        console.log('Top movies: ', movies);
                                        await sendEmail(member.email, movies);
                                        console.log('Email sent...');
                                    }
                                }
                                catch (err) {
                                    console.log('Error', err.message);
                                }
                            }

                            notifyMember();                                                      


                            function getMember(id) {
                                return new Promise((resolve, reject) => {
                                    setTimeout(() => {
                                    resolve({ 
                                        id: 1, 
                                        name: 'John Smith', 
                                        isMember: true, 
                                        email: 'johnsmith@gmail.com' 
                                    });
                                    }, 4000);  
                                });
                            }


                            function getArticles() {
                                return new Promise( (resolve, reject) => {
                                    setTimeout(() => {
                                    resolve(['How to be awesome', '10 ways to stay awesome']);
                                    }, 4000);
                                });
                            }

                            function sendEmail(email, articles) {
                                return new Promise( (resolve, reject) => {
                                    setTimeout(() => {
                                    resolve();
                                    }, 4000);
                                })
                            }

*/






/* 
http://callbackhell.com/ -- callbacks, callback hell
https://trello.com/c/5TzQwzMJ/80-what-is-asynchronous-programming-and-why-is-it-important-in-javascript  -- asynchronous programming
*/