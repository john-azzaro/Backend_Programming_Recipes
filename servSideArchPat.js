"use strict";
// TOPIC /////////////////////////////////////////////////////////////////////////////////////////////////////
//     Server-Side Architectural Patterns
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//      
//      1. What is a server-side architectural pattern?
//      2. What two things does a client-facing server-side application require?
//      3. What is REST?
//      4. What is the primary concern of a REST API?
//      5. What are the four generic operations that most REST API's support?
//         + What does the acronym CRUD stand for?
//      
//      
// NOTES ////////////////////////////////////////////////////////////////////////////////////////////////////
//     1. Useful overview of information on Server side Architectural patterns from study, research, tutorials, 
//        mentor meetings, peer discussions, and good ole' fashioned curiosity.  I've put the document in Question
//        and Answer format for improved readability.
// 
//////////////////////////////////////////////////////////////////////////////////////////////////////////////




/* 
1. What is a server-side architectural pattern?
////////////////////////////////////////////////
==SHORT ANSWER==    
    •   A server-side architectural pattern is a a common pattern we use many, if not most, of the time.   
*/



/* 
2. What two things does a client-facing server-side application require?
//////////////////////////////////////////////////////////////////////////
==SHORT ANSWER==    
    •   A client-facing app requires two things:
        1. A way to RETRIEVE intial HTML, CSS, and JavaScript to run the app.
        2. API endpoints that expose needed resources.
*/


/* 
3. What is REST? 
/////////////////
==SHORT ANSWER==
    •   REST stands for REpresentational State Transfer.
    •   REST is an architectural style and set of principles that defines a set of standard conventions for creating 
        HTTP services for providing access (i.e. exposing) resources such as creating a resource (POST), updating it (PUT), 
        reading it (GET), and deleting it (DELETE).      


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
4. What is the primary concern of a REST API?
/////////////////////////////////////////////
==SHORT ANSWER==
    •   The primary concern of a REST API is to communicate the state of resources.

==EXAMPLE==
    •   For example, a REST API resource could be anything from a to-do list, a blog post, set of blog posts, representation of a user, etc.
    •   Thus, a REST API needs to convey those resources, such as CRUD operations.
*/



/* 
5. What are the four generic operations that most REST API's support?
//////////////////////////////////////////////////////////////////////
==SHORT ANSWER==      
    •   There are four generic operations that REST API's support, such as:
        o   CREATING resources.
        o   READING (i.e. retrieving) resources.
        o   UPDATING resources.
        o   DELETING resources.

    What does the acronym CRUD stand for?
    =====================================
    •   CRUD stands for "Create, Update, Update, Delete" and is frequently used when developers talk about CRUD 
        operations or CRUD applications.
*/




/* 
How does a RESTful API expose resources?
/////////////////////////////////////////
==SHORT ANSWER==
    •   A RESTful API exposes resources through URLS. 
        o   However, we do NOT use URLS to create an endpoint, but instead use HTTP methods to indicate the 
            appropriate actions, like: get, post, put, delete.

==EXAMPLE==
    •   For example, if you have a single endpoint (i.e. https://mywebsite.com/users), the "/users" is for exposing user resources.
        o   when the client makes a request to the "/users" endpoint, the API would return a list of users!

    •   In another example, suppose the client makes a request to https://mywebsite.com/users/my-id. 
        o   When the client makes a request to the "/users/my-id", the API will return a single object with user corresponding to that id.
*/





