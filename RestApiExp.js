"use strict";
// TOPIC /////////////////////////////////////////////////////////////////////////////////////////////////////
//     REST API's with Express
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//      1. What is REST? 
//      2. What are the four generic operations of a REST API?
//
//
// NOTES ////////////////////////////////////////////////////////////////////////////////////////////////////
//     1. Useful overview of information about Express fundamentals from study, research, tutorials, 
//        mentor meetings, peer discussions, and good ole' fashioned curiosity.  I've put the document in Question
//        and Answer format for improved readability.
// 
///////////////////////////////////////////////////////////////////////////////////////



/* 
1. What is REST?  
///////////////////////////////
==SHORT ANSWER==
    •   REST stands for REpresentational State Transfer.
    •   REST is a style of software architecture and a set of principles for designing API's.
    •   REST is an architectural style that defines a set of standard conventions for creating HTTP services for providing
        access (i.e. exposing) resources such as creating a resource (POST), updating it (PUT), reading it (GET), and 
        deleting it (DELETE).
==EXTENDED ANSWER==
    •   REST is a convention for what is used to build HTTP services.
    •   Almost all applications follow a "client/server" relationship.
        o   The "client" is the front-end, which is our application.
        o   The "server" is the back-end, which is where the front-end talks goes to in order to get data.
    •   The communication between the client and the server occurs through "HTTP Protocol".
        o   The server "exposes" a bunch of services that are accessible via HTTP protocol.
        o   The client calls those services by sending an HTTP request.  
        o   HTTP protocol principles provide support for CRUD operations.
        o   CRUD stands for Create, Read, Update, and Delete.
==EXAMPLE==
    •   Suppose you have a client app that manages a list of customers.
        o   The service is exposed in an endpoint like https://website.com/api/customers where "/customers" refers 
            to a list of customers.
        o   In the REST world, the "/customers" part of the endpoint is called the "resource".
            o   RESOURCES can be exposed (e.g. customers, user data, etc.) at verious endpoints.
            o   All the operations surrounding the "customers" like creating a customer, deleting a customer, updating, etc. would be done
            by sending an HTTP request to the customers endpoint.
        o   The type of HTTP request determines the type of operation. 
            o   Every HTTP request has a verb(method) that determines its type or intention.
            o   HTTP methods include GET(getting data), POST(posting data), DELETE(deleting data), and PUT (updating data) 
*/


/* 
What are the central principles of REST?
////////////////////////////////////////
==SHORT ANSWER==
    •   An API can be considered a REST API if it hasd the following features:
        1. The client handles the front end, the server handles the back end and both can be replaced independently of each other.
        2. The API is "stateless", meaning NO client data is stored on the server between the requests... session state is stored on the client side.
        3. The API is "cacheable", meaning the clinet can store the response to improve performance.
*/




/* 
What are the four generic operations that most REST API's support?
/////////////////////////////////////////////////////////////////////
==SHORT ANSWER==
    •   There are FOUR generic operations that most REST API's support:
            1. Creating
            2. Reading
            3. Updating
            4. Deleting

==EXTENDED ANSWER==
    •   "Creating" means we CREATE a new resource.
    •   "Reading" means we RETRIEVE an existing resource.
    •   "Updating" means we UPDATE an exiting resource with a newer version.
    •   "Deleting" means we remove an exisiting resource.

    •   This is where the "CRUD" acronym comes from (create, read, update, delete). 
*/


/* 
How does a RESTful API expose resources?
/////////////////////////////////////////
==SHORT ANSWER==
    •   A RESTful API exposes resources through URL's (i.e. endpoints).

==EXAMPLE==
    •   Suppose you have a single endpoint "/books" that is used for exposing a list of books on your website.
    •   When a client makes a GET request to "/books", the API will return that list of books to them.
*/


/* 
How would you create an endpoint in a REST API?
////////////////////////////////////////////////
==SHORT ANSWER==
    •   To create an endpoint in a REST API, the endpoint is essentially a noun (i.e. a thing) and HTTP methods are verbs 
        that indicate the appropriate actions.  

==EXAMPLE==
    •   



*/





/* 
https://restfulapi.net/ -- REST philosophy
*/