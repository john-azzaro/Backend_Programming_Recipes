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
Why should you use express?
////////////////////////////
==SHORT ANSWER==
    •   Below is an example of a simple webserver that listens on port 3000 and responds to requests for
        various endpoint urls.
    •   HOWEVER, this apporach is not ideal for building complex application because there are many
        things we would need to hard code (e.g. if statements).
    •   Instead, we can use EXPRESS, which is a light-weight framework for building web applications.

==EXAMPLE==
            const http = require('http');                              <== loads the http core module and stores it in a constant named "http".

            const server = http.createServer((req, res) => {           <== creates the "server" will listen for requests...
                if (req.url === '/') {                                 <== ... such as if the request url is '/', then do something....
                    // do something...
                }
                if (req.url === '/api/courses') {                      <== ... or if the request url is '/api/courses', then do something else...
                    //do something...
                }
            })

            server.listen(3000);                                       <== For the server that we created above, listen on port 3000.
*/



/* 
What is express?
/////////////////

*/



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

    EXAMPLE
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
    
    3 36

*/




