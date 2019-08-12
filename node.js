"use strict";
// TOPIC /////////////////////////////////////////////////////////////////////////////////////////////////////
//     Node.js
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//      1. What is Node.js?
//         + What is Node?
//         + What is NOT Node?
//      2. Why would you use Node.js?
//      3. What is a runtime enviroment?
//      4. What is Asynchronous vs Synchronous architecture and which would node be?
//      5. How do you run a basic program in Node?
//      6. Is Node's JavaScript different than the browser's JavaScript when it comes to global scope?
//      7. What are global objects in JavaScript?
//      8. What are global objects in Node?     
//
// NOTES ////////////////////////////////////////////////////////////////////////////////////////////////////
//     1. Useful overview of information on Node.js from study, research, tutorials, mentor meetings,
//        peer discussions, and good ole' fashioned curiosity.  I've put the document in Question and
//        Answer format for improved readability.
//     3. Download node.js: https://nodejs.org/en/
//     2. Documentation for Node.js: https://nodejs.org/en/docs/
// 
//////////////////////////////////////////////////////////////////////////////////////////////////////////////


/*
1. What is Node.js?
///////////////////
==SHORT ANSWERS==
    What is node?
    ==============
    •   Node.js is a server-side enviroment for executing JavaScript that allows us to write JavaScript that runs on the server.
    •   Node.js is an open source (MIT license) and cross-platform (PC, MAC, or Linux) runtime enviroment for server-side  
        and networking applications (i.e. executing JavaScript OUTSIDE of a browser).
    •   Node.js is a program that includes the v8 JavaScript engine plus additional modules that give us extra capabilites
        that are not inside browsers.   
    •   Node.js uses the V8 JavaScript engine in chrome.
            o   V8 is a "just-in-time compiler" written in C++ that takes the JavaScript you write in your web apps
                and turns it into machine-level instructions.
            o   A JavaScript engine translates JavaScript into instructions that the computer can execute.
     
    What is NOT node?
    =================
    •   Node is NOT a programming langauge.
    •   Node is NOT to be compared to other frameworks like ASP.NET.
    •   Node is NOT a framework (its a runtime enviroment for executing JavaScript code).
    •   Node is NOT for CPU-intensive applications (since node applications are single threaded).
*/



/*
2. Why would you use Node.js?
/////////////////////////////
==SHORT ANSWER==
    •   Node.js is mainly used to create web servers. However, Node can be used to create different types of 
        applications like web applications, chat applications and REST API servers.  
,
==EXTENDED ANSWERS==
    •   Node allow us to work with the back-end.
            o   Computers execute machine code instructions, but machine code is difficult for humans to work with.
                Thus, we use Node to abstract away from machine code to make it easier for people to use. 
            o   Since web and mobile apps are only the surface, they need a way to talk to some service that sit on
                the server (or cloud) to store data, send emails, etc.

    •   Using Node has many positive benefits.
            o   Node is easy to start, good for prototyping and agile development, good for building fast and highly 
                scalable services.
            o   Node is lightweight and you can write your front-end and back-end in the same langauge.
            o   Node is ideal for building highly scalable, data-intensive, and real time back end services that power
                client applications.

    •   Applications for Node are written in JavaScript. 
            o   A great reason to use node is that with node application we use JavaScript.
            o   Because Node uses JavaScript, your source code will be cleaner and more consistent codebase  
                for both front and back end (i.e. same naming conventions, same tools, etc).
            o   Since browsers use JavaScript for components, components are typically written in JavaScript. 
            o   Since JavaScript is a dynamic language (i.e. the meaning is determined by value, not when it is declared), it
                is LOOSELY typed rather than strongly typed.

    •   Having the front-end and the back-end written in the same langauge (i.e. JavaScript) is good for a few reasons:
            o   There are no syntactical difference when you use one language like JavaScript.
            o   Being able to share code betwen the front end and the back end.
                o  For example: Shared libraries (like Underscore, etc.) used for both front and back ends so that
                                if you are using user authentication on front and back end, you want to use the same
                                library to authorize the user.
                o  For example: Using an algorithm or function that you could use on the front and back end.
                o  For example: Using a data model, like the definition of your user which can have many properties.
            o   If the back end language is not the same as the front end, you will also have a lot fo maintenance overhead.

    •   Node is used by many large companies like paypal, NetFlix, Uber, etc.
            o   Example of paypal who rebuilt one of thier Java and Spring based application with node resulted in 
                an application that was twice as fast with fewer people, 33% fewer lines of code, 40% fewer files,
                and most importantly doubles the number of requests per seconds with 35% faster average repsonse time. 

    •   Node has a large ecosystem of open-source libraries so you dont have to build your own building-block from scratch.
    •   JavaScript works very well with JSON which is ideal for web apps both on the front and back ends.
*/



/* 
3. What is a runtime enviroment?
////////////////////////////////
==SHORT ANSWER==
    •   A runtime enviroment (e.g. Node.js) is an engine that can run a specific type of code.

==EXAMPLE==
    •   For example, Node.js is a lean, fast, crossplatform JavaScript RUNTIME ENVIROMENT for servers and applications.

==EXTENDED ANSWERS==
    •   Before Node, JavaScript was primarily used to make application INSIDE a browser.
            o   The browser provides the runtime enviroment for JavaScript code.
            o   Every browser has a "JavaScript Engine" that takes JavaScript code and converts it to MACHINE CODE
                so the computer can understand.
                o   For example, Microsoft Edge uses Chakra, Mozilla firefox uses SpiderMonkey, and Chrome uses v8.
                o   Because of this variety of browsers, JavaScript code can behave differently in these browsers. 

    •   With Node, we use the chrome v8 engine to run JavaScript OUTSIDE the browser
            o   Up until 2009, JavaScript could only run in the browser.
            o   However, in 2009 Ryan Dahl (creator of node) thought it would be great to execute JavaScript OUTSIDE the browser.
            o   So he took googles v8 engine (fastest there is) and embedded it inside a C++ program and called it Node.
            o   Similar to a browser, node is a runtime enviroment for JavaScript code.
                    o   In so many words, it contains a JavaScript engine that can execute JavaScript code.
            o   Google Chrome and Node have the same engine but are different runtime enviroments for JavaScript.

    •   Node also has certain objects that provide an enviroment for JavaScript code.
            o   However, those objects are DIFFERENT from the object we have in our browsers.
                o   For example, node does NOT have the document object selector (i.e. document.getByElementId(''));
                    o   Instead, we have more interesting objects thsat give us more capabilites. For example:
                    o   fs.readFile()  -- work with the file system
                    o   http.createServer() -- listen for requests on a given port.    
*/



/*
4. What is Asynchronous vs Synchronous architecture and which would node be?
////////////////////////////////////////////////////////////////////////////
==SHORT ANSWERS==
    •   Node has an Asynchronous, "non-blocking" architecture that uses a single thread to service multiple requests.
    •   A Synchronous "blocking" architecture must service each request before movingon to the next one making it
        inefficient compared to asynchronous arhcitecture.

==EXAMPLE==
    •   For example, imagine a restaurant with multiple tables, a waiter, and a kitchen.  
            o   An Asynchronous restaurant has a waiter (thread) that could service multiple tables (responses) while the orders 
                are given to the kitchen (server).  
            o   When those orders are done, the finished order in the "event queue" is brough to the requesting table.
        
==EXTENDED ANSWERS==
    •   Node benefits from "non-blocking" asynchronicity
            o   Node applications are highly scalable because of the ASYNCHRONOUS nature of node.
            o   What does asynchronous mean? 
                    o   Suppose you had a restaurant with a kitchen, two tables, and a waiter.
                    o   The waiter can take an order from one table, tell the kitchen who prepares the meal, and then wait on
                        the other table while the first tables order is being prepared.
                    o   This is the analogy behind non-blocking asynchronous architecture.
  
            o   In Node, the ASYNCHRONOUS waiter is a thread allocated to handle a request from MULTIPLE tables.
                    o   A single thread (waiter) can be used to handle multiple requests (or in the examples case tables).

                                 [single thread]
                                /               \
                        [Request]                 [Response]

             o   The single thread (waiter) can service mulitple requests.
                    o   Suppose that the waiter takes an order from table 1 and puts the order in to the kitchen.
                    o   The kitchen (in this case a database) prepares that request while the waiter waits on table 2.
                    o   When the request is ready for table 1, a message is prepared called a "Event Queue".
                    o   Node is continually monitoring the event queue in the background.
                    o   When data is ready, node will take it out of queue and process it.

    •   Conversely, we can have "blocking" SYNCHRONOUS architecture.
            o   In the case of the restaurant, the waiter takes an order from one table.
            o   However, the waiter waits in the kitchen until the order is done before waiting on table 2.
            o   The waiter will not take an order from another table until the order is ready.

    •   In Node, the SYNCHRONOUS waiter is a thread that waits for a single order until it is finished.
            o   If another request is made, a NEW thread needs to be created.
            o   If you had a large number of concurrent clients (i.e. multiple tables), at some point you may
                run out of threads to serve the clients so new clients have to wait until free threads are available 
                OR add more hardware.
            o   Synchronous architecture is inefficient compared to asynchronous architecture.
*/


/* 
5. How do you run a basic program in Node?
//////////////////////////////////////////
==SHORT ANSWER==
    •   To write a basic node program, write a JavaScript program in a text editor and then 
         execute the program in Gitbash by running $node and calling the app as an argument.

==EXAMPLE==
    1. Create a file for your basic node application.
    2. In Gitbash, cd into the folder.
    3. In your text editor, create a basic program and save it as app.js.  
    

                    function welcome(name) {
                        console.log("Hello there " + name);
                    }

                    welcome("Joe")      //=> Hello there Joe


    4. In Gitbash, run node and pass the file "app.js" as an argument:


                    $node app.js

                    
            •   Note at this point that Node is a C++ program that includes chrome's v8 JavaScript engine.
            •   When we pass app.js to Node, Node will give the program to v8 for execution.

    5. Upon execution, you will get the desired program output:

                    Hello there Joe
*/


/* 
6. Is Node's JavaScript different than the browser's JavaScript when it comes to global scope?
//////////////////////////////////////////////////////////////////////////////////////////////
    •   Yes.  In JavaScript variables declared WITHOUT a keyword are global but in Node, everything is local by default.
            o   For example, to add something to global scope in Node, you need to EXPORT using "export" or "module.export".
            o   To IMPORT modules/objects, you need to use the require() function to access it from global scope.
*/



/* 
7. What are global objects in JavaScript?
/////////////////////////////////////////
==SHORT ANSWER==
    •   A global object is part of the global scope which means we can access it anywhere in our code.     
        o   When you declare a function or a variable in the client-side of JavaScript, it is added to the 
            global scope and is accessible via the "window" object (i.e. window.console.log()).
        o   Objects like "console.log", which as global in scope and have the "window" prefix attached at runtime
            are shared with node, as well as other objects like setTimeout, etc.

==EXAMPLE==
    •   console.log() is a global object (note: the "window" prefix is added when run).
    •   window.console.log() is a global object.


==ADDITIONAL QUESTIONS==
    What is the "window" object?
    ============================ 
    •   In browsers, there is a "window" object that represents global scope.
    •   All the variables and functions defined globally can be accessed by the window object:             
    •   However, the JavaScript engine will prefix this statement with 'window' because that is where  
        the object is defined. 


    What is the difference between console.log and window.console.log?
    ===================================================================
    •   Console.log and window.console.log are virtually the same, only window is an added prefix when run.
        o   "console.log" is such a global object.
    •   In JavaScript, we can use the "window" prefix that represents global scope. 
        o   For example, console.log() becomes window.console.log(). when run.
              

    What are some shared client and server side objects available in node?
    =======================================================================           
    •   As part of the window object, there are other objects that are available in node as well which can be 
        used on both client and server side, such as:

    • For example:
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
8. What are global objects in Node?
////////////////////////////////////
==SHORT ANSWER==
    •   A global object in node is much like the global object in JavaScript except we use the "global" prefix.

==EXAMPLE==
    •   In JavaScript, we use the "window" prefix.  For example: window.setTimeout();
    •   In Node, we use the "global" prefix.  For example: global.setTimeout();

==EXTENDED ANSWER==
    •   With the "global" object, we can access the same objects in JavaScript as we can in Node.

            setTimeout()     ==>   global.setTimeout()
            clearTimeOut()   ==>   global.clearTimeout()
            setInterval()    ==>   global.setInterval()
            clearInterval()  ==>   global.clearInterval()

==ADDITIONAL QUESTIONS==
    Are variables and functions accessible globally?
    ================================================
        •   However, variables and function defined in a .js file are NOT added to the global object but only 
            scoped to the local file (i.e. .js file) because of Nodes modular system.  
*/
