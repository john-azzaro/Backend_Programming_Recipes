"use strict";
// TOPIC /////////////////////////////////////////////////////////////////////////////////////////////////////
//     Express Fundamentals
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//      1. What is REST? 
//      2. What are the four generic operations of a REST API?
//
//      1. What is a web server and what are the two important jobs a webserver should do?
//
//      2. What is an HTTP request and how does the HTTP Protocol request-response cycle work?
//         + How does the HTTP Protocol request-reponse cycle work?
//
//      3. What types of HTTP requests can we send to a server?
//         + What is a GET request?
//         + What is a PUT request?
//         + What is a DELETE request?
//         + What is a POST request?   
//
//      4. What is a URL and what are it's components (i.e. routes)?
//      5. What is a route?    
//
//      5. Why should you use a web application framework (like express)?
//      6. What is express?
//      7. How do you install express?
//
//      X.  What is REST?
//
// NOTES ////////////////////////////////////////////////////////////////////////////////////////////////////
//     1. Useful overview of information about Express fundamentals from study, research, tutorials, 
//        mentor meetings, peer discussions, and good ole' fashioned curiosity.  I've put the document in Question
//        and Answer format for improved readability.
// 
//////////////////////////////////////////////////////////////////////////////////////////////////////////////



/* 
1. What is a web server and what are the two important jobs a webserver should do?
//////////////////////////////////////////////////////////////////////////////////
==SHORT ANSWER==
    •   The role of a web server it to respond to HTTP requests from clients with HTTP responses.   

    •   A web server should perform 2 important jobs:
            1.  The server must appropriatley route the request to the correct request handler. For example, requests 
                to /current-weather might be handled by a getCurrentWeather function.
            2.  The request handler needs to know how to translate the information fromt he request into an appropriate 
                response it can send back.
*/



/* 
2. What is an HTTP request and how does the HTTP Protocol request-response cycle work?
////////////////////////////////////////////////////////////////////////////////////////
==SHORT ANSWER==
    •   An HTTP request asks the server to return a resource available at a particular place, specifically at the host specified 
        in the requets headers, plus the path specified in the inital line.

    •   In an HTTP request-response cycle, servers and clients communicate via HTTP Protocol and resources like HTML which are sent 
        from the server to your browser are generated when you request it

==EXAMPLE==
        1.  The client makes a REQUEST to an HTTP server by opening a connection to the server and sending a request message.
            o   The program on the web server looks at this request and creates an HTML page specifically for that request.
        2.  The server sends a RESPONSE to the request in the form of an HTML file with headers and a body.         
            o   The pages that come from that request are in .html files that are either static (unaltered from the server) 
                or dynamic (created as they are requested).         



    How does the HTTP Protocol request-reponse cycle work?
    ======================================================

        1. When you enter a URL in the address box of the browser, the browser will translate that into a request message.

                • http://www.myWebsite.com/index.html
                


        2. REQUEST:  First, in order to load the page the client sends a request to the HTTP server to open a connection to the server for an HTML file
           in the "public" folder where all our static assets live. This request method (and path) are used to request the right request handler.

                        
                GET /public/index.html HTTP/1.1                       // Request method using GET (retrieve data) at this endpoint (in a public folder).
                HOST: www.myWebsite.com                               // The domain name of the server.
                Accept: image/gif, image/jpeg, •/•                    // Advertises which content types the client is able to understand.
                Accept-Language: en-us                                // Advertises which language the client is able to understand.
                Accept-Encoding: gzip, deflate                        // The encoding to be used when the resource is sent back.
                User-Agent: Mozilla/4.0                               // Allows network protocol peers to identify the application type, OS, etc.


        3. RESPONSE: Second, the response object from the server will send a response to the request consisting of headers and a body

                HTTP/1.1 200 OK
                X-Powered-By: Express                                                  // note: should be disabled for security reason.
                Content-length: 47                                                     // size of the entity-body in bytes
                Connection: keep-alive                                                 // determines if the connection keeps open after transaction
                Last-Modified: Mon. 06 May 2019 00:00:01 GMT                           // last modification date of the resource
                Content-Type: text/html: charset=UTF-8                                 // media type of resource

                <html><body><header><h1>Hello world!</h1></header></body></html>
*/



/*
3. What types of HTTP requests can we send to a server?
////////////////////////////////////////////////////////
==SHORT ANSWER==
    •   There are many types of HTTP requests we can send to a server, but the most common are:

            1. GET, which is used to read or retrieve resources.
            2. PUT, which is used to replace an existing resource.
            3. DELETE, which is used to delete resources.
            4. POST, which is used to create new resources.
            5. PATCH, which is used to update part of an existing resource.


    What is a GET request?
    =======================  
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

                

    What is a PUT request?
    =======================
    •   In a PUT request, we want to update existing data. 
    •   To update the data via a put request, you would send an HTTP PUT request to the specific customer endpoint AND the data to update with.
    •   The server then responds to the PUT request with the updated values.

                     PUT REQUEST                           RESPONSE
                ____________________                ________________________
                GET /api/customers/1   =========>     { id: 1, name:'alan'}
                { id: 1, name:'alan'}



    What is a DELETE request?
    ==========================   
    •  In a DELETE request, you simply want to delete the id.

                    PUT REQUEST                                RESPONSE
                ____________________                     ________________________
                DELETE /api/customers/1   =========>     



    What is a POST request?
    =========================
    •   In a POST request, we are adding something to a database.
    
                    POST REQUEST                                RESPONSE
                ____________________                  ___________________________
                POST /api/customers       =========>    { id: 3, name:'charlie'}
                { name:'charlie'}

                                        
    What is a PATCH request?
    =========================
    •   In a PATCH request, we are updating an exiting resource that exists in the database.

                    PATCH REQUEST                                RESPONSE
                 ____________________                    ___________________________
                 PATCH /api/customers       =========>    { id: 4, name:'Teddy'}
                { id: 4, name:'Teddy'}
*/



/* 
4. What is a URL and what are it's components?
///////////////////////////////////////////
    •   A URL (uniform resource locator), is a reference to a web resource that specifies its location.
    •   A URL can contain the following:


           protcol                     Top-level domain     file path (route)                   fragment (hash)
               \                              |                 |                                   /
                https://www.myexamplewebsite.com:8080/resource/path/file.html?name=value&foo-bar#anchor
                         |                        |                                   |
                     sub-domain                  port                            query string
*/



/* 
5. What is a route?
///////////////////
==SHORT ANSWER==
    •   A "route" determines the way an application responds to a client request to a particular endpoint.
    
==EXAMPLE==
 
    http://localhost:3000/courses     <== if a GET request is made to this URL, then the repsonse would be a list of courses.
    http://localhost:3000/users       <== if a GET request is made to this URL, then the reponse would be a list of users.
    http://localhost:3000/prices      <== if a GET request is made to this URL, then the reponse would be a list of prices.

*/




/* 
5. Why should you use a web application framework (like express)?
//////////////////////////////////////////////////////////////////
==SHORT ANSWER==
    •   While using the core http module is doable, it is not maintainable for building complex applications because 
        there are many things we would need to hard code (e.g. if statements).  
    •   Using a framework (like express) gives the application a proper structure so we can create more routes while also keeping the 
        application maintainable.                                   

==EXAMPLE==  
    •   Below is an example of a simple webserver that listens on port 3000 and responds to requests for
        various endpoint urls.
            o   However, this approach is neither ideal or maintainable for building complex application because there are many
                things we would need to hard code (e.g. if statements).
            o   Instead, we can use EXPRESS, which is a light-weight framework for building web applications.

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
6. What is express?
///////////////////
    •   Express is a Node.js web application framework designed for building single-page, multi-page, and hybrid web applications.
    •   Express is a lightweight, minmalist framework for Node.js that simplifies the creation of modern server-side web applications in Node.
    •   Express gives you built in features and function to more easily use Node for web development, such as easier ways to route requests.
    •   Express provides a request and response object for representing and interacting with HTTP requests and reponses.
    •   Express is part of the MERN software stack (MongoDB, Express, React, Node)
*/



/* 
7. How do you install express?
//////////////////////////////
    •   To install express, move into the project folder, initialize npm (i.e. "npm init --yes") and then simply install 
        express by writing "npm install express"
      
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
Additional resources
=====================
https://www.ntu.edu.sg/home/ehchua/programming/webprogramming/HTTP_Basics.html -- request/response example
https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Introduction -- interesting MDN intor to server side programming
https://www.codecademy.com/articles/http-requests -- HTTP requests
https://www.guru99.com/node-js-express.html -- intro to framework
https://medium.com/datadriveninvestor/most-popular-technology-stack-to-choose-from-full-stack-vs-mean-stack-vs-mern-stack-in-2019-d12c0a17439a --MERN stack, agile, etc.
*/


