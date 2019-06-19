"use strict";
// TOPIC /////////////////////////////////////////////////////////////////////////////////////////////////////
//     Asynchronous Programming in Node
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//      1. 
//      
//
// NOTES ////////////////////////////////////////////////////////////////////////////////////////////////////
//     1. Useful overview of information on asynchronous programming in Node from study, research, tutorials, 
//        mentor meetings, peer discussions, and good ole' fashioned curiosity.  I've put the document in 
//        Question and Answer format for improved readability.
// 
//////////////////////////////////////////////////////////////////////////////////////////////////////////////


/* 
What is the difference between aysnchronous vs synchronous programming?
///////////////////////////////////////////////////////////////////////
    •   "Synchronous", or "blocking", programming, where a program will process one thing first and then process a second.
        o   For example:

                        console.log('Before');       <==  When this first line executes, the program in "blocking" the second line which has to wait.
                        console.log('After');        <==  This line can execute only AFTER the first line executes.

                        o   This program would be "synchronous" or "blocking" because one line must finish executing
                            before the next line can execute.


    •   "Asynchronous", or "non-blocking" programming, is where a program 

                        setTimeout(function() {

                        }, 2000);
*/

console.log('Before');