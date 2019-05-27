"use strict";
// TOPIC /////////////////////////////////////////////////////////////////////////////////////////////////////
//     Node.js
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//      1. 
//
// NOTES ////////////////////////////////////////////////////////////////////////////////////////////////////
//     1. Useful overview of information on Node.js from study, research, tutorials, mentor meetings,
//        peer discussions, and good ole' fashioned curiosity.  I've put the document in Question and
//        Answer format for improved readability.
// 
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
1. What is Node.js?
///////////////////
==SHORT ANSWERS==
    •   Node.js is an open source and cross-platform runtime enviroment for executing JavaScript OUTSIDE of a browser.
    •   Node is a program that includes the v8 JavaScript engine plus additional modules that give us extra capabilites
        that are not inside browsers.
    •   Node is NOT a programming langauge.
    •   Node is NOT to be compared to other frameworks like ASP.NET.
    •   Node is NOT a framework (its a runtime enviroment for executing JavaScript code).

==EXTENDED ANSWER==
    •   Node.js is a platform that allows us to write JavaScript that runs on the server.
    •   Node.js uses the chrome V8 engine to give us a platform to execute JavaScript outside the browser. 
    •   Node.js is a server-side enviroment for executing JavaScript.   
*/


/* 
2. What is a runtime enviroment?
////////////////////////////////
==SHORT ANSWER==
    •   A runtime enviroment is an engine that can run a specific type of code.

==EXAMPLE==
    •   For example, your browser has a runtime enviroment that allows it to execute JavaScript code.  Node allows
        you to have a runtime enviroment for JavaScript OUTSIDE the browser.

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
3. Why do we use Node.js?
/////////////////////////
==SHORT ANSWER==
    •   Node.js is used to build back-end services such as API's that power our client applications like 
        a web or mobile app (i.e. what the user sees and interacts with).

==EXTENDED ANSWERS==
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
3. How does node.js work?
//////////////////////////
==SHORT ANSWERS==
    •   Since Node applications are highly scalable and data-intensive BECAUSE of the Asynchronous nature of node.
            o   What does asynchronous mean? Suppose you had a restaurant with a kitchen, two tables, and a waiter.
                The waiter can take an order from one table, tell the kitchen who prepares the meal, and then wait on
                the other table while the first tables order is being prepared.
            o   This is the analogy behind non-blocking asynchronous architecture.

    •   In Node, the waiter is a thread allocated to handle a request.
            o   A single thread (waiter) can be used to handle multiple requests (or in the examples case tables).

                            [single thread]
                           /               \
                  [Request]                 [Response]


==EXTENDED ANSWERS==
    •   Node.js uses V8 JavaScript engine in chrome.
    •   V8 is a "just-in-time compiler" written in C++ that takes the JavaScript you write in your web apps
        and turns it into machine-level instructions.
    •   A JavaScript engine translates JavaScript into instructions that the computer can execute.
*/


