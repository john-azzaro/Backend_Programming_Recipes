"use strict";
// TOPIC /////////////////////////////////////////////////////////////////////////////////////////////////////
//     Node Modules
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//      1. What are global objects in JavaScript?   
//      2. What are global objects in Node?
//         + Are variables and functions added or accessable to the global object?
//      3. What is a module?
//      4. How do you create a module?
//      5. What is the require() function?
//      6. How do you load a module?
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
    •   On the client side of JavaScript such as the browser, when you declare a function or a variable it is
         added to the global scope and accessible via the "window" object (i.e. window.console.log()).

==EXAMPLE==
        o   console.log() is a global object.
        o   window.console.log() is a global object.

==EXTENDED ANSWER==
    console.log and window.console.log
    ===================================
    •   A global object is part of the global scope which means we can access it anywhere in our code. 
    •   "console.log" is such a global object.
    
                console.log()  
        
    •   In JavaScript, we can use the "window" prefix that represents global scope. 

                window.console.log().

        o   In browsers, there is a "window" object that represents global scope.      
        o   All l the variables and functions defined globally can be accessed by the window object:
        o   However, the JavaScript engine will prefix this statement with 'window' because that is where is 
            object is defined, 
                

    Client and Server side objects available in node
    ================================================            
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
////////////////////////////////////
==SHORT ANSWER==
    •   A global object (using the "global" prefix) in node is much like the global object in JavaScript 
        except we use "global" instead of "window".

==EXTENDED ANSWER==
    •   With the "global" object, we can access the same objects in JavaScript as we can in Node.

            setTimeout()     ==>   global.setTimeout()
            clearTimeOut()   ==>   global.clearTimeout()
            setInterval()    ==>   global.setInterval()
            clearInterval()  ==>   global.clearInterval()

    Are variables and functions added or accessable to the global object?
    ====================================================================
    •   However, variables and function defined in a .js file are NOT added to the global object but only 
        scoped to the local file (i.e. .js file) because of Nodes modular system.  
*/



/*
3. What is a module?
/////////////////////
==SHORT ANSWER==
    •   In Node, every file (i.e. index.js, etc.) is a "module" and variables and functions defined in each of 
        those modules are scoped to those files.

==EXAMPLE==
    •   Think of a book divided into chapters.  Modules are individual "chapters of a book" that can be edited without
        having to edit other chapters when they are updated.

==EXTENDED ANSWER==
    •   Modules are self-contained with distinct functionality which allows them to be shuffled, removed, or added when
        necessary without disrupting the system as a whole.
    •   Modules are self-contained, meaning that the code it can be updated
    •   Because we might have multiple files of JavaScript code, accessing function and variables across those multiple files 
        might result in having a function or variable over-ridden on one page or another and causing bugs in our code.  So to 
        avoid this problem with global scope, we use modules which are small building blocks where we define variables and 
        functions so that names will not conflict.
    •   Every file in a Node application is a "module".
    •   A module can export a single function or an object.
    •   The variables and function in those file "modules" are private, meaning that they are scoped to that particular file.
    •   To use a variable or functions defined in a module that is OUTSIDE that module, then you need to explicitly export it
        and make it public.
    •   Every Node application has at least one file (i.e. module) which is called the "main module"
*/



/* 
4. What is a module JSON object and what does it look like?
////////////////////////////////////////////////////////////
    •   Since all files are modules, when you call "module" you will get a JSON object with properties with special
        signifigance, some of which will allow you to "export" parts of that module elsewhere in your code.

    Calling module and observing the module JSON object
    ===================================================
    1. In your app.js "main" module, write this simple console.log:

            console.log(module);

        •   Note that module in the example above is NOT a global object
        
    2. In Gitbash, open app.js using node:
    
            $ node app.js

    3. What is returned is a JSON object with key/value pairs:

            Module {
            id: '.',                                                           // Unique identifer
            exports: {},                                                       // modules in the file that can be "exported" (here empty bc no modudles to export yet)
            parent: null,                                                      //
            filename: 'C:\\Users\\Admin\\Desktop\\first-app\\app.js',          // Complete path to the file
            loaded: false,                                                     // boolean which determines if the module is loaded or not
            children: [],                                                      //
            paths:                                                             // path is the direct paths it takes to get to your module.
            [ 'C:\\Users\\Admin\\Desktop\\first-app\\node_modules',
                'C:\\Users\\Admin\\Desktop\\node_modules',
                'C:\\Users\\Admin\\node_modules',
                'C:\\Users\\node_modules',
                'C:\\node_modules' ] }

*/



/* 
4. How do you create a module?
//////////////////////////////
==SHORT ANSWER==
    •   To create a module, you simply need to create a file, write the code you want to use, and then "export"
        that variable or function using "module.export" with the name of the module you want to call it, 
        and of course assigning as a value the variable or function (e.g module.exports.myMod = myMod). 

                    function myMod() {
                        // code for module              <== Function you want to export.
                    }

                    module.exports.myMod = myMod;       <== assigning the function you want to export in the module.


==PRACTICAL EXAMPLE==

    STEP 1: Create a new module (i.e. file) in your project folder named "logger.js." 
    ==================================================================================          
        •   This module will be for log-in messages to be reused in different parts of the application
            or even other applications.


    STEP 2: In your logger.js module, write the code you want to be able to reuse.
    ===============================================================================
        •   For this part, imagine that we want to use a remote login service for logging messages.  So we 
            are using a service that provides a URL and we can send an HTTP request to that URL to log messages
            in the cloud.
        

                    let url = 'http://mylogger.io/log';       // sends an HTTP request to this endpoint

                    function log(message) {                   // function that takes a message and send HTTP request
                        // Send HTTP request
                        console.log(message);
                    }


        •   Remember that the variable and function above are PRIVATE, and they CANNOT be accessed beyond the
            scope of this document. How we make them public is our next step!
        

    STEP 3: Add your method using dot notation to the exports object to make the code public and visible to the outside
    ====================================================================================================================
        •   Before going any further, remember that when we typed in $node app.js in Gitbash we got a "Module" JSON
            object in return.  It looks like this:
 
            
                    Module {
                        id: '.',                                                           
                        exports: {},                                // EMPTY EXPORTS OBJECT                           
                        parent: null,                                                      
                        filename: 'C:\\Users\\Admin\\Desktop\\first-app\\app.js',          
                        loaded: false,                                                     
                        children: [],                                                      
                        paths:                                                             
                        [ 'C:\\Users\\Admin\\Desktop\\first-app\\node_modules',
                            'C:\\Users\\Admin\\Desktop\\node_modules',
                            'C:\\Users\\Admin\\node_modules',
                            'C:\\Users\\node_modules',
                            'C:\\node_modules' ] }

        
        •   Look at the "exports" property and you will see an empty object. 
        •   Our goal is to add to this object so it can be exported from the module and available outside the module.

        •   TO EXPORT, we simply add it as a method to the "exports" object in the Module JSON object with dot-notation and
            set it to the log function above.

                        
                                    ... add the log method to the exports property...    
                                   /
                        module.exports.log = log;
                           /                   \
        In the file module...                   ... and set the value to the "log" function!


        •   So the logger module will look something like this when it is completed:


                    let url = 'http://mylogger.io/log';       

                    function log(message) {                  
                        // Send HTTP request
                        console.log(message);
                    }

                    module.exports.log  = log;                       // here we add a method "log" to the "exports" object and
                                                                        assign it the value of the function "log" above.
        
        ADDITIONAL NOTES
        •   You can apply this way of exporting a module to anything else in the module (i.e. file).                   
                    module.exports.url = url;
        
        •   You can even rename the module to something else:
                    module.export.endPointUrl = url;


        OPTIONAL: What do you do if you just want to export a single function
        =======================================================================
        •   Since using the "exports" property would be useful if you had multiple methods or properties.
        •   If you only have a single method, you would simply need to omit the "log" so it is just a function to export.
        •   When you do this (following the example), logger (from Question 6 in app.js) becomes a function we can access directly.

                    module.exports = log;

                o   and in app.js (building on Question 6 topic):

                    logger('Welcome!')    ==>  Welcome!

                    
        OPTIONAL: Check to see if you were successful in adding your method to the exports function
        =====================================================================================================

        •   And when you console.log(module) in logger.js, you will see the "log" function in the "exports" property.

                    Module {
                        id: '.',
                        exports: { log: [Function: log] },              // Here you see it in the exports property.
                        parent: null,
                        filename: 'C:\\Users\\Admin\\Desktop\\first-app\\logger.js', 
                        loaded: false,
                        children: [],
                        paths:
                        [ 'C:\\Users\\Admin\\Desktop\\first-app\\node_modules',
                            'C:\\Users\\Admin\\Desktop\\node_modules',
                            'C:\\Users\\Admin\\node_modules',
                            'C:\\Users\\node_modules',
                            'C:\\node_modules' ] }
*/



/* 
5. What is the require() function?
///////////////////////////////////
==SHORT ANSWER==
    •   In order to access a module in another file, you need to use the require() function to return the object 
        exported from that file.

==EXAMPLE==
    •   For example, suppose you created a "greeting" module in another file and you want to use it in your primary
        module file.  You simply need to "load" that module to the current file using the require function and pass 
        as an argument the location of that module.  

==EXTENDED ANSWERS==
    •   The require function returns the object that is exported from a target module
    •   The require() function is used to load a module.
    •   The require() function is only in node, so it is not in browsers.
    •   The require() function takes only one argument, which is the name (i.e. path) of the module we want to load.

                    require('');

    •   However, we need to indicate what path to take to access the module and since the app.js and logger.js are in the 
        same folder, we use ./ and then the name of the module.  Note that "logger.js" can be simply "logger" because node
        assumes it is a JavaScript file.

                    require('./logger.js')


        OPTIONAL: What if the module is NOT in the same folder?
        =======================================================
            o   If the module is a subfolder, you just need to include that subfolder in the path:
            
                            require('./subFolder/logger.js')
            
            o   If the module is in a PARENT folder, you add another period to the path at the beginning:

                            require('../logger.js');   
*/


/* 
6. How do you load a module?
////////////////////////////
==SHORT ANSWER==
    •   To load a module, you create a "const" variable and call the require function as a value.
        o   Note: You want to use "const" for your variable because you do not want to accidently over-ride it.


==PRACTICAL EXAMPLE==
    
    STEP 1: First, load your module using the require() function:
                    
                    require('./logger.js')

    STEP 2: Second, assign the require function as a value to a constant variable:

                    const logger = require('./logger.js')

    STEP 3: Call the exported module with the module name and the property!
   
                    logger.log('Welcome!');
                     
             •   And Finally in Gitbash, when you input node app.js you will get this:

                    Welcome!


    OPTIONAL: How do you verify that you loaded a module?
    =====================================================                    
    •   In Gitbash, you will see that when you input node app.js, you get an object with a single 
        method called log with a function:

                node app.js
                { log: [Function: log] }
*/



/* 
What is a Module wrapper function?
///////////////////////////////////
==SHORT ANSWER==
    •   A module wrapper is a function that "wraps" around each module (i.e. file) to keep the code inside "private".
    •   Node does NOT execute code in a file directly, but rather 

==EXTENDED ANSWER==
    •   Since modules are "private", meaning that they are only scoped to that module and not visibile anywhere
        else in the code.
    •   Node is able to keep those modules private by "wrapping" those modules (i.e. files) in a function.

    How do you find evidence of the module wrapper?
    ===============================================

    STEP 1: Create an error in your node application, like this: 
    
                let x =;

    STEP 2: In node, you will receive a syntax error like this:

            C:\Users\Admin\Desktop\first-app\logger.js:1
            (function (exports, require, module, __filename, __dirname) { let x=;         
                                                                                ^
            SyntaxError: Unexpected token ;
                at createScript (vm.js:80:10)
                at Object.runInThisContext (vm.js:139:10)
                at Module._compile (module.js:616:28)
                at Object.Module._extensions..js (module.js:663:10)
                at Module.load (module.js:565:32)
                at tryModuleLoad (module.js:505:12)
                at Function.Module._load (module.js:497:3)
                at Module.require (module.js:596:17)
                at require (internal/module.js:11:18)
                at Object.<anonymous> (C:\Users\Admin\Desktop\first-app\app.js:9:16)

    STEP 3: Look at the second line in the error:

            (function (exports, require, module, __filename, __dirname) { let x=;         
                                                                                ^
        •   This function with parameters is our MODULE WRAPPER.
        •   




*/































/* 
https://medium.com/@mattburgess/beyond-console-log-2400fdf4a9d8 -- console
https://www.geeksforgeeks.org/javascript-cleartimeout-clearinterval-method/ -- clearTimeout explaination
https://www.freecodecamp.org/news/javascript-modules-a-beginner-s-guide-783f7d7a5fcc/ -- modules explained
https://www.coreycleary.me/should-you-use-a-logging-framework-or-console-log-in-node/ -- 
*/



