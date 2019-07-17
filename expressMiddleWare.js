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
//        + What is the urlencoded() method and what does it do?
//        + What is the "static" method and what does it do?
//     6. What is third-party middleware?
//        + How do you install third party middleware?
//        + What is Morgan and how do you install it?
//     7. Can you modify a request object using middleware?
//     8. What is Cross Origin Resource Sharing (CORS)?
//        + How do you configure response headers to allow scripts hosted on other domains to make requests to your app?
//     9. How do you handle redirects using middleware?
//    10. What is a middleware stack?
//    11. What is modularization and how do you use a custom middleware function in a seperate module?
//        + How do you use middleware in a seperate module using module.exports?
//        + How do you use middleware in a seperate module using an object?
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

    What is Morgan and how do you install it?
    =========================================
    •   Morgan is a logger that records what happens on a server.
    •   Every server-side app your write should feature some logging, which at least logs HTTP requests made to the server.
    •   Logging gives us insight into requests being made to our apps, and can help us understand when errors occur.
    •   Logs are a stream of messages about events in our app and can be sent to live logging view (e.g. glitch), third party
        logging services like logentries, or saved ona file in the server.                            


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

        OPTIONAL BASED ON SPECIFIC MIDDLEWARE: Morgan has various options for formats (see documentation)
        ================================================================================================== 
        •   for example, 'tiny' will be a small snippet of the get request.
        •   for example, 'common' can also provide details about your request.   

                app.use(morgan('tiny'));

                    o   The result will be that when you send a GET request to the server, morgan will log the http request:

                        $ nodemon index.js
                        [nodemon] 1.19.1
                        [nodemon] to restart at any time, enter `rs`
                        [nodemon] watching: *.*
                        [nodemon] starting `node index.js`
                        Listening on port 3000...
                        GET /api/courses 200 95 - 2.022 ms           <== logged GET request by morgan in "tiny" format.

                app.use(morgan('common'));

                    o   The result will be:

                    172.17.01 - - [06/07/2019:16:56:52 +0000]  "GET / HTTP/1.1" 200 2

                        172.17.01                      - IP of the agent making the request
                        [06/07/2019:16:56:52 +0000]    - date and time of the request
                        GET                            - method of request
                        /                              - the URL (the server root is /)
                        HTTP/1.1                       - HTTP version
                        200                            - repsonse status code sent back to the client.
                        2                              - length of the content sent back (2 stands for two character in "ok")

        •   You can also create custom formats for log entries by supplying a string:

                app.use(morgan(':date[iso] :method :url :response-time'));
                
*/


/* 
6. What is custom middleware?
////////////////////////////
==SHORT ANSWER==
•   Custom middlware are functions that your (the developer) write and install into your express app.
•   Custom middleware can be anythign from CORS to handling redirects to logging errors (outlines below).
    
==PRACTICAL EXAMPLE==

    Example 1: Logging Errors custom middleware.
    ============================================
    •   Morgan helps us understand wha kind of requests are being made ot our app, but not a lot of information about errors.
        o   For example, morgan would show 500 status code (error) but no record of what triggered it.

    •   One possible solution is to insert a try/catch into each of our middleware functions:
        o    This is "defensive programming" that is useful in places where you think the middleware might fail.
          
                        __________________________________________

                        function myMiddlewareFunction() {
                            // do some stuff
                            try {
                                console.log('SUCCESS: `myMiddlewareFunction` did what it was supposed to do. ').
                            }
                            catch(e) {
                                console.log('FAILURE: `myMiddlewareFunction` failed', e.stack);
                            }
                        }
                        __________________________________________

    •   However, the try/catch only works for function that it has been inserted into.
    •   What about the exception that you do not anticipate?
        o   To ensure that we log details about the error that happens when a user makes a request to our app, you can use 
            an express catch-all error handling middleware function.
        o   In the function below, if any of the routes defined in the app trigger an uncaught error, the error will be logged by logErrors
        o   So in som many words, logErrors will only run in the case of an uncaught error occuring.
            o   Note that this middleware function contains an extra parameter, err.
            o   the err parameter will be the error object that bubbled up to the middleware layer.  
            o   This is known as a "error-first callback" and is a convention in Node.  
                          

                        __________________________________________

                        function logErrors(err, req, res, next) {
                            console.log(err);                                                <== Log the error...
                            return res.status(500).json({error: 'Something went wrong'})     <== ... send an HTTP status of 500 back to the user with a message saying what happened.
                        }

                        app.use(logErrors);

                        __________________________________________



*/



/* 
7. Can you modify a request object using middleware?
/////////////////////////////////////////////////////
    •   Middleware CAN be used to modify the request object in addition to adding multiple peices of middleware to an app.                            
*/


/* 
8. What is Cross Origin Resource Sharing (CORS)?
/////////////////////////////////////////////////
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



/* 
9. How do you handle redirects using middleware?
///////////////////////////////////////////////////
==SHORT ANSWER==    
    •   URL redirects is a common server-side maintenance issue for outdated URL's that you want your app to redirect to new ones.

==EXAMPLE==
    •   For example, suppose you have a "Christmas Sale" (seasonal) to an evergreen page named "Sales and Clearence".
    •   Custom middleware would help us handle redirection when the Christmas sale is over and we need to go back to Sales and Clearence.

==PRACTICAL EXAMPLE==
    •   Below is a highly maintainable way to manage URL direction:                 

                        _________________________________________________

                        const express = require('express');
                        const app = express();

                        const redirectsMap = {                                                              <== object containing old routes and redirects.
                        "/old-url-1": "/new-url-1",
                        "/old-url-2": "/new-url-2",
                        "/old-url-3": "/new-url-1",
                        "/old-url-4": "/new-url-2"
                        };


                        function handleRedirects(req, res, next) {                                           <== Redirect middleware.
                        if (Object.keys(redirectsMap).find((entry) => entry === req.path)) {
                            console.log(`Redirecting ${req.path} to ${redirectsMap[req.path]}`);
                            res.redirect(301, redirectsMap[req.path]);
                        } else {
                            next();
                        }
                        }
                        
                        app.use(handleRedirects);                                                             <== use handleRedirects middleware.

                        app.get("/", (req, res) => res.sendFile(`${__dirname}/views/index.html` ));           <== GET request that says when user makes request to root url, return HTML file at views/index.html.
                        app.get("/new-url-1", (req, res) => res.send("new-url-1"));                           <== GET request that says when request made to /new-url-1, retun text saying "new-url-1"
                        app.get("/new-url-2", (req, res) => res.send("new-url-2"));                           <== GET request that says when request made to /new-url-2, retun text saying "new-url-2"

                        app.listen(process.env.PORT || 8080, () => console.log(
                        `Your app is listening on port ${process.env.PORT || 8080}`));


                        _________________________________________________


    STEP 1: Create an object that holds properties for old and new URL addresses:
    =============================================================================
    •   This is essentially a list of old urls being reidrected to new addresses.
        o   The old urls are the keys
        o   The return route the keys should be redirected to are the values.      

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
    •   This function will look for the current request path inside redirectsMap
        o   If it finds a path, it will:
            1. log that a redirect occurs
            2. Calls "res.redirect" and passes a 301 message (redirect) and redirects to the value for the original path inside redirectsMap.
            3. If if the request path is NOT in redirectsMap, calls next to move on to the next middleware function.
                        _________________________________________________

                        function handleRedirects(req, res, next) {
                            if (Object.keys(redirectsMap).find((entry) => entry === req.path)) {          <== For each key in redirectsMap, find whether the entry is equal to the request path.
                                console.log(`Redirecting ${req.path} to ${redirectsMap[req.path]}`);
                                res.redirect(301, redirectsMap[req.path]);                                <== if the key matches the old path (i.e. ".old-url-1"), call res.redirect and pass 301 message and redirect to the VALUE.
                            } else {
                                next();                                                                   <== and if there is no request path redirect in redirectsMap, move on to NEXT middleware function.
                            }
                        }
                        _________________________________________________

*/



/* 
10. What is a middleware stack?
///////////////////////////////
==SHORT ANSWER==    
    •   A middleware stack is a collection of middleware functions that often implemented BEFORE requests are
        matched to an endpoint.

==EXAMPLE==
                        [CLIENT]
                            |                <== Request from client
                        [REQUEST]
                            |
                    _______PORT_______           
                            |                   This is the "middleware stack" that a request would pass through before being matched with an endpoint. 
                            |                _ /
                        [Logging]             |--- Custom middleware like "Logging" used on all requests made to a server     
                     [static server]          |--- Built-in middlware like "static server"
                         [CORS]               |--- Custom middleware like "CORS"
                    [handleRedirects]         |--- Custom middleware like "handleRedirects"
                      [cookieParser]         _|--- Third-party middleware
                            |
                            |
                    [Endpoint matching]
                            |
                            |
                     ___________________
                            |
                        [RESPONSE]
                            |               <== Response to client
                         [CLIENT]    
*/




/* 
11. What is modularization and how do you use a custom middleware function in a seperate module?
///////////////////////////////////////////////////////////////////////////////////////////////
==SHORT ANSWER==
    •   Modularization is splitting the application into different modules so your code is more manageable.
    •   You can import/export modules using 2 methods:
            1. Export directly.
            2. Export with an object using destructuring      

    •   Both work with the same result, but when you export with an object, you dont need to look at the file
        you are importing from to remember what kind of export it uses.

    •   To import a local app module with module.exports, you simply:
            1. Create a sperate file (i.e. module)...
            2. Export that module using module.exports...
            3. In the main file you wish to import that module into, load the file and stores as a variable...
            4. Use app.use() to install the middleware in your express app!

==PRACTICAL EXAMPLES==


How do you use middleware in a seperate module using module.exports?
====================================================================                           

    EXAMPLE 1: Middleware that logs "Logging..."
    =============================================`
        
        STEP 1: Create a new module(i.e. file) to place your middleware:
        ===============================================================
                        _________________________________________________
        
                            function logger(req, res, next) {                <== middleware to be exported
                                console.log("Logging...")
                            };
                        _________________________________________________


        STEP 2: Export the module sing module.exports.logger:
        =====================================================
                         _________________________________________________
                           
                            function logger(req, res, next) {              
                                console.log("Logging...")
                            };

                            module.exports = logger;                         <== module exporting a single function, specifically logger.
                        _________________________________________________


        STEP 3: In your main file (i.e. index.js), we first load the new module:
        ========================================================================
                        _________________________________________________

                            const logger = require('./logger');             <= load the logger module (in the current folder) and store as a constant.
                        _________________________________________________


        STEP 4: Then you install the new logger module by using app.use():
        ==================================================================
                        _________________________________________________

                            app.use(logger);                              <== logger passed to the app.use() function.
                        _________________________________________________


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



How do you use middleware in a seperate module using an object?
=================================================================
        
    Example 1: Middleware that handles redirects:
    =============================================
        
        STEP 1: Create a new module(i.e. file) to place your middleware and export the middleware with :
        ===============================================================
                        _________________________________________________

                        const redirectsMap = require('../redirectsMap');                                   <== this imports redirectMaps to this module.


                        function handleRedirects(req, res, next) {                                          <== the handleRedirect function
                            if (Object.keys(redirectsMap).find((entry) => entry === req.path)) {
                                console.log(`Redirecting ${req.path} to ${redirectsMap[req.path]}`);
                                res.redirect(301, redirectsMap[req.path]);
                            }
                            else {
                                next(); 
                            }
                        };


                        module.exports = {handleRedirects};                                            <== use module.exports and export DESTRUCTURE the handleRedirects middleware function

                        _________________________________________________


        STEP 2: Import the new module (i.e. handleRedirects) to the main file:
        ======================================================================
        
                        _________________________________________________

                        const {handleRedirects} = require('./middlewares/redirects');              <== Imports the object "handleRedirects" from ./middlewares/redirects
                        _________________________________________________        


        STEP 3: Install handleRedirects for use in your express app:
        ============================================================
                        _________________________________________________

                        app.use(handleRedirects);
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