"use strict";
// TOPIC /////////////////////////////////////////////////////////////////////////////////////////////////////
//     Node Modules
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//      1. What is a module?
//      2. What is a module JSON object?
//          + What does a module JSON look like?
//      3. How do you create a module?
//          + Can you export a single function?
//          + Can you check the module to verify that you added your method to the exports function?
//      4. What is the require() function?
//          + Can you access a module if it is NOT in the same folder?
//      5. How do you load a module?
//      6. What is a Module wrapper function?
//          + What does a module wrapper function look like?
//          + What are the arguments of a module wrapper function?
//          + How do you check module wrapper arguments?
//      7. What are built-in modules in Node?
//      8. What is a path module?
//          + How do you access the path module?
//      9. What is an OS module?
//          + How do you access the OS module?
//          + How do you access OS module methods?
//      10. What is a File system module?
//          + How do you access the file system module?
//          + How do you access the FS module methods?
//          + How do you use a SYNCHRONOUS file system module method?
//          + How do you use a ASYNCHRONOUS file system module method?
//      11. What is an Events Module and EventsEmitter?
//          + How do you access the EventEmitter module?
//          + How do you access the EventEmitter methods?
//          + How does the EventEmitter work in practical application?
//      12. What are event arguments? (w/logger example)
//      13. Why should you extend an EventEmitter? (w/logger example)
//      14. How do you define a class? (w/logger example)
//      15. How do you extend a class to have all the abilites of a module? (w/ logger example)
//      16. What is an HTTP Module?
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
1. What is a module?
/////////////////////
==SHORT ANSWERS==
    •   In Node, modules are simple or complex functionality in single or multiple JavaScript files which can be reused
        in the Node.js application.
            o   Each of the variables and functions defined in each of those modules are scoped to those files and need 
                to be "exported" via export or module.export or imported via the require() function.
       

==EXAMPLE==
    •   Think of Node modules as a book (node) divided into chapters (modules.  
            o   Modules are individual "chapters of a book" that can be edited without editing other chapters when they are updated.
        

==EXTENDED ANSWER==
    •   Modules can be in seperate .js files (and under seperate folders).
            o   Because we might have multiple files of JavaScript code, accessing function and variables across those multiple files 
                might result in having a function or variable over-ridden on one page or another and causing bugs in our code.  
            o   So to avoid this problem with global scope, we use modules which are small building blocks where we define variables
                and functions so that names will not conflict.
            o   Every Node application has at least one file (i.e. module) which is called the "main module"
                
    •   Modules are self-contained
            o   Modules are self-contained (i.e. have thier own context) with distinct functionality which allows them to be shuffled,  
                updated, removed, or added when necessary without disrupting the system as a whole.

    •   Modules can export a single function or an object.
            o   The variables and function in those file "modules" are private, meaning that they are scoped to that particular file.
            o   To use a variable or functions defined in a module that is OUTSIDE that module, then you need to explicitly export it
                and make it public.
*/



/* 
2. What is a module JSON object?
////////////////////////////////
    •   When you call "module" you will get a JSON object with properties with special signifigance, some of which will allow
        you to "export" parts of that module elsewhere in your code.

    What does a module JSON look like?
    ===================================
    1. In your app.js "main" module, write this simple console.log (Note that module in the example above is NOT a global object):

            console.log(module);
        
    2. In Gitbash, open app.js using node:
    
            $ node app.js

    3. What is returned is a JSON object with key/value pairs:

            Module {                                                           // The module object with properties:
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
3. How do you create a module?
//////////////////////////////
==SHORT ANSWER==
    •   To create a module: 
            o   First write the code you want to use 
                    o   (e.g. myMod)
            o   Second, "export" that variable or function using "module.export" with a property name 
                    o   (e.g. module.exports.myMod).
            o   Lastly, assign a value with the variable or function you wish to resuse 
                    o   (e.g. module.exports.myMod = myMod).
                    
==EXAMPLE==
                    function myMod() {
                        // code for module              <== 1. Function you want to export.
                    }

                    module.exports.myMod = myMod;       <== 2. Assign the function you want to export in the module.


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
                o   Remember that the variable and function below is PRIVATE, and  CANNOT be accessed beyond the
                    scope of this document. 
        

                    let url = 'http://mylogger.io/log';       // sends an HTTP request to this endpoint

                    function log(message) {                   // function that takes a message and send HTTP request
                        // Send HTTP request
                        console.log(message);
                    }


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
4. How do you load a core module?     
///////////////////////////////////
==SHORT ANSWER==
    •   To load a core module (i.e. access a module in another file), you need to use the require()  
        function to return the object exported from that file.

==EXAMPLE==
    •   For example, suppose you created a "greeting" module in another file and you want to use it in your primary
        module file.  
    •   You simply need to "load" that module to the current file using the require function and pass 
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
5. How do you load a module?
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
6. What is a Module wrapper function?
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
7. What are built-in modules in Node?
///////////////////////////////////////
==SHORT ANSWER==
    •   Built-in modules are modules that are built-into the core of node that allow you to work with files, 
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
8. What is a path module?
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
9. What is an OS module?
/////////////////////////
==SHORT ANSWER==
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
10. What is a file system module?
/////////////////////////////////
==SHORT ANSWER==
    •   The file system module allows you to work with files and directories.
    •   The file system module methods come in pairs, specifically asynchronously and synchronously (but best to use async).
    •   For more information, check out https://nodejs.org/dist/latest-v10.x/docs/api/fs.html

    How do you access the file system module?
    =========================================
        •   To access the FS module, you simply load the fs module using the require function, then get the
            result and store it in a constant.

            const fs = require('fs');

    How do you access the FS module methods?
    ========================================
        •   To access the methods avaible methods, you use dot notation.
        •   However, one thing to note with FS module methods is that most of the methods available to you 
            are either synchronous (e.g. readirSync) or asynchronous (readdir).  
        •   Even though you could use synchronous methods, you should avoid them since they are less efficient.      
        •   Instead, you should use asynchronous methods because they are non-blocking.

    How do you use a SYNCHRONOUS file system module method?
    =======================================================

                                        first argument specifies path which in this case is the current folder. 
                                             /
            const files = fs.readdirSync('./')

        •   This will return all the current files in a folder.
        •   So when you console.log "files", you will get all the files that are in the folder 

             [ 'app.js', 'logger.js' ]

    How do you use a ASYNCHRONOUS file system module method?
    ========================================================
        •   All Asynchronous methods take a function as the last argument.
            o   In the case of the example below, we have two arguments:
                
                Argument 1 = file path
                Argument 2 = function which node will call when the asynchronous operation completes (i.e. a callback function).
                             In this case, the function will let us know if we have an error (i.e. err) or the result (i.e. files).
                             Only one of those arguments will have a result (and the other will be null). 
                             If we have an error, we log the error message.
                             Else if we have a result, we log the result which is a string array of the files previously shown.

                    const fs.readdir('./', function(err, files) {
                        if (err) {
                            console.log('Error', err)                 // If error, return "Error"
                        } else {
                            console.log('Results', files)             // If result, return [ 'app.js', 'logger.js' ]
                        }
                    });

            o   For informations sake, if we did have an error, like the path being incorrect, we would get an "Error" message
                information about what is wrong.
*/


/* 
11. What is an Events Module and EventsEmitter?
///////////////////////////////////////////////
==SHORT ANSWER==
    •   Events are a core concept in node.
    •   Events are a signal that something has happened.
    •   In particular, EventEmitter is one of the core classes in Node that allows you to raise (emit) and handle events.
    •   Several built-in classes om Node derive from EmitEmitter.
    •   EventEmitter in particular has much of the same workings as the jQuery event listeners.
    •   For more information, check out https://nodejs.org/dist/latest-v10.x/docs/api/events.html

==EXAMPLE==
    •   Suppose we have a class called "HTTP" that we can use to build a web server.

                         [HTTP]                

    •   When we listen on a given port and recieve a REQUEST, the HTTP class raises an EVENT.

                    EVENT! New Request!
                            |
          (request)====> [HTTP]                

    •   The job now is to respond to that event and return the right reponse.

                    EVENT! New Request!
                            |
                         [HTTP]  ====> (Return correct response)


    How do you access the EventEmitter module?
    ===========================================
        • To access the EventsEmitter module, you load "events" with the require function and store it in a constant. 
        
            const EventEmitter = require('events');

                o SPECIAL NOTE: Note that the first letter is Capitalized, indicating that this is a CLASS.
                    A Class is a container of related properties and functions (i.e. methods).
                o SPECIAL NOTE: This is a CLASS (i.e. blueprint) of what and EventEmitter can do (i.e. everything 
                    in "events").

        •   To use the EventEmitter, we need to create an instance of that class.
         
            const emitter = new EventEmitter();

    How do you access the EventEmitter methods?
    ===========================================
        •   To access the EventEmitter methods, you simply use dot notation.
        •   Although there are over 10 methods we can use, there are two that are used the most: 
                •   .on('arg1', [callback function] )  
                    o   This is the same as in jquery (i.e. $('main').on('click', function(event){}) where the
                        "on" listens for something to happen.  
        
        
                •   .emit('arg')
                    o   Signals that an event has happened with an argument that is the name of the event.
                
                            emitter.emit('messageLogged');

                    o   What this means is that we extend our logger module and every time we log a message
                        we raise an event called "messageLogged"
                        
    How does the EventEmitter work in practical application?
    =======================================================

            const EventEmitter = require('events');               // First, we load events and store as a const.  This class is a blueprint for what EventEmitter can do.
            const emitter = new EventEmitter();                   // Second, we create a new object that we can use in the application.

            emitter.on('messageLogged', function() {              // The app listens for when messageLogges is called and when it is
                console.log('Listener called');                      uses the callback function to return "Listener called".
            });

            emitter.emit('messageLogged')                         // The event that is raised, triggering the listener above!
*/



/* 
12. What are event arguments? (w/logger example)
/////////////////////////////////////////////////
==SHORT ANSWER==
    •   Event arguments allow us to pass data about an event that just happened.

==EXAMPLE==

            emitter.emit('messageLogged', { id: 1, url: 'http://'})  
                                                \
                                                Event arguments

==EXTENDED ANSWER==
    •   When an event is raised, you would often want to send some data about that event.
    •   An event argument is simply additional arguments added to .emit() inside an object.
    •   The object inside the .emit() method can contain multiple values about the event.

==PRACTICAL EXAMPLE==
            const EventEmitter = require('events');             
            const emitter = new EventEmitter();                  

            emitter.on('messageLogged', function(event) {                   // Then the event object is passed here as 'event'...
                console.log('Listener called', event);                      // ... and then logged in the console.
            });

            emitter.emit('messageLogged', { id: 1, url: 'http://'})         // First, the event object here contains an id and a url.                
*/


/* 
13. Why should you extend an EventEmitter? (w/logger example)
//////////////////////////////////////////////////////////////
    •   In real world application, you really wont be working with obejcts like EventEmitter directly as in the case above.
    •   Instead, it is ideal to create a CLASS and then use that that class in your code.


==PRACTICAL EXAMPLE==
    •   In the example below, we have two modules: app.js and logger.js.
            o   Remember, in logger.js we are exporting a simple function (i.e. log) with a message.
    •   The objective is to raise an event in the logger module and then in app.js listen for that event
        and do something in response.

    STEP 1: In the app.js module, we transfer EventEmitter and emitter to the logger.js module:
    ===========================================================================================
            const EventEmitter = require('events');
            const emitter = new EventEmitter();

    STEP 2: In the app.js module, we also transfer the lines that raise an event to the logger.js module.
            In particular, this line will go inside the log function :
    =====================================================================================================

            emitter.emit('messageLogged', { id:1, url:'http://'})

    >>>Wht did we move these lines of code from app.js to logger.js? <<<
    >>>  -- Because it is the logger.js module that emits an event, so it doesnt belong in app.js.<<<
    
    STEP 3: The logger module now has the relocated code:
    ======================================================
    
<app.js>        const EventEmitter = require('events');                         <== Relocated from app.js
                const emitter = new EventEmitter();                             <== Relocated from app.js
                let url = 'http://mylogger.io/log';       

                function log(message) {                  
                    // Send HTTP request
                    console.log(message);
                    emitter.emit('messageLogged', { id:1, url:'http://'})       <== Relocated from app.js.
                }                                                                    

                module.exports = log;


    STEP 4: In app.js, you need to load the logger module AND call the log function:
    ================================================================================

<app.js>        const EventEmitter = require('events');
                const emitter = new EventEmitter();
                let url = 'http://mylogger.io/log';       

                function log(message) {                  
                    // Send HTTP request
                    console.log(message);
                    emitter.emit('messageLogged', { id:1, url:'http://'})
                }

                const log = require('./logger');                             <== load the logger module (i.e. logger.js)
                log('hello there');                                          <== Then call the log function.


        • At this point, if you run app.js in Gitbash, you will only see "message" because
          the event emitter in app.js is a DIFFERENT event emitter than the one on logger.js.
*/



/* 
14. How do you define a class? (w/logger example)
//////////////////////////////////////////////////
    •   To define a class, you can use an ES6 to create a class with additional methods.
    •   Class is used to create a constructor function.
    •   Remember, the first word in a class should be capitalized.
    •   When you move define a function in a class, you need to remove the "function" keyword.
    •   The functions inside the class are now "methods".
    •   Then you simply export the CLASS rather than the function.


<logger.js>     const EventEmitter = require('events');
                const emitter = new EventEmitter();

                let url = 'http://mylogger.io/log';       

                class Logger {                                              <== "Logger" class is created...
                    log(message) {                                          <== ... and the "log" function becomes a method of Logger class.
                    console.log(message);
                    emitter.emit('messageLogged', { id:1, url:'http://'})
                    }
                }

                module.exports =  Logger;                                   <== ... and instead of exporting the function "log" we export
                                                                                    the class "Logger".
*/



/* 
15. How do you extend a class to have all the abilites of a module? (w/ logger example)
////////////////////////////////////////////////////////////////////////////////////////
    •   If you want to raise events in your application to signal that something has happened, you need to create a CLASS
        that extends the parent class.
    •   When you do this, that class will have all the functionality defined in the required() function stored variable PLUS
        ADDITIONAL METHODS!
    •   And then when you want to raise an event, you use "this.emit" because this reference the encapsulating class.
    •   to extend a class to have all the abilities of a a module, you use the es6 "extend" keyword following
        the class name to the parent/base class (i.e. the require() function stored in a const variable).
    •   When you use "extends", you "extend" all the same functionality you would have in the require() function.

==EXAMPLE==

           keyword      name    extends to...      ...the base/parent class
                \        |         |               /
                class ClassName extends ParentClass {
                    // code goes here
                }


==PRACTICAL EXAMPLE==

    STEP 1: Extend abililites to a parent class
    ===========================================
<logger.js>     const EventEmitter = require('events');
                ______________________________________              <== Note: we can remove the new emitter object because we dont need it anymore.        
                
                let url = 'http://mylogger.io/log';       

                class Logger extends EventEmitter {                  <== The "class" named "Logger" that "extends" the module abilites from "EventEmitter" class.
                    log(message) {                  
                    // Send HTTP request
                    console.log(message);
                    this.emit('messageLogged', { id:1, url:'http://'})      <== "this" references the encapsulating class.
                    }
                }

                module.exports =  Logger;

    STEP 2: In app.js, we change "log" to the class "Logger" since that contains our message and emitter.
    ====================================================================================================

<app.js>        const EventEmitter = require('events');
                ______________________________________             <== Note: remove the new emitter object because we're working with the logger object. 

                const Logger = require('./logger');                 <== "log" becomes "Logger" to reflect our class. 
                const logger = new Logger();                        <== and create a new object called "logger". 
                
                logger.on('messageLogged', function(event) {         <== we move the emitter below the logger function and reference logger instead
                    console.log('Listener called', event);
                });

                logger.log('message');                              <== then call logger and the method "log" in the module!   

*/



/* 
16. What is an HTTP Module?
////////////////////////////
==SHORT ANSWER==
    •   The HTTP module is used for creating networking applications.
    •   HOWEVER, in the real-world we would use express to create application which gives us a clean strucutre to handle any routes.
    •   In fact, the express framework (internally) is built on the SAME HTTP module in node.
            o   For example, we can create a web server that listend for HTTP requests on a given port.
            o   With this, we can create a back-end service for our client applications (like a web application with React
                or a mobile application).
            o   For more information, check out https://nodejs.org/dist/latest-v10.x/docs/api/http.html


-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
==PRACTICAL EXAMPLE 1: Building a Basic HTTP service==
-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
    •   The program listens and responds to a connection event, which is not needed in real-world application but
        is helpful to show you how a basic server is setup.

    STEP 1: Create a server:
    ========================
            •  First, load the "http" built-in module with the require function and store it as a constant named "http". 
            •  Then, create a server by callinghttp and the built-in function "createServer" and store it as a constant with the name "server". 
                o   Note that the server we create is an EventEmitter, with all its capabilites!  


                const http = require('http');                 // load http module
                const server = http.createServer();           // create server


    STEP 2: Create a listener (on socket) with a callback function.
    =============================================================== 
            •   When a connection is established, specifically when you submit localhost:3000 in your browser, the "New connection" will be logged.


                const http = require('http');                 
                const server = http.createServer();          

                server.on('connection', function(socket) {          <== listening on the "server", if there is a connection, then the callback will 
                    console.log('New Connection...')                    log new connection.
                });         


    STEP 3: Listen on the server (at a specific port like 3000) and log a message when it is listening.
    ===================================================================================================

                const http = require('http');                 
                const server = http.createServer();           

                server.on('connection', function(socket) {         
                    console.log('New Connection...')
                })                                    

                server.listen(3000);                          <== Third, we call the server and listen on port 3000.  
                console.log('Listening on port 3000...')      <== ... and when we do, print this message.


    STEP 4: In Gitbash, you will see that when you type in node app.js, your server is listening on port 3000.
    ==========================================================================================================

                $ node app.js
                Listening on port 3000...      <== So here we have confirmation that the server is indeed active and listening on port 3000.


    >>>>> NOTE: To exit the server, simply press ctrl + c <<<<<           
    
    STEP 5: In the browser, navigate to localhost:3000.
    ===================================================
        •   In this example, you will not get anything in the browser, but in Gitbash you will see a message saying "New connection...".
        •   What has happened here is that as the server was listening, a request was made to localhost:3000 and node picked it up
            and returned a message in return.

                $ node app.js
                Listening on port 3000... 
                New Connection...                 <== the request from the browser


-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
==PRACTICAL EXAMPLE 2: Building an HTTP service more efficiently by passing a callback function to the createServer method==
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
    •   

                const http = require('http');             

                const server = http.createServer(function(req, res) {    // We pass a callback to the create server method...
                    if (req.url === '/') {                               // ... if the request url is equal to '/' we can send something to the client...
                        res.write('Hello world!');                       // ... in this case, we write (i.e. send)
                        res.end();                                       // ... then end the response
                    } 
                });                                       

                server.listen(3000);                          
                console.log('Listening on port 3000...')     


    •   If you want to build a back-end service for a web or mobile application, then you need to handle additional routes.
        o   To do this, you would simply need to add another "if" block:        

                const http = require('http');             

                const server = http.createServer(function(req, res) {    
                    if (req.url === '/') {                               
                        res.write('Hello world!');                      
                        res.end();                                       
                    } 
                    if (req.url === '/api/courses') {                     // if requested url is equal to the address...
                        res.write(JSON.stringify([1,2,3,]));               // Here we want to return an array of objects using JSON (converted into a string using JSON syntax).
                    }                                                     // In this case, we return an array of numbers
                    res.end();
                });                                       

                server.listen(3000);                          
                console.log('Listening on port 3000...')      
*/






























/* 
https://medium.com/@mattburgess/beyond-console-log-2400fdf4a9d8 -- console
https://www.geeksforgeeks.org/javascript-cleartimeout-clearinterval-method/ -- clearTimeout explaination
https://www.freecodecamp.org/news/javascript-modules-a-beginner-s-guide-783f7d7a5fcc/ -- modules explained
https://www.coreycleary.me/should-you-use-a-logging-framework-or-console-log-in-node/ -- 
https://www.tutorialsteacher.com/nodejs/nodejs-modules -- info on node modules
*/



