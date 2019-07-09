"use strict";
// TOPIC /////////////////////////////////////////////////////////////////////////////////////////////////////
//     Request and Response Fundamentals
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//     12. What is an HTTP request and how does the HTTP Protocol request-response cycle work?
//     13. What is a GET request?
//     14. What is a PUT request?
//     15. What is a DELETE request?
//     16. What is a POST request?
//
// NOTES ////////////////////////////////////////////////////////////////////////////////////////////////////
//     1. Useful overview of information of request and response objects from study, research, tutorials, 
//        mentor meetings, peer discussions, and good ole' fashioned curiosity.  I've put the document in Question
//        and Answer format for improved readability.
// 
//////////////////////////////////////////////////////////////////////////////////////////////////////////////





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
 

    Example of an HTTP Protocol request-reponse cycle 
    ==================================================

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