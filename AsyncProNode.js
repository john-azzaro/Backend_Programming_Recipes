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
    •   "Synchronous", or "blocking", where a program will process one thing first and then process a second.
        o   For example:


                        console.log('Before');       <==  When this first line executes, the program in "blocking" the second line which has to wait.
                        console.log('After');        <==  This line can execute only AFTER the first line executes.

                        o   This program would be "synchronous" or "blocking" because one line must finish executing
                            before the next line can execute.


    •   "Asynchronous", or "non-blocking", is where a program 
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

