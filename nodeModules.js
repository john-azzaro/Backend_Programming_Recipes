"use strict";
// TOPIC /////////////////////////////////////////////////////////////////////////////////////////////////////
//     Node Modules
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//      1. What are global objects in JavaScript?
//         + What is the difference between console.log and window.console.log?
//         + What are some shared client and server side objects available in node?   
//      2. What are global objects in Node?
//         + Are variables and functions accessible globally?
//      3. What is a module?
//      4. What is a module JSON object?
//         + What does a module JSON look like?
//      4. How do you create a module?
//         + Can you export a single function?
//         + Can you check the module to verify that you added your method to the exports function?
//      5. What is the require() function?
//         + Can you access a module if it is NOT in the same folder?
//      6. How do you load a module?
//      7. What is a Module wrapper function?
//         + What does a module wrapper function look like?
//         + What are the arguments of a module wrapper function?
//         + How do you check module wrapper arguments?
//      8. What are built-in modules in Node?
//      9. What is a path module?
//         + How do you access the path module?
//      10. What is an OS module?
//         + How do you access the OS module?
//         + How do you access OS module methods?
//      11. What is a File system module?
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


==ADDITIONAL EXAMPLES==

    What is the difference between console.log and window.console.log?
    ===================================================================
    •   Console.log and window.console.log are virtually the same, only window is an added prefix when run.

    •   A global object is part of the global scope which means we can access it anywhere in our code. 
    •   "console.log" is such a global object.
    
                console.log()  
        
    •   In JavaScript, we can use the "window" prefix that represents global scope. 

                window.console.log().

        o   In browsers, there is a "window" object that represents global scope.      
        o   All l the variables and functions defined globally can be accessed by the window object:
        o   However, the JavaScript engine will prefix this statement with 'window' because that is where is 
            object is defined, 
                

    What are some shared client and server side objects available in node?
    =======================================================================           
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

    Are variables and functions accessible globally?
    ================================================
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
4. What is a module JSON object?
////////////////////////////////
    •   Since all files are modules, when you call "module" you will get a JSON object with properties with special
        signifigance, some of which will allow you to "export" parts of that module elsewhere in your code.

    What does a module JSON look like?
    ===================================
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


        OPTIONAL: Can you export a single function?
        ===========================================
        •   Since using the "exports" property would be useful if you had multiple methods or properties.
        •   If you only have a single method, you would simply need to omit the "log" so it is just a function to export.
        •   When you do this (following the example), logger (from Question 6 in app.js) becomes a function we can access directly.

                    module.exports = log;

                o   and in app.js (building on Question 6 topic):

                    logger('Welcome!')    ==>  Welcome!

                    
        OPTIONAL: Can you check the module to verify that you added your method to the exports function?
        ===============================================================================================

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


        OPTIONAL: Can you access a module if it is NOT in the same folder?
        ===================================================================
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
                     
                o   And Finally in Gitbash, when you input node app.js you will get this:

                    Welcome!
                   
    •   To verfiy that you loaded a module, in Gitbash, you will see that when you input node app.js, 
        you get an object with a single method called log with a function:

                node app.js
                { log: [Function: log] }
*/



/* 
7. What is a Module wrapper function?
/////////////////////////////////////
==SHORT ANSWER==
    •   A module wrapper is a function that "wraps" around each module (i.e. file) to keep the code inside "private".
    •   Node does NOT execute code in a file directly, but rather wraps the code of each module in an IIFE (immediately
        Invoked Function Expression)

==EXTENDED ANSWER==
    •   Since modules are "private", meaning that they are only scoped to that module and not visibile anywhere
        else in the code.
    •   Node is able to keep those modules private by "wrapping" those modules (i.e. files) in a function.
    •   Node automatically wraps the module in a "wrapper".
    •   The "module wrapper" function has serveral arguments such as "exports", "require", etc.

==EXAMPLE==
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
        •   At runtime, the code is converted to an IIFE (Immediately Invoked Function Expression):
        •   Node does NOT execute code directly, but rather wraps the code of each module in an IIFE.

                    o Example of a IIFE:

                        (function(param1, param2) {         <== Note the parenthesis around the entire function.
                            // code executed in here
                        })      


    What does a module wrapper function look like?
    ===============================================

        (function (exports, require, module, __filename, __dirname) {
            // code in the module.
        })


    What are the arguments of a module wrapper function?
    =====================================================
            • exports     = shortcut for module.exports (e.g. exports.log).
                          = Cannot be rest because it is a short cut for module.exports.
            • require     = local to each mdoule, require is an argument passed to the function.
            • module      = module (i.e. module.exports.log)
            • __filename  = name of the file.
            • __dirname   = path of the file.


    How do you check module wrapper arguments?
    ==========================================
        •   To check any of these arguments, simply console.log() the argument.
            o   For example, console.log(__filename) will show the path to the specific module (i.e. file).
            o   For example, console.log(__dirname) will show the main folder (i.e. directory) the module is found in.
*/


/* 
8. What are built-in modules in Node?
///////////////////////////////////////
==SHORT ANSWER==
    •   Built-in modules are modules that are built into the core of node that allow you to work with files, 
        the OS, HTTP (for creating web servers), etc.

==EXTENDED ANSWER==
    •   For a complte list of built-in modules, see Node documentation: https://nodejs.org/dist/latest-v10.x/docs/api/
    •   For example:
        o   File system which works with files.
        o   HTTP, which allows us to create web servers that listen for HTTP requests.
        o   OS, which allows us to work with the operating system.
        o   Path, which gives us a bunch of utility function for working with paths.
        o   Process, which gives us current information about the process.
        o   Query Strings, which is useful in building HTTP services.
        o   Stream, which allows us to work with streams of data.
*/


/* 
9. What is a path module?
/////////////////////////
==SHORT ANSWER==
    •   The path module is an object that provides useful methods and utlities for working with file and directory paths.
    •   For more info, check out https://nodejs.org/dist/latest-v10.x/docs/api/path.html

    How do you access the path module?
    ==================================
        •   To access the path module, you need to load the "path" module using the "require" function, get  
            the result (which is an object) and store it in a constant. 

                    const path = require('path');

                    o   Note here that Node assumes that "path" is a built-in module.
                    o   If there is no exisitng built-in module "path", it will look for a related path to
                        a file in this application.

==PRACTICAL EXAMPLE==

    • In your app.js file:

            const path = require('path');              // first we load the path module with the require function and store as a constant/
            const pathObj = path.parse(__filename);    // Then we use one of path's methods .parse, which will show info about the path.
                    
            console.log(pathObj);                      // And finally when pathObj is logged...

    • In Gitbash:

        { root: 'C:\\',
          dir: 'C:\\Users\\Admin\\Desktop\\first-app',
          base: 'app.js',
          ext: '.js',
          name: 'app' }
*/


/* 
10. What is an OS module?
/////////////////////////
    •   The OS module allow you to get information about the current operating system.
    •   For more info, check out https://nodejs.org/dist/latest-v10.x/docs/api/os.html

    How do you access the OS module?
    ================================
        •   To access the OS module, you need to load the "os" module using the require function, then get the 
            the result and store it in a constant.

            const os = require('os');

    How do you access OS module methods?
    ====================================
        •   To access the methods available to the OS module, you simply call the os module and then the method 
            you want (e.g. totalmem) and then store it to a constant.

            const os = require('os');
            const totalmem = os.totalmem();     <== access os module.

            console.log(totalmem);              //=> 17117339648\
*/


/* 
11. What is a file system module?
/////////////////////////////////
    •   The file system module allows you to work with files and directories.
    •   For more information, check out https://nodejs.org/dist/latest-v10.x/docs/api/fs.html

    How do you access the file system module?
    =========================================
        •   To access the FS module, you simply load the fs module using the require function, then get the
            result and store it in a constant.

            const fs = require('fs');

    How do you access the FS module methods?
    ========================================
        •   To access the methods avaible        

*/































/* 
https://medium.com/@mattburgess/beyond-console-log-2400fdf4a9d8 -- console
https://www.geeksforgeeks.org/javascript-cleartimeout-clearinterval-method/ -- clearTimeout explaination
https://www.freecodecamp.org/news/javascript-modules-a-beginner-s-guide-783f7d7a5fcc/ -- modules explained
https://www.coreycleary.me/should-you-use-a-logging-framework-or-console-log-in-node/ -- 
*/



