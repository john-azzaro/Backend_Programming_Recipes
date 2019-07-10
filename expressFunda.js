"use strict";
// TOPIC /////////////////////////////////////////////////////////////////////////////////////////////////////
//     Express Fundamentals
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//      1. What is express?
//      2. Why should you use a framework like express?
//      4. How do you install express?
//      5. How do you create a basic web server with express?
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
1. What is express?
///////////////////
    •   Express is a minmalist framework for Node.js that simplifies the creation of modern server-side web applications in Node.
    •   Express gives you built in features and function to more easily use Node for web development, such as easier ways to route requests.
    •   Express provides a request and response object for representing and interacting with HTTP requests and reponses.
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
4. How do you install express?
//////////////////////////////
    •   To install express, simply move into the project folder, write "npm init --yes" and then install express by writing "npm install express"
      
    STEP 1: Initialize NPM (with the defaults instead of askng questions)
    ====================================================================
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
