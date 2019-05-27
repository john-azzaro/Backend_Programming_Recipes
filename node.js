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
==SHORT ANSWER==
    •   Node.js is an open source and cross-platform runtime enviroment for executing JavaScript OUTSIDE of a browser.

==EXTENDED ANSWER==
    •   Node.js is a platform that allows us to write JavaScript that runs on the server.
    •   Node.js uses the chrome V8 engine to give us a platform to execute JavaScript outside the browser. 
    •   Node.js is a server-side enviroment for executing JavaScript.   
*/


/*
2. Why do we use Node.js?
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
    •   Node.js uses V8 JavaScript engine in chrome.
    •   V8 is a "just-in-time compiler" written in C++ that takes the JavaScript you write in your web apps
        and turns it into machine-level instructions.
    •   A JavaScript engine translates JavaScript into instructions that the computer can execute.
*/


