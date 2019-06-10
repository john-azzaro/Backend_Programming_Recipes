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
//     2. Information on Express: https://expressjs.com/
//     3. Express documentation: https://expressjs.com/en/4x/api.html
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
Why should you use a framework like express?
////////////////////////////////////////////
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

         ______________________________________________

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
What is express?
////////////////
    •   Express is a minmalist framework for Node.js that simplifies the creation of modern server-side web applications in Node.
    •   Express gives you built in features and function to more easily use Node for web development, such as easier ways to route requests.
*/



/* 
How do you install express?
///////////////////////////
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
How do you create a basic web server with express?
//////////////////////////////////////////////////

    PHASE 1: Setup project:
    =======================
        STEP 1: Create a folder for your project.
        STEP 2: Inside the folder, write the command "npm init" (with --yes if you want fast default installation) 
                to create a package.json file.
        STEP 3: Install the express framework with the command "npm install express".
        STEP 4: Create a new file in your text editor called "index.js".

    PHASE 2: Create express server:
    ===============================
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
                            
    PHASE 3: Define a route that responds to specific HTTP requests (in this case GET ):
    ====================================================================================
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

                    app.get('/', function(req, res) {                <== The callback function (i.e. route handler) upon recieving a request from the "/" path... 
                        res.send('Hello world!')                <== ... responds by sending back the message "Hello world!".
                    });
                ______________________________________________


    PHASE 4: Listen on a given port for requests:
    =============================================
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

                    app.get('/api/courses', function(req, res) {    <== Additional get request that sends an array of numbers back as a reponse.
                        res.send([1,2,3,4,5]);
                    });

                    app.listen(3000, function() {
                        console.log('listening on port 3000...');
                    });
                    ______________________________________________ 

*/


/* 
What is Nodemon and what does it do?
///////////////////////////////////
    •   Nodemon (short for Node Monitor) is an npm package that we install that allows us to update our node program
        without having to start and restart our server every time we make a change in out program.

    How do you install nodemon?
    ===========================
    •   To install nodemon, you simple write "npm install -g nodemon"
        o   What will happen is is you will install the npm package "nodemon" but globally so it will be available from now on.

    How do you use nodemon?
    =======================
    •   When you use nodemon, you simply type "nodemon" and then the application you want to listen in on.

                    $ nodemon index.js                                   <== uses nodemon with index.js.
                        [nodemon] 1.19.1
                        [nodemon] to restart at any time, enter `rs`
                        [nodemon] watching: *.*                          <== nodemon watches everything in the folder.
                        [nodemon] starting `node index.js`
                        listening on port 3000...                        <== listening in on port 3000, which will show "Hello world!"


    •   Then, when you update your program (i.e. the response is "Howdy world!"), nodemon will automatically restart.

                    $ nodemon index.js
                        [nodemon] 1.19.1
                        [nodemon] to restart at any time, enter `rs`
                        [nodemon] watching: *.*   
                        [nodemon] starting `node index.js`
                        listening on port 3000...
                        [nodemon] restarting due to changes...           <== nodemon restarts after the change...
                        [nodemon] starting `node index.js`
                        listening on port 3000...                        <== and again listens on port 3000, and when requested will show "Howdy world!"

*/



/* 
What is an enviroment variable and how do you assign a port to your node application?
/////////////////////////////////////////////////////////////////////////////////////
==SHORT ANSWER==
    •   Enviroment variables are used to store various settings for an application.
    •   An enviroment variable, such as PORT in node applications, is a variable that is part of the enviroment in which a 
        process runs, but the value of this variable is set OUTSIDE the application.  We want to assign a port to our 
        application or else use an arbitrary port.
                 
==EXTENDED ANSWERS==
    •   Although using a hardcoded value for your port (i.e. 3000) will work on your development machine, it is unlikely
        that it will work in a production enviroment because when you deploy your app to a hosting enviroment, the port is
        dynamically assigned by the hosting enviroment, so 3000 might not be available.
    
    •   When you assign a port to your application (e.g. export PORT=5000) you use a port you have set for that application, 
        or else use an arbitrary number like 3000.
    
    •   In an application, we need to read the value of the PORT enviroment variable, which is done with the "process" object.
    •   To read an enviroment variable, use "process.env".

                                                                
==EXAMPLE==
                    const port = process.env.PORT || 3000;                        <==   process = "process" is a global object.      
                    app.listen(port, function() {                                       .env    = a property of of the process global object, which is short for enviroment variable.
                        console.log(`Listening on port ${port}...`);                    .PORT   = The name of the enviroment variable.
                    });                                                                 || 3000 = If the above is not set, then we use port 3000.

                                                                                        o  IF there is an enviorment variable call "PORT", then use that as the port for the web server.
                                                                                        o  IF NOT, then use 3000 as the port for the webserver           
                    ____________________________________________ 

                    const express = require('express');
                    const app = express();

                    app.get('/', function(req, res) {
                        res.send('Hello world!!!!')
                    });

                    app.get('/api/courses', function(req, res) {
                        res.send([1,2,3,4,5]);
                    });

                    const port = process.env.PORT || 3000;                <== port variable
                    app.listen(port, function() {                         <== 
                        console.log(`Listening on port ${port}...`);
                    });

                    ______________________________________________ 

    
    How do you set an enviroment variable (assign a port to your application?
    =========================================================================
    •   To set an enviroment variable, write "export" + the enviroment variable and set its value to whatever you want (i.e. PORT=5000)             
            o   When you run the application, it will show the new port it is listening in on (i.e. 5000).

                    export PORT=5000

*/




























/* 
https://medium.com/the-node-js-collection/making-your-node-js-work-everywhere-with-environment-variables-2da8cdf6e786 -- enviroment variables
*/

