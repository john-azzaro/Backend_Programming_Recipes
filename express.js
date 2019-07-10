"use strict";
// TOPIC /////////////////////////////////////////////////////////////////////////////////////////////////////
//     Express framework 
//////////////////////////////////////////////////////////////////////////////////////////////////////////////


//     1. How do you create a basic web server with express?
//        +  How do you create an express server?
//        +  How do you create a route?    
//        +  How do you listen on a given port for requests?         
//        +  How do you add another route to your server?


//     2. What is Nodemon and what does it do?    
//        +  How do you install nodemon?
//        +  How do you use nodemon in Gitbash?

//     3. What is an environment variable and how do you assign a port to your node application?
//        +  How do you set an enviroment variable (assign a port to your application?
//
//     4. What are route parameters?
//        +  What is req.params?
//        +  How do you include multiple parameters in a route?
//        +  What are query string parameters using express and how do you use them?

//     9. What is a HTTP GET request and how do you handle it to an endpoint?
//     10. What is a HTTP POST request and how do you handle it to an endpoint?
//     11. What is a HTTP PUT request and how do you handle it to an endpoint?
//     12. What is a HTTP DELETE request and how do you handle it to an endpoint?
//     13. What is input validation?
//




//     14. What is Postman and how is it useful when building express apps?  
//   

//
//     19. What are environments and How do you detect them?
//        +  How do you tell if your code is running on a development or production enviroment?
//        +  How do you set the enviroment to a specific environment?
//     20. How do you store configuration settings for your application and how do you override them in different enviroments?
//        +  How do you store secrets in enviroment variables?
//     21. How do you log messages for the purpose of debugging?
//
//     22. How do you structure express applications?
//
// NOTES ////////////////////////////////////////////////////////////////////////////////////////////////////
//     1. Useful overview of information on Express web framework from study, research, tutorials, mentor
//        meetings, peer discussions, and good ole' fashioned curiosity.  I've put the document in Question
//        andAnswer format for improved readability.
//     2. Information on Express: https://expressjs.com/
//     3. Express documentation: https://expressjs.com/en/4x/api.html
//     4. Navigation Note: Highlight the question, press ctrl+f and navigate to the next occurence to find the Question faster.
// 
//////////////////////////////////////////////////////////////////////////////////////////////////////////////




/* 
1. How do you create a basic web server with express?
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


/* 
2. What is Nodemon and what does it do?
///////////////////////////////////////
    •   Nodemon (short for Node Monitor) is an npm package that we install that allows us to update our node program
        without having to start and restart our server every time we make a change in out program.

    How do you install nodemon?
    ===========================
    •   To install nodemon, you simple write "npm install -g nodemon"
        o   What will happen is is you will install the npm package "nodemon" but globally so it will be available from now on.

    How do you use nodemon in Gitbash?
    ==================================
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
3. What is an environment variable and how do you assign a port to your node application?
//////////////////////////////////////////////////////////////////////////////////////////
==SHORT ANSWER==
    •   Enviroment variables are used to store various settings for an application.
    •   An enviroment variable, such as PORT in node applications, is a variable that is part of the enviroment in which a 
        process runs, but the value of this variable is set OUTSIDE the application. 
        
==EXAMPLE==
                    const port = process.env.PORT || 3000;                              
                    app.listen(port, function() {                                       
                        console.log(`Listening on port ${port}...`);                   
                    });     
                 

==EXTENDED ANSWERS==
    •   Although using a hardcoded value for your port (i.e. 3000) will work on your development machine, it is unlikely
        that it will work in a production enviroment because when you deploy your app to a hosting enviroment, the port is
        dynamically assigned by the hosting enviroment, so 3000 might not be available.
    
    •   When you assign a port to your application (e.g. export PORT=5000) you use a port you have set for that application, 
        or else use an arbitrary number like 3000.
    
    •   In an application, we need to read the value of the PORT enviroment variable, which is done with the "process" object.
    •   To read an enviroment variable, use "process.env".

                                                                
==EXAMPLE==                                                                       
                                                                                        We want to assign a port to our application or else use an arbitrary port.
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
                    app.listen(port, function() {                         <== listener
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
8. What are route parameters?
//////////////////////////////
    •   Routing refers to how an applications endpoints (URLs) respond to a clients requests,
    •   Route parameters are used for essential or required values.
    •   Route paramaters are the named URL segments uses to capture the values specified at thier position in the URL. 


==EXAMPLE==
                          1. First, to get a specific course, we specify the endpoint and the given ID with ":id" 
                             which could be something like "api/courses/1".       
                                            |
                    app.get('/api/courses/:id', function(req, res) {
                        res.send(req.params.id);
                    });              \
                                      2. Then to read the parameter (i.e. ":id" or in this example "1"), we have "req.params.id" 
                                          which will show the contents at the endpoint of "1" in "api/courses/1".    

    What is req.params?
    ===================
    •   req.params returns the value of the parameter with the specific name.  For example"
            o   req.params        -- This will show the entire request.parms object.
            o   req.params.year   -- This will show the value of the year parameter.


    How do you include multiple parameters in a route?
    ==================================================                  
    •   To add multiple parameters to a route, you simply add id's to your endpoint.
            o   For example, suppose you wanted a route that looked for specific years and months in a collection of blog posts:
        
                                 1st param        2nd Param, etc.
                                          \       /
                    app.get('/api/posts/:year/:month', function(req, res) {
                        res.send(req.params);
                    });              
             

    What are query string parameters using express and how do you use them?
    =======================================================================
    •   A query string parameter provides additional data for back end services.
    •   Unlike route parameters are used for essential or required values, query paramaters are optional.
    •   Query parameters are stored in an object with key/value pairs.

                    app.get('/api/posts/:year/:month', function(req, res) {
                        res.send(req.query);
}                   );                  
                                         
*/







/* 
9. What is a HTTP GET request and how do you handle it to an endpoint?
///////////////////////////////////////////////////////////////////////
==SHORT ANSWER==
•   To handle a GET request to an endpoint, you call the app object with the GET method, specifiy a path (i.e. /api/courses) that 
    would also include a ":id" attached to the specific endpoint and you add a route handler (i.e. req, res), then add your logic.  


==EXAMPLE==
    •   Suppose you want to implement an new endpoint to get a SINGLE course from the server.
   
    STEP 0: We have an array of objects containing your courses
    ==========================================================                

                    const courses = [                                      <== array of course objects.
                        { id: 1, name: 'First course'},
                        { id: 2, name: 'Second course'},
                        { id: 3, name: 'Third course'}
                    ];


    STEP 1: Create a GET request that searches for the id parameter:
    ==================================================================

                    const courses = [
                        { id: 1, name: 'First course'},
                        { id: 2, name: 'Second course'},
                        { id: 3, name: 'Third course'}
                    ];

                    app.get('/api/courses', function(req, res) {                                         <== app object and GET method (i.e. .get) with path and route handler (req, res).
                        res.send(courses);                                                               <== the response will be to send the courses back to the client.
                    });

                    app.get('/api/courses/:id', function(req, res) {                                      <== the GET request endpoint the looks for a course with a given ID.
                        // code goes here
                    }); 


    STEP 2: Create the logic to find the course:
    =============================================   
    •   To create the logic to find the course, first Call "courses.find" with an es6 function that finds a 
        course that matches the search criteria:
    
                    app.get('/api/courses/:id', function(req, res) {                                      
                        const course = courses.find(course => course.id === parseInt(req.params.id));   <== This returns a boolean value that determines if this is the course or not.
                        ...                                                                                 In this case, the course.id should equal req.params.id.
                        ...                                                                                 However, we need to use parseInt() since we dont want to return a string.
                        ...                                                                                 The result is then stored as a constant as "course".
                        ...
                    }); 


    •   Then we need to include if statements for possible course submissions in the endpoint.

                    app.get('/api/courses/:id', function(req, res) {
                        const course = courses.find(course => course.id === parseInt(req.params.id));
                        if (!course) {                                                                    <== if course does not exist...
                            res.status(404).send('The course with the given id was not found');           <== respond with a 404 status and message.
                        } else {                                                                          <== But if the course DOES exist...
                            res.send(course);                                                             <== respond with the course.
                        }
                    }); 

*/


/* 
10. What is a HTTP POST request and how do you handle it to an endpoint?
///////////////////////////////////////////////////////////////////////
    •   To handle a GET request to an endpoint, you call the app object with the GET method, specifiy a path (i.e. /api/courses) that 
        would also include a ":id" attached to the specific endpoint and you add a route handler (i.e. req, res), then add your logic.  

    •   HTTP POST requests are used to create new resources.    
    
STEP 1: Create a HTTP POST request with the path and req/res route handler (i.e. callback function).
===================================================================================================

                    app.post('/api/courses', function(req, res) {          <== create app object with POST method with path and route handler.  Also note in this case the 
                        ...                                                    "courses" endpoint (i.e. the "courses" object) where we will post to.
                        ...
                        ...    
                    });


STEP 2: Read the course object (which is in the body of the request) and use the properties to create a new object.
====================================================================================================================

                    app.post('/api/courses', function(req, res) {          
                        const course = {                                  <== Read the course object (which is in the body of the request) and use the properties to create a new object...
                        id: courses.length + 1,                           <== this is a mnaully assigned id since we are not working with a database
                        name: req.body.name                               <== since this is begin read fromt he body of the request, we add the name to req.body.  HOWEVER, for this to work
                        };                                                    need to enable the parsing of json objects in the body of requests using "app.use(express.json());" up top.
                        ...                               
                        ...                                
                    });


STEP 3: Push the object to the course object and return that object in the body of the reponse
==============================================================================================

                    app.post('/api/courses', function(req, res) {          
                        const course = {                                   
                        id: courses.length + 1,                         
                        name: req.body.name                             
                        };                                                 
                        courses.push(course);                              <== Add (i.e. push) the object to the course object.
                        res.send(course)                                   <== And lastly, when posting an object to a server, it should return that object in the body of the reponse.
                    });
*/



/* 
11. What is a HTTP PUT request and how do you handle it to an endpoint?
///////////////////////////////////////////////////////////////////
    •   A PUT request will edit an existing property looking up the element by id and then, if everything is ok, 
        will update the element.


    STEP 1: Create a route handler with a path that will includes the specific id to be edited.
    ==========================================================================================

                    app.put('/api/courses/:id', function (req, res) {                                          <== call app object with PUT method as well as a 
                        ...                                                                                        route handler with a path that include the specific 
                        ...                                                                                        id.
                        ...
                        ...
                    });       


     STEP 2:  Create the logic for the PUT request.  In this case, look up course with given id.
    ============================================================================================  

                    app.put('/api/courses/:id', function (req, res) {                                           
                        const course = courses.find(course => course.id === parseInt(req.params.id));          <== first we need to look up the course with its given id.
                        ...
                        ...
                        ...
                    });       

    STEP 3:  If the course does not exist,send a 404 status (resource not found).
    ============================================================================             

                    app.put('/api/courses/:id', function (req, res) {                                           
                        const course = courses.find(course => course.id === parseInt(req.params.id));           
                        if (!course) {                                                                          <== then, if the course does NOT exist return 404 (resouce not found).
                            res.status(404).send('The course with the given id was not found');
                        }
                        ...
                        ...
                    });       
    
    STEP 4: If everything is good, update the course.
    ================================================                

                    app.put('/api/courses/:id', function (req, res) {                                           
                        const course = courses.find(course => course.id === parseInt(req.params.id));           
                        if (!course) {                                                                          
                            res.status(404).send('The course with the given id was not found');
                        }
                        course.name = req.body.name;                                                           <== If all is good, then update the course.  
                        res.send(course);
                    });       
*/



/* 
12. What is a HTTP DELETE request and how do you handle it to an endpoint?
//////////////////////////////////////////////////////////////////////
    •   To handle an HTTP Delete request, we         

    STEP 1: Create an HTTP DELETE request with a path that includes a path (with :id) and a response handler
    ========================================================================================================

                app.delete('/api/courses/:id', function (req, res) {               <== call the app object with the delete method with a path and a route handler.
                    ...
                    ...
                    ...
                    ...
                    ...
                });


    STEP 2:  Create the logic for the DELETErequest.  In this case, look up course with given id.
    ============================================================================================              
  
                app.delete('/api/courses/:id', function (req, res) {
                    const course = courses.find(course => course.id === parseInt(req.params.id));          <== look up course
                    ...
                    ...
                    ...
                    ...
                });

    STEP 3:  If the course does not exist,send a 404 status (resource not found).
    ============================================================================= 

                app.delete('/api/courses/:id', function (req, res) {
                    const course = courses.find(course => course.id === parseInt(req.params.id));          
                    if (!course) {                                                                         <== if the course does NOT exist return 404 (resouce not found).
                        res.status(404).send('The course with the given id was not found');
                        return;
                    }
                    ...
                    ...
                    ...                                                                    
                });

     STEP 4:  Find index of course by looking in courses object for indexOf course
    ===============================================================================             

                app.delete('/api/courses/:id', function (req, res) {
                    const course = courses.find(course => course.id === parseInt(req.params.id));          
                    if (!course) {                                                                         
                        res.status(404).send('The course with the given id was not found');
                        return;
                    }
                    const index = courses.indexOf(course);                                                  <== find index of course by looking in courses object for indexOf course
                    ...
                    ...                                                                    
                });


    STEP 5:  Remove an object from courses array using .splice and go to index and remove 1 object
    ============================================================================================== 

                app.delete('/api/courses/:id', function (req, res) {
                    const course = courses.find(course => course.id === parseInt(req.params.id));          
                    if (!course) {                                                                         
                        res.status(404).send('The course with the given id was not found');
                        return;
                    }
                    const index = courses.indexOf(course);                                                 
                    courses.splice(index, 1);                                                           <== to remove an object from courses array, use splice and go to index and remove 1 object.
                    res.send(course);                                                                       
                });


    STEP 6: Send the response to the course object
    ==============================================

                app.delete('/api/courses/:id', function (req, res) {
                    const course = courses.find(course => course.id === parseInt(req.params.id));          
                    if (!course) {                                                                         
                        res.status(404).send('The course with the given id was not found');
                        return;
                    }
                    const index = courses.indexOf(course);                                                 
                    courses.splice(index, 1);                                                           
                    res.send(course);                                                                  <== Lastly, send the response to the course object.      
                });


*/



/* 
13. What is input validation?
//////////////////////////////
   •    As a security concern, you should never trust what the client sends you.
   •    Input validation helps endures that the POST submission is valid and if not, will return an error. 
   •    Validation logic shoudl come at the beginning of your route handler.
   •    The example            


    How do you add simple validation logic?
    =======================================

                    app.post('/api/courses', function(req, res) {          
                        if(!req.body.name || req.body.name.length < 3) {                               <== If the req.body.name does NOT exist OR is less than 3 characters
                            res.status(400).send('name is required')                                   <== return error of 400 (bad request) to the client.
                            return;                                                                    <== return so that the rest of the function is not executed.
                        } 
                        const course = {                                   
                        id: courses.length + 1,                         
                        name: req.body.name                             
                        };                                                 
                        courses.push(course);                              
                        res.send(course)                                   
                    });    
*/



/* 
14. What is Postman and how is it useful when building express apps?  
////////////////////////////////////////////////////////////////////
    •   Postman is an api development tool that calls HTTP services.

==EXAMPLE==

    STEP 0: In Gitbash, make sure your application is listening on port 3000:
    =========================================================================

    STEP 1: In Postman, to test a POST request, make sure the following settings are correct:
    =========================================================================================
        •   Set the request to POST.
        •   Write the URL to send the POST request to.
        •   Set the "Body" of the request by selecting "raw"  and "JSON" which will allow yout o put a JSON object 
            int he body of the request.

    STEP 2: Add an object to POST:
    ==============================

            {
                "name": "new course"
            }

    STEP 3: Press send, and in the body of the reponse, you should see a positive status (200) and the body of the reponse.
    ======================================================================================================================

            {
                "id": 4,                     <== ID is 4 because we have 4 courses in the array now.
                "name": "course name"
            }

*/






/* 
19. What are environments and How do you detect them?
////////////////////////////////////////////////////
    •   In complex applications or enterprise applications, you need to know what enviroment your code is running on (i.e.
        development or production enviroment).
    •   Perhaps you would want to enable/diable certain features based on the current enviroment.
    •   To detect the current enviroment, you need to call the following object and method:    


                                          --  "process" object in node that gives us access to the current object.
                 process.env.NODE_ENV     --  "env" property of the process object, which gives us enviroment variables.
                                          --  "NODE_ENV" returns the enviroment for this node application.


    •   So in your index.js file, insert either of the following:

                    console.log(`Node_ENV: ${process.env.NODE_ENV}`);

                        --or--

                    console.log(`app: ${app.get('env')}`);    <== this method internally uses the "process.env.NODE_ENV" variable to detect the current enviroment


    How do you tell if your code is running on a development or production enviroment?
    ===============================================================================
        To enable logging using morgan only in the development enviroment
        =================================================================
            STEP 1: Enable logging only in the development enviroment with an if statement that specifies 
                    that if the enviroment is 'development', use Morgan:

                                if (app.get('env') === 'development') {      
                                    ...
                                    ...
                                }

            STEP 2: If so, enable Morgan and display confirmation on the console for debugging.

                                if (app.get('env') === 'development') {      
                                    app.use(morgan('tiny'));                 <== enable morgan.
                                    console.log('Morgan enabled...')         <== display confirmation on console.
                                }

        How do you set the enviroment to a specific environment? (e.g. disable morgan in this example):
        ===============================================================================================
        •   Make sure the server is stopped (e.g. stop nodemon index.js).
        •   Set the enviroment variable in Gitbash by writing:

                            export NODE_ENV=production     <== this sets the enviroment to production

                            --or--

                            export NODE_ENV=development    <== this sets the enviroment to development
*/


/* 
20. How do you store configuration settings for your application and how do you override them in different enviroments?
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    •   To store configuration settings and have a way to override them, you need to install the "config" node package.
    •   The "config" node package will allow you to easily see the default configuration for each enviroment you have.
    •   However, you should NOT store configuration secrets, like the password to your database or mail server because
        it will be visible in a repository for anyone to see.
    
    
    STEP 1: Install the "npm config" module (or "npm rc"):
    ======================================================

                            npm install config

    STEP 2: In your project folder, create a folder call "config":
    ==============================================================
                            
                            config

    STEP 3: Inside your config folder, create files with configuration settings:
    =================================================================================================
        •   In this example, we want to create three files called "default.json", "development.json", and "production.json"

                            default.json          <== holds default settings.
                            development.json      <== holds settings specific to the development enviroment and will override settings in default.json.
                            production.json       <== holds settings 

    STEP 4.1: Inside the default.json file, create a json object to define the default configuration settings:
    ========================================================================================================

                            {
                               "name": "My Express App" 
                            }

    STEP 4.2: Inside the development.json file, create a json object that overrides the default.json settings:
    ==========================================================================================================
        •   Remember that additional properties can be added and can be complex objects.

                            {
                                "name": "My Express App - Development",
                                "mail": {
                                    "host": "dev-mail-server"
                                }
                            }

    STEP 4.3: Inside the production.json file, create a json object with production settings:
    ========================================================================================

                            {
                                "name": "My Express App - Production",
                                "mail": {
                                    "host": "production-mail-server"
                                }
                            }

    STEP 5: In index.js, at the top load the "config" module to easily get settings for our application:
    ====================================================================================================

                            const config = require('config');

    STEP 6: To get the setting for an application, you console.log using "config.get":
    ==================================================================================

                            console.log(`Application Name: ${config.get('name')}`);    
                            console.log(`Mail server: ${config.get('mail.host')}`);    
                            
                            --IN CONSOLE--

                            $ nodemon index.js
                            [nodemon] 1.19.1
                            [nodemon] to restart at any time, enter `rs`
                            [nodemon] watching: *.*
                            [nodemon] starting `node index.js`
                            Application Name: My Express App - Development      <== This setting is coming from the development .json file.
                            Mail server: dev-mail-server                        <== This setting is also coming from the development .json file.
                            Morgan enabled...                                   <== Note, Morgan was configured to show ONLY in development enviroment which is why you see it now.
                            Listening on port 3000...


    STEP 7: If you change the enviroment to a different setting, such as "production", you will see different values:
    ==================================================================================================================

                            $ export NODE_ENV=production

                            $ nodemon index.js
                            [nodemon] 1.19.1
                            [nodemon] to restart at any time, enter `rs`
                            [nodemon] watching: *.*
                            [nodemon] starting `node index.js`
                            Application Name: My Express App - Production       <== This setting is coming from the production .json file.
                            Mail server: production-mail-server                 <== This setting is coming from the production .json file.
                            Listening on port 3000...


    OPTIONAL: How do you store secrets in enviroment variables?
    ===========================================================                       
        •   Suppose you want to store a password for a mail server and you do NOT want anyone to see it in a repository.
        
        STEP 1: In your terminal, define an enviroment variable for storing the password (in this case, a mail server):
        ===============================================================================================================
            •   REMEMBER: To prevent this password variable from clashing with another enviroment password variable
                          of the same name, you should prefix the password with the name of the application (i.e. app_).                
                             
                            export app_password=1234

        STEP 2: In your config folder, add a file called "custom-enviroment-variables.json" (make sure to spell it correctly):
        =======================================================================================================================

                            custom-environment-variables.json

        STEP 3: Inside this file, define the mapping of the configuration settings to enviroment variables:
        ===================================================================================================
            •   Only the mapping of our configuration settings to the enviroment variables.

                            {
                                "mail": {
                                    "password": "app_password"
                                }
                            }
            
        STEP 4: In index.js, when you try to display the password to the mail server:
        =============================================================================
            •   Note that the config object will look at various sources to find the value for the 'mail.password' configuration.
            •   The source can be a configuration file (i.e. json file), an enviroment variable, or even a commnad line argument.

                            console.log(`Mail password: ${config.get('mail.password')}`);


        STEP 5: In the terminal, you will see this when you run:
        ========================================================
                            
                            $ nodemon index.js
                            [nodemon] 1.19.1
                            [nodemon] to restart at any time, enter `rs`
                            [nodemon] watching: *.*
                            [nodemon] starting `node index.js`
                            Application Name: My Express App - Production
                            Mail server: production-mail-server
                            Mail Password: 1234                             <== This is read from an enviroment variable, not a config file.
                            Listening on port 3000...

*/



/*
21. How do you log messages for the purpose of debugging?
/////////////////////////////////////////////////////////
    •   Although console.log is a good way to debug, it can be a bit tricky to keep track of all of them, so a better
        way to log messages for the purpose of debugging is to use the debug package in node.  
    •   Debug replaces all the console.logs statements with a call to a debug function and then use an enviroment variable
        to enable of disable bugging so we dont have to go back to the code and modify it... we can control it from the outside
        using an enviroment variable.         

    STEP 1: Install the npm debug package:
    ======================================

                            npm install debug

    STEP 2: in the index.js module, load the debug module AND a returning function with the argument that will be
            a namespace for debugging.
    ==============================================================================================================

                                                           module             returning function with namespace as an argument.
                                                                \             /
                            const startupDebugger = required('debug')('app:startup');


            o   You can also have a debugger for debugging database related messages:

                            const dbDebugger = require('debug')('app:db'); 


    STEP 3: In the places where you want to replace console.log with the debugging function, simply call the debugging function
            and add the message as an argument:
    ============================================================================================================================

                            if (app.get('env') === 'development') {      
                                app.use(morgan('tiny'));
                                startupDebugger('Morgan enabled...');       <== call startupDebugger and the message as a function.
                            }


    STEP 4: In the terminnal, use an enviroment variable to determine what type of debugging information we want to see in the console.
    ===================================================================================================================================
    
                            export DEBUG=app:startup               <== we set an enviroment variable named DEBUG and set to app:startup
                                                                       so that we only see the debugging messages for this namespace.

                            $ nodemon index.js
                            [nodemon] 1.19.1
                            [nodemon] to restart at any time, enter `rs`
                            [nodemon] watching: *.*
                            [nodemon] starting `node index.js`
                            Application Name: My Express App - Development
                            Mail server: dev-mail-server
                            Mail Password: 1234
                            2019-06-17T01:57:35.941Z app:startup Morgan enabled...            <== shows the debug information
                            Listening on port 3000...


    OPTIONAL: If you want to see debugging messages for multiple namespaces, simply add a comma when defining the enviroment variable:
    ==================================================================================================================================

                            export DEBUG=app:startup, app:db

    OPTIONAL: If you do NOT want to see the debug information, set the enviroment variable to nothing
    ===============================================================================================

                            export DEBUG=                           <== enviroment variable set to nothing.

                            $ nodemon index.js
                            [nodemon] 1.19.1
                            [nodemon] to restart at any time, enter `rs`
                            [nodemon] watching: *.*
                            [nodemon] starting `node index.js`
                            Application Name: My Express App - Development
                            Mail server: dev-mail-server
                            Mail Password: 1234                                        Notice the debugging information is gone.
                            Listening on port 3000...


    OPTIONAL: As a shortcut (without having to use the enviroment export command), you can set the enviroment variable AND
              run the application AT THE SAME TIME:
    =======================================================================================================================

                            DEBUG=app:startup nodemon index.js

*/


/* 
22. How do you structure express applications?
///////////////////////////////////////////////
   •    Express applications can result in very lengthy index.js modules, so proper structure helps keep code managable.
   •    For every logical part of the application, every api endpoint, middleware, etc, you want to have a seperate module.                      



    STEP 1: Create a new folder for your specific logic (i.e. all the /api/courses endpoints called "routes"). 
    =========================================================================================================

                            routes

    STEP 2: Create a new file (i.e. module) for the specific logic (i.e. courses.js).
    ==================================================================================

                            courses.js

    STEP 3: Relocate the logic you want to the new module "courses.js":
    ====================================================================


                            const startupDebugger = require('debug')('app:startup');    
                            const dbDebugger = require('debug')('app:db');              
                            const config = require('config');
                            const morgan = require('morgan');
                            const helmet = require('helmet');
                            const express = require('express');
                            const app = express();

                            app.set('view engine', 'pug');
                            app.set('views', './views');

                            app.use(express.json());            
                            app.use(express.urlencoded( { extended: true }));   
                            app.use(express.static('public'));                    
                            app.use(helmet());


                            console.log(`Application Name: ${config.get('name')}`);
                            console.log(`Mail server: ${config.get('mail.host')}`);
                            console.log(`Mail Password: ${config.get('mail.password')}`);

                            if (app.get('env') === 'development') {      
                                app.use(morgan('tiny'));
                                startupDebugger('Morgan enabled...');
                            }

                            const courses = [
                                { id: 1, name: 'First course'},
                                { id: 2, name: 'Second course'},
                                { id: 3, name: 'Third course'}
                            ];

                            app.get('/', function(req, res) {
                                res.send('Hello world!!!!')
                            });

                                                                                                                        --------                     
                            app.get('/api/courses', function(req, res) {                                                       |
                                res.send(courses);                                                                             |
                            });                                                                                                |
                                                                                                                               |
                            app.get('/api/courses/:id', function(req, res) {                                                   |
                                if(!req.body.name || req.body.name.length < 3) {                                               |          
                                    res.status(400).send('name is required');                                                  |
                                    return;                                                                                    |
                                }                                                                                              |         
                                const course = courses.find(course => course.id === parseInt(req.params.id));                  |          
                                if (!course) {                                                                                 |                
                                    res.status(404).send('The course with the given id was not found');                        |                                     
                                } else {                                                                                       |                             
                                    res.send(course);                                                                          |                                         
                                }                                                                                              |                                     
                            });                                                                                                | -----  Relocate the routes                          
                                                                                                                               |        to a seperate module and
                            app.put('/api/courses/:id', function (req, res) {                                                  |        remove from index.js.                          
                                const course = courses.find(course => course.id === parseInt(req.params.id));                  |                 
                                if (!course) {                                                                                 |                                       
                                    res.status(404).send('The course with the given id was not found');                        |                             
                                    return;                                                                                    |         
                                }                                                                                              |                 
                                course.name = req.body.name;                                                                   |                                                                          
                                res.send(course);                                                                              |                     
                            });                                                                                                |                                                                                                                                  
                                                                                                                               |
                            app.delete('/api/courses/:id', function (req, res) {                                               |                                     
                                const course = courses.find(course => course.id === parseInt(req.params.id));                  |                                                       
                                if (!course) {                                                                                 | 
                                    res.status(404).send('The course with the given id was not found');                        |                                                             
                                    return;                                                                                    |                                                     
                                }                                                                                              |                                                 
                                const index = courses.indexOf(course);                                                         |                                                                                                       
                                courses.splice(index, 1)                                                                       |                                                                                                 
                                res.send(course);                                                                              |                                                                                                    
                            });                                                                                                |                             
                                                                                                                               | 
                            app.post('/api/courses', function(req, res) {                                                      |                                      
                                const course = {                                                                               |                                                                         
                                id: courses.length + 1,                                                                        |                                                                    
                                name: req.body.name,                                                                           |                                                                              
                                };                                                                                             |                                                       
                                courses.push(course);                                                                          |                                                                            
                                res.send(course)                                                                               |                                                        
                            });                                                                                                |                                 
                                                                                                                        --------
                            const port = process.env.PORT || 3000;
                            app.listen(port, function() {
                                console.log(`Listening on port ${port}...`);
                            });



    STEP 3: Move the logic to this new folder. 
    ========================================== 
                            
                            const courses = [...]
                            
                            app.get('/api/courses', function(req, res) {                              <== First, insert the code you want to go in the module.            
                                // code here //
                            });

                            app.get('/api/courses/:id', function(req, res) {
                                // code here //
                            }); 

                            app.put('/api/courses/:id', function (req, res) {                                          
                                // code here //
                            });                                               

                            app.delete('/api/courses/:id', function (req, res) {
                                // code here //                                                                   
                            });

                            app.post('/api/courses', function(req, res) {          
                                // code here //                                
                            });


    STEP 4: when your code is in your new module, load express and .Router(), as well as an module.export:
    ======================================================================== 
       •    Add router, add routes, and export the router at the end of the module.                    
       •    However, because you seperated the routes in a seperate module, you need to add a method called ".Router" 
            which returns a router object.  
       •    Consequently, all the the routes with "app" are chnaged to "route", so insteads of working with the app object
            we are working with the router object.                 


                            const express = require('express');
                            const router = express.Router();

                            const courses = [...]

                            router.get('/api/courses', function(req, res) {                                       
                                // code here //
                            });

                            router.get('/api/courses/:id', function(req, res) {
                                // code here //
                            }); 

                            router.put('/api/courses/:id', function (req, res) {                                          
                                // code here //
                            });                                               

                            router.delete('/api/courses/:id', function (req, res) {
                                // code here //                                                                   
                            });

                            router.post('/api/courses', function(req, res) {          
                                // code here //                                
                            });

                            module.exports = router;


    STEP 5: Load the "courses" module in index.js
    ============================================

                            const courses = require('./routes/courses');

    STEP 6: Call the middlware app.use() with two arguments, the path and the router object that we imported
    ========================================================================================================
    •   What this tells express is that for any route with /api/courses, use the "courses" router (i.e. the router that
        we loaded from the courses module).

                            app.use('/api/courses', courses);

    OPTIONAL: We can now get rid of all the /api/courses routes in "router.js" and make the routes shorter (i.e. /).
    ==============================================================================================================

                            const express = require('express');
                            const router = express.Router();

                            const courses = [...]

                            router.get('/', function(req, res) {                                       
                                // code here //
                            });

                            router.get('/:id', function(req, res) {
                                // code here //
                            }); 

                            router.put('/:id', function (req, res) {                                          
                                // code here //
                            });                                               

                            router.delete('/:id', function (req, res) {
                                // code here //                                                                   
                            });

                            router.post('/', function(req, res) {          
                                // code here //                                
                            });

                            module.exports = router;

                            

*/

















/* 
https://medium.com/the-node-js-collection/making-your-node-js-work-everywhere-with-environment-variables-2da8cdf6e786 -- enviroment variables
http://www.drdobbs.com/web-development/restful-web-services-a-tutorial/240169069 -- restful webservice article
https://www.codecademy.com/articles/what-is-rest -- what is rest
*/

