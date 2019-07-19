"use strict";
// TOPIC /////////////////////////////////////////////////////////////////////////////////////////////////////
//     Express Development Enviroment
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//     2. What is Nodemon and what does it do?    
//        +  How do you install nodemon?
//        +  How do you use nodemon in Gitbash?
//
// NOTES ////////////////////////////////////////////////////////////////////////////////////////////////////
//     1. This outline is intended to be more of a round-up of the previously covered outlines from node to express, 
//        so there are more than a few repeated parts included.
//     2. Useful overview of information about Express Development Enviroment from study, research, tutorials, 
//        mentor meetings, peer discussions, and good ole' fashioned curiosity.  I've put the document in Question
//        and Answer format for improved readability.
// 
//////////////////////////////////////////////////////////////////////////////////////////////////////////////



/* 
STEPS
////////////////
STEP 1.1: Project setup
STEP 1.2: Install Express Generator (if you havent already)
STEP 2:  Create a new project with "express <project-name>"
STEP 3: Move into your project folder (i.e. howdy-express) and install dependencies with "npm install"

*/





/* 
STEP 1.1: Project setup
=====================
    •   First thing you want to do is create a project folder (in gitbash or manually) and cd into it:
                    ______________________________________________

                    mkdir myExpProject
                    cd myExpProject
                    ______________________________________________


STEP 1.2: Install Express Generator (if you havent already)
============================================================
    •   Installing the express generator as a global package allows you to run the "express" command from your terminal  
    •   You only need to do this ONCE for the machine you are on (i.e. you dont need to do this every time you start a project).
    •   If you have already installed express-generator, it will simply update your current express-generator   
                    ______________________________________________

                    npm install -g express-generator
                    ______________________________________________


STEP 2:  Create a new project with "express <project-name>"
===========================================================
    •   Assuming you have express generator installed (see step 1.2), you can now create your project.
    •   This command will create the basic framework of your application with a single command!
    •   
                    ______________________________________________

                    express howdy-express
                    ______________________________________________

    •   The result will show you the following:

                    ______________________________________________

                    $ express howdy-express

                    warning: the default view engine will not be jade in future releases
                    warning: use `--view=jade' or `--help' for additional options


                    create : howdy-express\
                    create : howdy-express\public\                                <== "public" folders are everything accessible to people connecting to your application like html, css, js, images, etc.
                    create : howdy-express\public\javascripts\
                    create : howdy-express\public\images\
                    create : howdy-express\public\stylesheets\
                    create : howdy-express\public\stylesheets\style.css
                    create : howdy-express\routes\                                <== "routes" is for different router files. index.js and users.js are examples of how to seperate route configs depending on what they do.   
                    create : howdy-express\routes\index.js
                    create : howdy-express\routes\users.js
                    create : howdy-express\views\                                 <== "views" is for files in your templating engine
                    create : howdy-express\views\error.jade
                    create : howdy-express\views\index.jade
                    create : howdy-express\views\layout.jade
                    create : howdy-express\app.js                                 <== "app.js" sets up the express application and glues everything together 
                    create : howdy-express\package.json
                    create : howdy-express\bin\                                   <=="bin" contains the executable file on startup (starts on port 3000 with basic error handling) npm start will run this for you 
                    create : howdy-express\bin\www

                    change directory:
                        $ cd howdy-express

                    install dependencies:
                        $ npm install

                    run the app:
                        $ DEBUG=howdy-express:* npm start

                    ______________________________________________


STEP 3: Move into your project folder (i.e. howdy-express) and install dependencies with "npm install"
======================================================================================================






























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
https://www.sitepoint.com/create-new-express-js-apps-with-express-generator/ -- express generator article
*/
