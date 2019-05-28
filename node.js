"use strict";
// TOPIC /////////////////////////////////////////////////////////////////////////////////////////////////////
//     Node.js
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//      1. What is Node.js?
//         + What is Node?
//         + What is NOT Node?
//      2. What is a runtime enviroment?
//      3. Why do we use Node.js?  
//      4. Why is Node's language in JavaScript?
//      5. What is Asynchronous vs Synchronous architecture and which would node be?
//      6. How do you write a basic node program?     
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
    •   Node.js is a platform that allows us to write JavaScript that runs on the server.
    •   Node.js is an open source and cross-platform runtime enviroment for server side and networking applications 
        (i.e. executing JavaScript OUTSIDE of a browser).
    •   Node is a program that includes the v8 JavaScript engine plus additional modules that give us extra capabilites
        that are not inside browsers.
    •   Node.js is a server-side enviroment for executing JavaScript.
    •   Applications for Node are written in JavaScript. 
     
    What is NOT node?
    =================
    •   Node is NOT a programming langauge.
    •   Node is NOT to be compared to other frameworks like ASP.NET.
    •   Node is NOT a framework (its a runtime enviroment for executing JavaScript code).
    •   Node is NOT for CPU-intensive applications (since node applications are single threaded).
    

*/


/* 
2. What is a runtime enviroment?
////////////////////////////////
==SHORT ANSWER==
    •   A runtime enviroment is an engine that can run a specific type of code.

==EXAMPLE==
    •   For example, Node.js is a lean, fast, crossplatform JavaScript RUNTIME ENVIROMENT for servers ad .

==EXTENDED ANSWERS==
    •   Before Node, JavaScript was primarily used to make application INSIDE a browser.
            o   Every browser has a "JavaScript Engine" that takes JavaScript code and converts it to MACHINE CODE
                so the computer can understand.
                    o   For example, Microsoft Edge uses Chakra, Mozilla firefox uses SpiderMonkey, and Chrome uses v8.
                    o   Because of this variety of browsers, JavaScript code can behave differently in these browsers. 
    •   The browser provides the runtime enviroment for JavaScript code.
            o   Up until 2009, JavaScript could only run in the browser.
            o   However, in 2009 Ryan Dahl (creator of node) thought it would be great to execute JavaScript OUTSIDE the browser.
            o   So he took googles v8 engine (fastest there is) and embedded it inside a C++ program and called it Node.
            o   So similar to a browser, node is a runtime enviroment for JavaScript code.
                    o   In so many words, it contains a JavaScript engine that can execute JavaScript code.
            o   Node also has certain objects that provide an enviroment for JavaScript code.
                    o   However, those objects are DIFFERENT from the object we have in our browsers.
                        o   For example, node does NOT have the document object selector (i.e. document.getByElementId(''));
                        o   Instead, we have more interesting objects thsat give us more capabilites. For example:
                            o   fs.readFile()  -- work with the file system
                            o   http.createServer() -- listen for requests on a given port.
    •   Google Chrome and Node have the same engine but are different runtime enviroments for JavaScript.
*/


/*
3. Why would you use Node.js?
/////////////////////////////
==SHORT ANSWER==
    •   Node.js is used to build back-end services such as API's that power our client applications like 
        a web or mobile app (i.e. what the user sees and interacts with).

==EXTENDED ANSWERS==
    •   Node is lightweight and you can write your front-end and back-end in the same langauge.
    •   Node is ideal for buidlign highly scalable, data-intensive, and real time back end services that power
        client applications.
    •   Node is easy to start, good for prototyping and agile development, good for building fast and highly 
        scalable services.
    •   Node is used by many large companies like paypal, NetFlix, Uber, etc.
        o   Example of paypal who rebuilt one of thier Java and Spring based application with node resulted in 
            an application that was twice as fast with fewer people, 33% fewer lines of code, 40% fewer files,
            and most importantly doubles the number of requests per seconds with 35% faster average repsonse time. 
    •   A great reason to use node is that with node application we use JavaScript.
            o   Computers execute machine code insstructions .
            o   HOWEVER, machine code is difficult for humans to work with.
            o   Programming languages like Node to abstract away from machine code to make it easier for people to use.    
    •   Additionaly because Node uses JavaScript, your source code will be cleaner and more consistent codebase  
        for both front and back end (i.e. same naming conventions, same tools, etc).
    •   Node has a large ecosystem of open-source libraries so you dont have to build your own building-block from scratch.
    •   Since web and mobile apps are only the surface, they need a way to talk to some service that sit on
        the server (or cloud) to store data, send emails, etc.
*/

/* 
4. Why is Node's language in JavaScript?
/////////////////////////////////////////

    •   Front and back end share the same language, code, 

    •   Since JavaScript is a dynamic language (i.e. the meaning is determined by value not when it is declared), it
        is loosely types rather than strongly typed.
    •   JavaScript works very well with JSON which is ideal for web apps both on the front and back ends.
    •   Since browsers use JavaScript for components, components are typically written in JavaScript.
    •   Its useful to have the front-end and the back-end written in the same langauge for a few reasons:
        o   There are no syntactical difference when you use one language like JavaScript.
        o   Being able to share code betwen the front end and the back end.
                o  For example: Shared libraries (like Underscore, etc.) used for both front and back ends so that
                                if you are using user authentication on front and back end, you want to use the same
                                library to authorize the user.
                o  For example: Using an algorithm or function that you could use on the front and back end.
                o  For example: Using a data model, like the definition of your user which can have many properties.
    •   If the back end language is not the same as the front end, you will also have a lot fo maintenance overhead.

*/



/*
5. What is Asynchronous vs Synchronous architecture and which would node be?
////////////////////////////////////////////////////////////////////////////
==SHORT ANSWERS==
    •   Node has an Asynchronous, "non-blocking" architecture that uses a single thread to service multiple requests.
    •   A Synchronous "blocking" architecture must service each request before movingon to the next one making it
        inefficient compared to asynchronous arhcitecture.

==EXAMPLE==
    •   For example, think of a restaurant.  
    •   An Asynchronous restaurant would have a waiter (thread) that could service multiple tables (responses) while the orders 
        are given to the kitchen (server).  When those orders are done, the finished order in the "event queue" is brought to 
        the requesting table.


==EXTENDED ANSWERS==
    •   Since Node applications are highly scalable  BECAUSE of the Asynchronous nature of node.
            o   What does asynchronous mean? Suppose you had a restaurant with a kitchen, two tables, and a waiter.
                The waiter can take an order from one table, tell the kitchen who prepares the meal, and then wait on
                the other table while the first tables order is being prepared.
            o   This is the analogy behind non-blocking asynchronous architecture.
    • 

    •   In Node, the ASYNCHRONOUS waiter is a thread allocated to handle a request from MULTIPLE tables.
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

    •   Conversely, we can have blocking SYNCHRONOUS architecture.
            o   In the case of the restaurant, the waiter takes an order from one table.
            o   However, the waiter waits in the kitchen until the order is done before waiting on table 2.
            o   The waiter will not take an order from another table until the order is ready.

    •   In Node, the SYNCHRONOUS waiter is a thread that waits for a single order until it is finished.
            o   If another request is made, a NEW thread needs to be created.
            o   If you had a large number of concurrent clients (i.e. multiple tables), at some point you may
                run out of threads to serve the clients so new clients have to wait until free threads are available 
                OR add more hardware.
            o   Synchronous architecture is inefficient compared to asynchronous architecture.


==EXTENDED ANSWERS==
    •   Node.js uses V8 JavaScript engine in chrome.
    •   V8 is a "just-in-time compiler" written in C++ that takes the JavaScript you write in your web apps
        and turns it into machine-level instructions.
    •   A JavaScript engine translates JavaScript into instructions that the computer can execute.
*/


/* 
6. How do you write a basic node program?
/////////////////////////////////////////
==SHORT ANSWER==
    •   To write a basic node program, write a JavaScript program in a text editor and then 
         execute the program in Gitbash by running $node and calling the app as an argument.

==EXAMPLE==
    1. Create a file for your basic node application.
    2. In Gitbash, cd into the folder.
    3. In your text editor, create a basic program and save it as app.js.  
    
            For example:

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

