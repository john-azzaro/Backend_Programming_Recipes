"use strict";
// TOPIC /////////////////////////////////////////////////////////////////////////////////////////////////////
//     Express Fundamentals
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//

//     1. What is a web server?
//        + How does the HTTP Protocol request-reponse cycle work?

//     1. What is an HTTP request and how does the HTTP Protocol request-response cycle work?
//     2. What is a GET request?
//     3. What is a PUT request?
//     4. What is a DELETE request?
//     5. What is a POST request?

//      2. Why should you use a framework like express?


//      1. What is express?

//      4. How do you install express?









//      5. How do you create a basic web server with express (w/ app example)?
//        +  How do you create an express server?
//        +  How do you create a route?    
//        +  How do you listen on a given port for requests?         
//        +  How do you add another route to your server?
//
// NOTES ////////////////////////////////////////////////////////////////////////////////////////////////////
//     1. Useful overview of information about Express fundamentals from study, research, tutorials, 
//        mentor meetings, peer discussions, and good ole' fashioned curiosity.  I've put the document in Question
//        and Answer format for improved readability.
// 
//////////////////////////////////////////////////////////////////////////////////////////////////////////////



/* 
What is a web server?
/////////////////////
    •   Although a web server can refer to either the hardware (i.e. the computer) or the software (i.e. application) 
        that helps deliver content that can be accessed through the internet, the role of a web server it to respond 
        to HTTP requests from clients with HTTP responses.     
*/

/* 
12. What is an HTTP request and how does the HTTP Protocol request-response cycle work?
////////////////////////////////////////////////////////////////////////////////////////
==SHORT ANSWER==
    •   An HTTP request asks the server to return a resource available at a particular place.
        o   Specifically, at the host specified in the requets heades, plus the path specified in the inital line.
    •   Web servers and clients speak http to each other   
            1.   The client makes a REQUEST to an HTTP server by opening a connection to the server and sending a request message.
            2.   Then, the server sends a RESPONSE to the request in the form of an HTML file with headers and a body.

==EXTENDED ANSWERS==
    •   Servers and clients communicate via HTTP Protocol.
            o   Resources like HTML which are sent from the server to your browser are generated when you request it.
    •   The client sends a REQUEST to the HTTP server.
            o	The program on the web server looks at this request and creates an HTML page specifically for that request.
    •   The server RESPONDS to the request with an HTML file with headers and a body.           
            o   The pages that come from that request are in .html files that are either static (unaltered from the server) 
                or dynamic (created as they are requested).
 

    How does the HTTP Protocol request-reponse cycle work?
    ======================================================

        1. When you enter a URL in the address box of the browser, the browser will translate that into a request message.

                • http://www.myWebsite.com/index.html
                

        2. First, in order to load the page the client sends a request to the HTTP server to open a connection to the server for an HTML file
           in the "public" folder where all our static assets live.

                        
                GET /public/index.html HTTP/1.1                       // Request method using GET (retrieve data) at this endpoint (in a public folder).
                HOST: www.myWebsite.com                               // The domain name of the server.
                Accept: image/gif, image/jpeg, •/•                    // Advertises which content types the client is able to understand.
                Accept-Language: en-us                                // Advertises which language the client is able to understand.
                Accept-Encoding: gzip, deflate                        // The encoding to be used when the resource is sent back.
                User-Agent: Mozilla/4.0                               // Allows network protocol peers to identify the application type, OS, etc.


        3. Second, the server will send a response to the request consisting of headers and a body

                HTTP/1.1 200 OK
                X-Powered-By: Express                                                  // note: should be disabled for security reason.
                Content-length: 47                                                     // size of the entity-body in bytes
                Connection: keep-alive                                                 // determines if the connection keeps open after transaction
                Last-Modified: Mon. 06 May 2019 00:00:01 GMT                           // last modification date of the resource
                Content-Type: text/html: charset=UTF-8                                 // media type of resource

                <html><body><header><h1>Hello world!</h1></header></body></html>
*/



/*
What is a GET request?
///////////////////////
==SHORT ANSWER==
    •   GET is used to read or retrieve resources.

==EXTENDED ANSWER==
    •   In a GET request, you send a request for data and you receive a response with that data.
            o   For example, if you send am HTTP GET request for customers, you will get an array of objects of those customers.

                    GET REQUEST                             RESPONSE
                __________________                  ________________________
                GET /api/customers     ========>    [
                                                       { id: 1, name:'joe'},
                                                       { id: 2, name:'bob'},                                                  
                                                    ]


    •   And if you want a single customer, you would include that in the address:
            o   The server would then respond by sending back an object with that specific information.

                     GET REQUEST                           RESPONSE
                ____________________                _______________________
                Get /api/customers/1   =========>     { id: 1, name:'joe'}
*/



/*                
What is a PUT request?
///////////////////////
==SHORT ANSWER==
    •   PUT is used to replace an existing resource.

==EXTENDED ANSWER==
    •   In a PUT request, we want to update existing data. 
    •   To update the data via a put request, you would send an HTTP PUT request to the specific customer endpoint AND the data to update with.
    •   The server then responds to the PUT request with the updated values.

                     PUT REQUEST                           RESPONSE
                ____________________                ________________________
                GET /api/customers/1   =========>     { id: 1, name:'alan'}
                { id: 1, name:'alan'}
*/



/*
What is a DELETE request?
////////////////////////// 
==SHORT ANSWER==    
    •  DELETE is used to delete resources.

==EXTENDED ANSWER==
    •  In a DELETE request, you simply want to delete the id.

                    PUT REQUEST                                RESPONSE
                ____________________                     ________________________
                DELETE /api/customers/1   =========>     
 */ 
   
 

 /*
 What is a POST request?
 ///////////////////////
 ==SHORT ANSWER==
    •   POST is used to create new resources.

==EXTENDED ANSWER==
    •   In a POST request, we are adding something to a database.
    
                    POST REQUEST                                RESPONSE
                ____________________                  ___________________________
                POST /api/customers       =========>    { id: 3, name:'charlie'}
                { name:'charlie'}
*/




/* 
2. Why should you use a framework like express?
///////////////////////////////////////////////
==SHORT ANSWER==
    •   While using the core http module is doable, it is not maintainable for building complex applications because 
        there are many things we would need to hard code (e.g. if statements).  A framework give the application a proper structure 
        so we can create more routes while also keeping the application maintainable.                                   

==EXTENDED ANSWER==  
    •   Below is an example of a simple webserver that listens on port 3000 and responds to requests for
        various endpoint urls.
    •   However, this approach is neither ideal or maintainable for building complex application because there are many
        things we would need to hard code (e.g. if statements).
    •   Instead, we can use EXPRESS, which is a light-weight framework for building web applications.

         ______________inefficent way__________________

            const http = require('http');                              <== First, we load the http core module and store it in a constant named "http".

            const server = http.createServer((req, res) => {           <== With the http module, we create a "server" with a callback function with two parameters...
                if (req.url === '/') {                                 <== IF the incoming request url route is '/', then...
                    res.write('Hello world!');                         <== ... the response will write "Hello world!"...
                    res.end();                                         <== ... then end the response.
                }
                if (req.url === '/api/courses') {                      <==  IF the request url route is '/api/courses', then...
                    res.write(JSON.stringify([1, 2, 3,]));             <== ... we respond to the client by writing an arrary of objects using JSON...
                    res.end();                                         <== ... then end the response.
                }
            })

            server.listen(3000);                                       <== For the server that we created above, listen on port 3000.
            console.log('Listening on port 3000...')                   <== ... and log that the server is active on port 3000.

         ______________________________________________
*/



/* 
1. What is express?
///////////////////
    •   Express is a minmalist framework for Node.js that simplifies the creation of modern server-side web applications in Node.
    •   Express gives you built in features and function to more easily use Node for web development, such as easier ways to route requests.
    •   Express provides a request and response object for representing and interacting with HTTP requests and reponses.
*/






/* 
3. How do you install express?
//////////////////////////////
    •   To install express, simply move into the project folder, write "npm init --yes" and then install express by writing "npm install express"
      
    STEP 1: Initialize NPM (with the defaults instead of filling in questions)
    ==========================================================================
        $ npm init --yes
            Wrote to C:\Users\Admin\Desktop\express-demo\package.json:

            {
            "name": "express-demo",
            "version": "1.0.0",
            "description": "",
            "main": "index.js",
            "scripts": {
                "test": "echo \"Error: no test specified\" && exit 1"
            },
            "keywords": [],
            "author": "",
            "license": "ISC"
            }

    STEP 2: Install express
    =======================
        $ npm install express
            npm notice created a lockfile as package-lock.json. You should commit this file.
            npm WARN express-demo@1.0.0 No description
            npm WARN express-demo@1.0.0 No repository field.

            + express@4.17.1
            added 50 packages in 2.191s
*/



















/* 
5. How do you create a basic web server with express?
//////////////////////////////////////////////////////

    Setup project:
    ==============
        STEP 1: Create a folder for your project.
        STEP 2: Inside the folder, write the command "npm init" (with --yes if you want fast default installation) 
                to create a package.json file.
        STEP 3: Install the express framework with the command "npm install express".
        STEP 4: Create a new file in your text editor called "index.js".

    How do you create an express server?
    ====================================   
        STEP 5: Load the express module:

                ______________________________________________
                
                    const express = require('express');        <== Load the express module and store is as "express"

                ______________________________________________


        STEP 6: Call the function express and store the object with the convetional name "app":

                ______________________________________________

                    const express = require('express');
                    const app = express();                      <== call "express" and store it as "app"

                ______________________________________________
                
                
            •   Once we have the app object, we can then useful methods like:
                        
                            app.get()     
                            app.post()      
                            app.delete()    
                            app.put()
                            

   How do you create a route?
   ==========================
        •  Define a route that responds to specific HTTP requests (in this case GET ):
    
        STEP 7: To create a GET request, we call "app.get()" with 2 arguments, the path (i.e. url or '/') and a  
                callback function (i.e. the function that will be called when we get a HTTP request to the endpoint 
                in the first argument).

                    GET object method             callback function (i.e. route handler) which can be done in es6 (i.e. (req, res) ==> {} or function declaration).
                                \                 /
                                app.get('/', function(req, res) {...});
                                        |                    \
                                        path                  code block
    
                ______________________________________________

                    const express = require('express');
                    const app = express();

                    app.get('/', function(req, res) => {        <== route handler
                        // code here
                    });
                ______________________________________________


        STEP 8: Define the callback function and the response to the request
            •   Inside the code block of this request object, we can utilize a few useful properties that give us 
                information about the incoming request.  
            •   For more information, see express documentation: https://expressjs.com/en/4x/api.html#req
                    o   In this case, we want the response to send back a message saying "Hello world!".    
                    o   The code body of the callback function, or the route handler, contains the instructions of what to do 
                        when a request is made to the endpoint '/'.
        
                ______________________________________________

                    const express = require('express');
                    const app = express();

                    app.get('/', function(req, res) {           <== The callback function (i.e. route handler) upon recieving a request from the "/" path... 
                        res.send('Hello world!')                <== ... responds by sending back the message "Hello world!".
                    });
                ______________________________________________


    How do you listen on a given port for requests?
    ================================================
        STEP 9: Listen on a given port for a request and a function that will be called when the app starts listening on the given port.

                ______________________________________________ 

                    const express = require('express');
                    const app = express();

                    app.get('/', function(req, res) {
                        res.send('Hello world!')
                    });;

                    app.listen(3000, function() {                  <== here we listen on port 3000 and an optional log a message.
                        console.log('listening on port 3000...');
                    });                          
                ______________________________________________

                OPTIONAL: If you go to your browser and type in "localhost:3000" you will see the message "Hello world!"


    How do you add another route to your server?
    ============================================
        •   To add another route, call app.get again, specify the path and add the callback function 
            with the desired response.

                    ______________________________________________ 

                    const express = require('express');
                    const app = express();

                    app.get('/', function(req, res) {
                        res.send('Hello world!')
                    });

                    app.get('/api/courses', function(req, res) {    <== Additional get request that sends back a list of courses.
                        res.send([1,2,3,4,5]);
                    });

                    app.listen(3000, function() {
                        console.log('listening on port 3000...');
                    });
                    ______________________________________________ 

*/





/*
Additional resources
=====================
https://www.ntu.edu.sg/home/ehchua/programming/webprogramming/HTTP_Basics.html -- request/response example
https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Introduction -- interesting MDN intor to server side programming
https://www.codecademy.com/articles/http-requests -- HTTP requests

*/