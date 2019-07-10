"use strict";
// TOPIC /////////////////////////////////////////////////////////////////////////////////////////////////////
//    Express Middleware
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//     1. 
//
// NOTES ////////////////////////////////////////////////////////////////////////////////////////////////////
//     1. Useful overview of information on Express Middleware from study, research, tutorials, mentor
//        meetings, peer discussions, and good ole' fashioned curiosity.  I've put the document in Question
//        andAnswer format for improved readability.
//     2. Information on Express: https://expressjs.com/
//     3. Express documentation: https://expressjs.com/en/4x/api.html
//     4. Navigation Note: Highlight the question, press ctrl+f and navigate to the next occurence to find the Question faster.
// 
//////////////////////////////////////////////////////////////////////////////////////////////////////////////


/* 
15. What is middleware?
///////////////////////
==SHORT ANSWER==
    •   Middleware (or middleware function), which is a core concept in express, which takes a request object and either returns 
        a reponse to the client or passes control to another middleware function.   

==EXTENDED ANSWER==
    •   One example of a middleware function is the route handlers we use for GET, PUT, POST, and DELETE.
    •   In express, every route handler function is technically a middleware function because it takes a request object and 
        returns a response to the client.

                        app.get('/api/courses', function(req, res) {            <= the route handler function is middleware bc it terminates the req/res cycle.
                            res.send(courses);
                        });

    •   Another form of middleware is like the code below.
        o   This middleware function reads the request and if there is a json object in the body of the request, it will parse the body
            of the request into a json object and then set the req.body property.                   

                        app.use(express.json());       <== when you call express.json, that method returns a middleware function. 


    What is the request processing pipeline?
    ========================================
    •   In a request processing pipeline, we can have one or more middleware function.
    •   Each middleware function either terminates the request/reponse cycle by returning a reponse object OR
        pass control to another middleware function. 
    •   Express has a few built-in middleware function, but you can also create custom middleware functions that you can put at
        the front of request processing pipeline so that every request recieved on our server will go through a middleware function.
    •   With custom middleware functions, you can perform "cross-cutting" concerns, like logging, authentication, authorization, etc.
    •   In fact, you could say that an express app is nothing more than a bunch of middleware functions. 
        
                For example, the following has 2 middleware functions:  

                                        This is a middleware function that parses request body into
                                        a json object. However, this does not terminate the req/res
                                        cycle.
                                         /
                         REQUEST ==> [json()] ==> [route()] ==> RESPONSE
                                                        \
                                                        So control passes to the second middleware function, which is a route
                                                        handler.  In the route handler, we have the request object with the body
                                                        property populated, where we perform some operation and then terminate the 
                                                        req/res cycle by returning a response to the client.
*/


/* 
16. How do you define a custom middleware function in a seperate module?
////////////////////////////////////////////////////////////////////
    •   To use a  middleware function, we import and install using app.use().
    •   We use "app.use()" to install middleware function in our request processing pipeline.
    •   And within the body of the function at the end, we call "next()" to pass control to the next function
        in the middleware pipeline.
        o   If we dont terminate the request/response cycle with next(), the request will
            end up hanging (i.e. in postman, a GET request will continue "Loading..." without any response) 
            because we did not pass control to another middleware function to terminate the req/res cycle.  
    

                                route handler        "next" refers to the next middleware function in the pipeline
                                            \        /
                        app.use(function(req, res, next) {
                            console.log("Logging");             <= code to be executed, which will show "Logging..." in the console.
                            next();
                        });      \
                                  Pass control to the next middleware function in the pipeline.


    •   And if we add ANOTHER middleware function, we will see the consecutive execution that occurs in the request processing pipeline:                   
                    
    
                        app.use(function(req, res, next) {              
                            console.log("Logging...")
                        });                                          <== console will print "Logging..."

                        app.use(function(req, res, next) {              
                            console.log("Authenticating...")
                        });                                          <== console will then print "Authenticating..."


==PRACTICAL EXAMPLE==
    •  Assuming you have two files, a main index.js and a middleware module file:
    
    STEP 1: Create a new module(i.e. file) to place your middleware:
    ===============================================================
    
                        function logger(req, res, next) {                <== middleware to be exported
                            console.log("Logging...")
                        };

    STEP 2: Export the module sing module.exports.logger:
    =====================================================
                        
                        function logger(req, res, next) {              
                            console.log("Logging...")
                        };

                        module.exports = logger;                         <== module exporting a single function, specifically logger.

    STEP 3: In your main file (i.e. index.js), we first load the new module:
    ========================================================================

                        const logger = require('./logger');             <= load the logger module (in the current folder) and store as a constant.

    STEP 4: Then you install the new logger module by using app.use():
    ==================================================================

                        app.use(logger);                              <== logger passed to the app.use() function.
*/


/* 
17. How do you use built-in middleware?
//////////////////////////////////////
    •   For example, the "express.json()" is a built in middleware function that parses the body of the request and
        if there is a json object, it will populate the "req.body" property.

    •   Another example is url encoded, which parses incoming reaqests with url encoded payloads. 
        o   For example: key=value&key=value&key=value
        o   Although it is not used that often, if you have an html form with input fields, and post that form to your server
            the body of your request will look like the example above... it is a url encoded payload request.

    What is the urlencoded() method and what does it do?
    ====================================================
    •   To use urlencoded() format with the object extended:true passed to it, you can pass arrays and complex objects
        using the urlencoded format.

                        app.use(express.urlencoded( { extended: true }));  
                                            /                 \
                                        method                object with the property "extended" set to true.

    What is the "static" method and what does it do?
    ================================================
    •   "Static" is used to put all static assest like css, images, etc. inside a folder, such as "public".
    •   This is middleware that serves static content from a public folder.

                        app.use(express.static('public'));
                                                    \
                                                    folder where we put our "public" files like css.  
*/                                                           



/* 
18. What is third-party middleware?
////////////////////////////////////
    •  Third party middlewareadds functionality to express apps.
    •  Third party middleware should be using sparingly as the more middleware you use, it will slow down your
       request porcessing for your application.
    •  There are a few useful third-party middleware function you may want to use in your projects:
        o  For example, "helmet" secures your Express apps by setting various HTTP headers 
        o  Another is "morgan", which logs http requests (i.e. will log a message with each request sent to the server)              
    
    •  For a complete list of thrid-party middleware, see documentation https://expressjs.com/en/resources/middleware.html                   

    How do you install thrid-party middleware?
    ==========================================
    •   In this example, we'll install morgan, which logs http requests.
        
        STEP 1: First, install the third-party middleware (helmet) with npm:
        ====================================================================

                        npm install morgan     

        STEP 2: Then in our index module (i.e. index.js), you load the third-party middleware (helment).
        ===============================================================================================
                        
                        const morgan = require('morgan');
                        
        STEP 3: Now return the middleware using app.use():
        ==================================================
        
                        app.use(morgan());

        OPTIONAL BASED ON SPECIFIC MIDDLEWARE: Morgan has various options for formats (see documentation), such as "tiny":
        ================================================================================================================== 

                        app.use(morgan('tiny'));

                o   The result will be that when you send a GET request to the server, morgan will log the http request:

                        $ nodemon index.js
                        [nodemon] 1.19.1
                        [nodemon] to restart at any time, enter `rs`
                        [nodemon] watching: *.*
                        [nodemon] starting `node index.js`
                        Listening on port 3000...
                        GET /api/courses 200 95 - 2.022 ms           <== logged GET request by morgan in "tiny" format.
*/