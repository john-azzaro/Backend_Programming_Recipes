"use strict";
// TOPIC /////////////////////////////////////////////////////////////////////////////////////////////////////
//    Express Middleware
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//     1. What is middleware?
//     2. What is the request processing pipeline?
//     3. How do you add middleware to your express app and what must middleware do?
//     4. What types of middleware can you use for express apps?
//     5. How do you use built-in middleware?
//     6. What is third-party middleware?
//     7. How do you use a custom middleware function in a seperate module?
//     8. Can you modify a request object using middleware?
//     9. What is Cross Origin Resource Sharing (CORS)?
//        + How do you configure response headers to allow scripts hosted on other domains to make requests to your app?
//    10. How do you handle redirects using middleware?
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
1. What is middleware?
///////////////////////
==SHORT ANSWER==
    •   Middleware is the organizing principle of Express applications.
    •   Middleware (or middleware function) takes a request object and either returns a reponse to the client 
        or passes control to another middleware function (i.e. the request processing pipeline). 
    •   Middleware encourages you to write modular, resuable, and functional code.    

==EXTENDED ANSWER==
    •   One example of a middleware function is the route handlers we use for GET, PUT, POST, and DELETE.
            o   In express, every route handler function is technically a middleware function because it takes a request object and 
                returns a response to the client.

                    _____________________________________________________

                        app.get('/api/courses', function(req, res) {              <= the route handler function is middleware bc it terminates the req/res cycle.
                            res.send(courses);
                        });
                    _____________________________________________________

    •   Another form of middleware is like the code below.
            o   This middleware function reads the request and if there is a json object in the body of the request, it will parse the body
                of the request into a json object and then set the req.body property.                   

                    ________________________________

                        app.use(express.json());           <== when you call express.json, that method returns a middleware function. 

                    ________________________________    
*/



/* 
2. What is the request processing pipeline?
///////////////////////////////////////////
==SHORT ANSWER==
    •   In a request processing pipeline, we can have one or more middleware functions where a middleware function either terminates 
        the request/reponse cycle by returning a reponse object OR passes control to another middleware function.                    

==ANALOGY==
    •   Think of middleware as a bucket brigade, passing request from one person to the next.  
    
==EXTENDED ANSWER==
    •   Express has a few built-in middleware functions, but you can also create custom middleware functions that you can put at
        the front of request processing pipeline so that every request recieved on our server will go through a middleware function.
            o   With custom middleware functions, you can perform "cross-cutting" concerns, like logging, authentication, authorization, etc.
            o   In fact, you could say that an express app is nothing more than a bunch of middleware functions. 
        
            o   For example, the following has 2 middleware functions:  

                                        2. This is a middleware function that parses request body into
                                        a json object. However, this does not terminate the req/res
                      1                 cycle.                           4
                       \                 /                              /  
                         REQUEST ==> [json()] ==> [route()] ==> RESPONSE
                                                        \
                                                        3. So control passes to the second middleware function, which is a route
                                                        handler.  In the route handler, we have the request object with the body
                                                        property populated, where we perform some operation and then terminate the 
                                                        req/res cycle by returning a response to the client.
*/



/* 
3. How do you add middleware to your express app and what must middleware do?
//////////////////////////////////////////////////////////////////////////////
==SHORT ANSWER==
    •  To add middleware to your express app, you need to first create a middleware function with a request object, response object, and next() 
       to move onto the next middleware function AND install that middleware in the pipeline with "app.use"
    •   IMPORTANT: Middleware MUST do one of two things: either return a response or call next() otherwise the app will hang.


==BASIC EXAMPLE==  
                        _________________________________________________

                            app.use( function(req, res, next) {              <== installs anonymous middleware function with req, res, and next.
                                console.log("Logging...")
                                next()
                            });                                         
                        _________________________________________________


==PRACTICAL EXAMPLE==

    STEP 0: Starting with a basic express app
    ==========================================
    •   Suppose we had a basic express app with two routes:
            1.  (with request to /api/bar... the response will be a JSON object {bar:"foo"})
            2.  (with request to /api/bar... the response will be a JSON object {bar:"foo"})                   
    
                        _________________________________________________

                                const express = require('express');                              <== load express and store as "express".
                                const app = express();                                           <== execute express and store as "app".  

                                app.get('/api/foo', function(req, res) {                         <== Route 1 
                                return res.json({foo: 'bar'});
                                });

                                app.get('/api/bar', function(req, res)  {                        <== Route 2 
                                return res.json({bar: 'foo'});
                                })

                                app.listen(8080);                                 

                        _________________________________________________


    STEP 1: Create your middleware function
    =======================================
    •   In this example, we want to create middleware that checks to see if some condition is true about the request object.

    •   To add middleware, you must first make your middleware function.                           
    •   Each middleware is essentially a function and each middleware function stack has 3 things:
            1. A request object (i.e. route handler).
            2. A response object.
            3. A "next" function.          
                        ___________________________________________________________________________

                                                                       1    2     3
                                                                       |    |     |
                                const myMiddlewareFunction = function(req, res, next)  {         <== 1. create a middleware function.
                                    // code here           
                                    next();
                                }

                        ____________________________________________________________________________
    
    •   Then build-out the logic.
            o   In this case, we want to create a middleware function that checks to see that if the response 
                is true, sent a message, and if not move on to the next middleware function (if there is any).    
            o   Within the body of this function, we call "next()" to pass control to the next function
                in the middleware pipeline.  
            o   If we dont terminate the request/response cycle with next(), the request will
                end up hanging (i.e. in postman, a GET request will continue "Loading..." without any response) 
                because we did not pass control to another middleware function to terminate the req/res cycle.                  

                        ___________________________________________________________________________


                            const myMiddlewareFunc = function(req, res, next) {                    
                                console.log(req.url);                                             ... log the req.url...
                                if (someConditionIsTrue(req)) {                                   ... if the condition is true...
                                    return res.json({msg: 'someMessage'});                        ... return this response.
                                }
                                else {                                                            ... if not ...
                                    next();                                                       ... call next to trigger next middleware function
                                }
                            }

                        ___________________________________________________________________________

    STEP 2: Install the middleware function using app.use()
    ========================================================                        
    •   Then we use "app.use()" to install a middleware function in our request processing pipeline and use it.
    •   Essentially, app.use() is called to add middleware to the entire app and the middleware called will run 
        for all requests to this app, even non-existent endpoints.     

                        _________________________________________________


                            const = myMiddlewareFunction = function(req, res, next)  {
                                console.log(req.url);                                            
                                if (someConditionIsTrue(req)) {                                   
                                    return res.json({msg: 'someMessage'});                        
                                }
                                else {                                                           
                                    next();                                                       
                                }
                            }

                            app.use(myMiddlewareFunction);                                         <== app.use installs the middleware function for use.

                        _________________________________________________


    FINAL STEP: The middleware has been added successfully!
    =======================================================                       

                    __________________________________________

                        const express = require('express');                               
                        const app = express();                                             

                        const myMiddlewareFunc = (req, res, next) => {                      <== 1. create a middleware function.
                                console.log(req.url);                                             ... log the req.url...
                                if (someConditionIsTrue(req)) {                                   ... if the condition is true...
                                    return res.json({msg: 'someMessage'});                        ... return this response.
                                }
                                else {                                                            ... if not ...
                                    next();                                                       ... call next to trigger next middleware function
                                }
                                }

                                app.use(myMiddlewareFunc);                                  <== 2. app.use(myMiddlewareFunc) adds the above middleware to the entire app.

                                app.get('/api/foo', (req, res) => {                         <== 0. Route 1 (with request to /api/foo... the response will be a JSON object {foo:"bar"})
                                return res.json({foo: 'bar'});
                                });

                                app.get('/api/bar', (req, res) => {                         <== 0. Route 2 (with request to /api/bar... the response will be a JSON object {bar:"foo"})
                                return res.json({bar: 'foo'});
                                })

                                app.listen(8080);                                           

                        __________________________________________
              
*/



/* 
4. What types of middleware can you use for express apps?
//////////////////////////////////////////////////////////
    •   There are 3 types of middleware we can use in express apps:
    
            1. Built-in middleware
                o   express.static, express.json, etc. 
            2. Third-party middleware
                o   morgan, etc.
            3. Custom middleware
                o   myMiddlewareFunc, etc.

*/




/* 
5. How do you use built-in middleware?
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
6. What is third-party middleware?
////////////////////////////////////
    •  Third party middleware adds functionality to express apps.
    •  Third party middleware should be using sparingly as the more middleware you use, it will slow down your
       request porcessing for your application.
    •  Third-party middleware that you will need is often already written, and can be found with a quicksearch or even
       popular third-party middleware in the express documentation. 
    •  There are a few useful third-party middleware function you may want to use in your projects:
        o  For example, "helmet" secures your Express apps by setting various HTTP headers 
        o  Another is "morgan", which logs http requests (i.e. will log a message with each request sent to the server).              
    
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



/* 
7. How do you use a custom middleware function in a seperate module?
/////////////////////////////////////////////////////////////////////////

EXAMPLE 1: Middleware that logs "Logging..."
=============================================

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


EXAMPLE 2: Request Logger middleware function:
==============================================

    STEP 0: Starting with a basic express app
    ==========================================
    •   Suppose we had a basic express app with two routes:
            1.  (with request to /api/bar... the response will be a JSON object {bar:"foo"})
            2.  (with request to /api/bar... the response will be a JSON object {bar:"foo"})                   

                        _________________________________________________

                                const express = require('express');                              <== load express and store as "express".
                                const app = express();                                           <== execute express and store as "app".  

                                app.get('/api/foo', function(req, res) {                         <== Route 1 
                                return res.json({foo: 'bar'});
                                });

                                app.get('/api/bar', function(req, res)  {                        <== Route 2 
                                return res.json({bar: 'foo'});
                                })

                                app.listen(8080);                                 

                        _________________________________________________

    STEP 1: Create middleware function
    ==================================
    •   Create your custom request logger middleware function.

                        _________________________________________________

                                const express = require('express');                              
                                const app = express();                                           

                                function requestLogger(req, res, next) {                                                                  <== create your custom middleware function.
                                    const now = new Date();
                                    console.log(`${now.toLocalStorageString()} ${now.toLocalTimeString()} ${req.method} ${req.url}`);     <== logs date, time, request method.
                                    next();                                                                                               <== hands control over to next middleware function.
                                }

                                app.get('/api/foo', function(req, res) {                         
                                return res.json({foo: 'bar'});
                                });

                                app.get('/api/bar', function(req, res)  {                        
                                return res.json({bar: 'foo'});
                                })

                                app.listen(8080);                                 

                        _________________________________________________


   STEP 2: Add middleware function to the entire app with "app.use"
    ===============================================================
                        _________________________________________________

                                const express = require('express');                              
                                const app = express();                                           

                                function requestLogger(req, res, next) {                                                                 
                                    const now = new Date();
                                    console.log(`${now.toLocalStorageString()} ${now.toLocalTimeString()} ${req.method} ${req.url}`);     
                                    next();                                                                                              
                                }

                                app.use(requestLogger);                                       <== Add middleware to add so this middleware will run for all requests to this app.

                                app.get('/api/foo', function(req, res) {                         
                                return res.json({foo: 'bar'});
                                });

                                app.get('/api/bar', function(req, res)  {                        
                                return res.json({bar: 'foo'});
                                })

                                app.listen(8080);                                 

                        _________________________________________________

*/



/* 
Can you modify a request object using middleware?
/////////////////////////////////////////////////
    •   Middleware CAN be used to modify the request object in addition to adding multiple peices of middleware to an app.                            
*/



/* 
What is Cross Origin Resource Sharing (CORS)?
/////////////////////////////////////////////
==SHORT ANSWER==
    •   Cross Origin Resource sharing (CORS) allows browsers to make requests to a server on a domain other than the one the 
        HTML page is hosted on.  
    •   However, because browsers prohibit requests for corss-origin resources from inside a script, a modern solution to CORS
        is to configure response headers to allow scripts hosted on other domains to make requests to your app.

==EXAMPLE==
    •   Suppose you visit an HTML page: https://www.myexamplesite.com.
        o   You first get back the index.html file from https://myexamplesite.com.
            o   That HTML file links to two files:
                o   a CSS style sheet hosted on the same domain as well (i.e. https://myexamplesite.com/styles/index.css ).
                o   A JavaScript file hosted on the same domain (i.e. https://myexamplesite.com/index.js ).
        o   In your index.js file, you have a call to an API at another domain (i.e. https://myOTHERexamplesite.com/api/myotherresource.js ).
        
        o   Relative to https://myexamplesite.com, which is the domain serving the HTML file, https://myOTHERexamplesite.com is CROSS ORIGIN.
            o   This means that myOTHERexamplesite is server by the different domain myexamplesite.

==EXTENDED ANSWER==
    •   CORS will essentially let you serve a resource from another domain.
    •   However, as a security precaution, browsers prohibit requests from inside the a script.
    •   To avoid this, you can configure response headers to allow scripts hosted on other domains to make requests to your app.
    •   The simple solution to CORS (below) will help with simple use cases.
    •   However, you should switch to pre-built CORS middleware in the future when your application becomes more complex to support
        a wider range of HTTP methods, browsers, and configurations.
    


    How do you configure response headers to allow scripts hosted on other domains to make requests to your app?
    =============================================================================================================

        STEP 0: Tell the browser which domains are ALLOWED to make requests for the resource and what METHODS they can use.
        ===================================================================================================================
        •   For example, we need the response headers to have the following key/value pairs.

                    'Access-Control-Allow-Origin', '*'                           <== Indicates which origin can access the resource, which can be limited to one or all (i.e. *).
                    'Access-Control-Allow-Headers', 'Content-Type'               <== Indicates which header can be used in the acutal request
                    'Access-Control-Allow-', 'GET, POST, PUT, PATCH, DELETE'     <== Indicates which HTTP methods are enbaled for CORS rquests

        •   When the browser makes a cross-origin AJAX request and gets back a response with these headers, it will NOT block the request.


        STEP 1: To implement CORS in an express app, create a middleware function with the headers above:
        ==================================================================================================
        •  The following middleware function configures the response headers to allow CORS and make your API acessible by client-side code on other domains.

                     app.use(function(req, res, next) {
                        'Access-Control-Allow-Origin', '*'                          
                        'Access-Control-Allow-Headers', 'Content-Type'               
                        'Access-Control-Allow-', 'GET, POST, PUT, PATCH, DELETE'     
                     })            
*/



/* How do you handle redirects using middleware?
////////////////////////////////////////////////
==SHORT ANSWER==    
    •   URL redirects is a common server-side maintenance issue for outdated URL's that you want your app to redirect to new ones.

==EXAMPLE==
    •   For example, suppose you have a "Christmas Sale" (seasonal) to an evergreen page named "Sales and Clearence".
    •   Custom middleware would help us hanle redirection when the Christmas sale is over and we need to go back to Sales and Clearence.

==PRACTICAL EXAMPLE==
    •   Below is a highly maintainable way to manage URL direction:                 

                        _________________________________________________

                        const redirectsMap = {                 
                            "/old-url-1": "/new-url-1",
                            "/old-url-2": "/new-url-2",
                            "/old-url-3": "/new-url-1",
                            "/old-url-4": "/new-url-2"
                        };

                        function handleRedirects(req, res, next) {
                            if (Object.keys(redirectsMap).find((entry) => entry === req.path)) {
                                console.log(`Redirecting ${req.path} to ${redirectsMap[req.path]}`);
                                res.redirect(301, redirectsMap[req.path]);
                            } else {
                                next();
                            }
                        }

                        _________________________________________________


    STEP 1: Create an object that holds properties for old and new URL addresses:
    =============================================================================
    •   This is essentially a list of old urls being reidrected to new addresses.       

                        _________________________________________________

                        const redirectsMap = {                   
                            "/old-url-1": "/new-url-1",                        <== old urls is the key and the new url is the value.
                            "/old-url-2": "/new-url-2",
                            "/old-url-3": "/new-url-1",
                            "/old-url-4": "/new-url-2"
                        };

                        _________________________________________________


    STEP 2: Create a handleRedirects function:
    ==========================================
    •   This function will look for the current path and
                        _________________________________________________

                        _________________________________________________





    STEP 2: Create a handleRedirects function:
    ==========================================
                        _________________________________________________

                        _________________________________________________







*/























/* 
///////////////////////////OLD MIDDLEWARE FUNCTION Q//////////////////////////////////////////////////////////////////////
    // •   We use "app.use()" to install a middleware function in our request processing pipeline.
    // •   Additionally, within the body of the function at the end, we call "next()" to pass control to the next function
    //     in the middleware pipeline.
    //         o   If we dont terminate the request/response cycle with next(), the request will
    //             end up hanging (i.e. in postman, a GET request will continue "Loading..." without any response) 
    //             because we did not pass control to another middleware function to terminate the req/res cycle.  

    //                                      response object
    //                                             |
    //                             route handler   |    "next" refers to the next middleware function in the pipeline
    //                                       \     |    /
    //                     app.use( function(req, res, next) {
    //                         console.log("Logging");             <= code to be executed, which will show "Logging..." in the console.
    //                         next();
    //                     });      \
    //                               Pass control to the next middleware function in the pipeline.


    // •   And if we add ANOTHER middleware function, we will see the consecutive execution that occurs in the request processing pipeline:                   
                    
    //                 ____________________________________________
    
    //                     app.use( function(req, res, next) {              
    //                         console.log("Logging...")
    //                     });                                          <== console will print "Logging..."

    //                     app.use( function(req, res, next) {              
    //                         console.log("Authenticating...")
    //                     });                                          <== console will then print "Authenticating..."
    //                 ______________________________________________    
                        


*/