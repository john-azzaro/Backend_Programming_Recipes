"use strict";
// TOPIC /////////////////////////////////////////////////////////////////////////////////////////////////////
//     Express framework 
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//      1. 
//
// NOTES ////////////////////////////////////////////////////////////////////////////////////////////////////
//     1. Useful overview of information on Express web framework from study, research, tutorials, mentor
//        meetings, peer discussions, and good ole' fashioned curiosity.  I've put the document in Question
//        andAnswer format for improved readability.
//     3. Information on Express: https://expressjs.com/
// 
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* 
What is a RESTful service?
//////////////////////////

    •   Almost all application follow a "client/server" relationship.
    •   The "client" is the front-end, which is our application.
    •   The "server" is the back-end, which is where the front-end talks goes to in order to get data.
    •   The communication between the client and the server occurs through "HTTP Protocol".
    •   The server "exposes" a bunch of services that are accessible via HTTP protocol.
    •   The client calls those services by sending an HTTP request.
    •   REST, which stands for Representational State Transfer, is a convention for what is used to build these HTTP services.
    •   HTTP protocol principles provide support for CRUD operations.
    •   CRUD stands for Create, Read, Update, and Delete.

    REST
    ==========
==SHORT ANSWER==
    •   REST defines a set of conventions for creating HTTP services that expose resources such as creating a 
        resource (POST), updating it (PUT), reading it (GET), and deleting it (DELETE).
    
==EXTENDED ANSWERS==  
    •   Suppose you have a client app that manages a list of customers.
    •   For example, the service is exposed in an endpoint like https://website.com/api/customers where "/customers" refers 
        to a list of customers.
    •   In the REST world, the "/customers" part of the endpoint is called the "resource".
    •   RESOURCES can be exposed (e.g. customers, user data, etc.) at verious endpoints.
    •   All the operations surrounding the "customers" like creating a customer, deleting a customer, updating, etc. would be done
        by sending an HTTP request to the customers endpoint.
    •   The type of HTTP request determines the type of operation. 
    •   Every HTTP request has a verb(method) that determines its type or intention.
    •   HTTP methods include GET(getting data), POST(posting data), DELETE(deleting data), and PUT (updating data) 
    
    GET REQUEST EXAMPLE
    ====================
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
                              
                
    PUT REQUEST EXAMPLE
    =====================
    •   In a PUT request, we want to update existing data. 
    •   To update the data via a put request, you would send an HTTP PUT request to the specific customer endpoint AND the data to update with.
    •   The server then responds to the PUT request with the updated values.

                     PUT REQUEST                           RESPONSE
                ____________________                ________________________
                GET /api/customers/1   =========>     { id: 1, name:'alan'}
                { id: 1, name:'alan'}


    DELETE REQUEST EXAMPLE   
    ======================        
    •  In a DELETE request, you simply want to delete the id.

                    PUT REQUEST                                RESPONSE
                ____________________                     ________________________
                DELETE /api/customers/1   =========>     
               
    CREATE REQUEST EXAMPLE
    ======================
    •   In a CREATE request, we are adding something to a database.
    
                    POST REQUEST                                RESPONSE
                ____________________                  ___________________________
                POST /api/customers       =========>    { id: 3, name:'charlie'}
                { name:'charlie'}
*/


/* 
Why should you use express?
////////////////////////////
==SHORT ANSWER==
    •   Below is an example of a simple webserver that listens on port 3000 and responds to requests for
        various endpoint urls.
    •   HOWEVER, this apporach is not ideal for building complex application because there are many
        things we would need to hard code (e.g. if statements).
    •   Instead, we can use EXPRESS, which is a light-weight framework for building web applications.

==EXAMPLE==
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
            console.log('Listening on port 3000...')   
*/



/* 
What is express?
/////////////////

*/













/* 



*/

