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
    •   In the client side of JavaScript that is run inside a browser, when you declare a function or a variable
        it is added to the global scope and accessible via the "window" object (i.e. window.greeting()).

==EXAMPLE==
        o   console.log() is a global object.
        o   window.console.log() is a global object.

==EXTENDED ANSWER==
    •   A global object is part of the global scope which means we can access it anywhere in our code.  
        In JavaScript, we can use the "window" prefix that represents global scope. 

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
3. What are modules?
////////////////////
    •   Module is a core concept of node in which 

    •   Because we might have multiple files of JavaScript code, accessing function and variables across those multiple files 
        might result in having a function or variable over-ridden on one page or another and causing bugs in our code.  So to 
        avoid this problem with global scope, we use modules which are small building blocks where we define variables and 
        functions so that names will not conflict.
    •   Every file in a Node application is a "module".
    •   The variables and function in those file "modules" are private, meaning that they are scoped to that particular file.
    •   To use a variable or functions defined in a module that is OUTSIDE that module, then you need to explicitly export it
        and make it public.

==EXAMPLE==











*/































/* 
https://medium.com/@mattburgess/beyond-console-log-2400fdf4a9d8 -- console
https://www.geeksforgeeks.org/javascript-cleartimeout-clearinterval-method/ -- clearTimeout explaination
*/



