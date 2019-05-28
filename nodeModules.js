"use strict";
// TOPIC /////////////////////////////////////////////////////////////////////////////////////////////////////
//     Node Modules
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//      1. What are global objects in JavaScript?   
//      2. What are global objects in Node?
//         + Are variables and functions added or accessable to the global object?
//
//
//
//
// NOTES ////////////////////////////////////////////////////////////////////////////////////////////////////
//     1. Useful overview of information on Node Modules from study, research, tutorials, mentor meetings,
//        peer discussions, and good ole' fashioned curiosity.  I've put the document in Question and
//        Answer format for improved readability.
//     3. Download node.js: https://nodejs.org/en/
//     2. Documentation for Node.js: https://nodejs.org/en/docs/
// 
//////////////////////////////////////////////////////////////////////////////////////////////////////////////


/* 
1. What are global objects in JavaScript?
/////////////////////////////////////////
==SHORT ANSWER
    •   A global object is part of the global scope which means we can access it anywhere in our code.  
        In JavaScript, we can use the "window" prefix that represents global scope. 

==EXAMPLE==
        o   For example, console.log(); is a global object

==EXTENDED ANSWER==

    •   In browsers, there is a "window" object that represents global scope.
        o   So all the variables and functions defined globally can be accessed by the window object
                    
                console.log()  

        o   However, the JavaScript engine will prefix this statement with 'window' because that is where is 
            object is defined, 
                
                window.console.log().

    •   As part of the window object, there are other objects that are available in node as well which can be 
        used on both client and server side, such as:

            o   setTimeout() -- This calls a function after a delay like 1 or 2 seconds.
            o   clearTimeOut() -- This clears a timeout which has been set before a setTimeout function that comes before it.
            o   setInterval() -- Same as setTImeout, but repeatedly calls a function after a given delay.
            o   clearInterval() -- Used to stop a function from being called repeatedly.

    •   And since these belong to the window object:

            setTimeout()     ==>   window.setTimeout()
            clearTimeOut()   ==>   window.clearTimeout()
            setInterval()    ==>   window.setInterval()
            clearInterval()  ==>   window.clearInterval()

    •   Variables are also available via the window object:

            var greeting = "hello!";   ==>   window.greeting;
*/

/*
2. What are global objects in Node?
///////////////////////////////////
    •   A global object in node is much like the global object in JavaScript except we use "global" instead of "window".

    •   With the "global" object, we can access the same objects in JavaScript as we can in Node.

            setTimeout()     ==>   global.setTimeout()
            clearTimeOut()   ==>   global.clearTimeout()
            setInterval()    ==>   global.setInterval()
            clearInterval()  ==>   global.clearInterval()

    Are variables and function added or accessable to the global object?
    ====================================================================
    •   However, variables and function defined in a .js file are NOT added to the global object but only scoped to the
        local file (i.e. .js file) because of Nodes modular system.
    
  

*/































/* 
https://medium.com/@mattburgess/beyond-console-log-2400fdf4a9d8 -- console
https://www.geeksforgeeks.org/javascript-cleartimeout-clearinterval-method/ -- clearTimeout explaination
*/



