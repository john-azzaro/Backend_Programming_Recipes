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
How do you create a basic express application?
////////////////////////////////////////////////
==SHORT ANSWER==
STEP 1.1: Project setup
STEP 1.2: Install Express Generator (if you havent already)
STEP 2:  Create a new project with "express <project-name>"
STEP 3: Move into your project folder (i.e. howdy-express) and install dependencies with "npm install"
STEP 4.1: To start your app, run "npm start"
STEP 4.2: To view your project in a browser, visit "localhost:3000"

==PRACTICAL EXAMPLE==
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
        •   By default, "npm install" will install all modules listed as dependencies in package.json

                        ______________________________________________

                        npm install
                        ______________________________________________

        •   Note that there may be deprecated packages like jade, which was renamed pug, so consider uninstalling and installing
            the new version.  
    
                        ...
                        npm WARN deprecated jade@1.11.0: Jade has been renamed to pug, please install the latest version of pug instead of jade
                        ...


    STEP 4.1: To start your app, run "npm start"
    ==========================================
        •   When you run "npm start", node will look for a script (in package.json) with the key "start" and run the command.
        •   This will essentially start your application with any special configuration options.   

                        ______________________________________________

                        npm start
                        
                        ______________________________________________

        •   The reponse should look something like this:

                        > howdy-express@0.0.0 start C:\Users\Admin\Desktop\myExpProject\howdy-express node ./bin/www



    STEP 4.2: To view your project in a browser, visit "localhost:3000"
    ===================================================================

                        localhost:3000

        •  The result in your browser shoudl look like this:
        
                        Express
                        Welcome to Express

        •   Additionally, you will see in your bash a log entry for the GET request made to your server:

                        ______________________________________________

                        GET / 200 174.193 ms - 170                                  <== Get request
                        GET /stylesheets/style.css 200 1.987 ms - 111               <== Request for css stylesheet in public folder
                        GET /favicon.ico 404 8.487 ms - 1702                        <== favicon missing because we dont have one yet
                        ______________________________________________

        •   To stop the server, press ctrl-c.               

*/


/* 
How do you create an express application?
/////////////////////////////////////////

    STEP 1: Project setup
    =====================
        •   First thing you want to do is create a project folder (in gitbash or manually) and cd into it:
                        ______________________________________________

                        mkdir learn-npm
                        cd learn-npm
                        ______________________________________________

    STEP 2: Run "npm init"
    ======================
        •   When you run "npm init", you initialize new npm-based projects.
        •   You will be prompted to input information such as your package name (i.e. your project name), etc.
                        
                        ______________________________________________

                        npm init
                        ______________________________________________
      

        •   The result of will look like this:

                        ______________________________________________

                        $ npm init
                        This utility will walk you through creating a package.json file.
                        It only covers the most common items, and tries to guess sensible defaults.

                        See `npm help json` for definitive documentation on these fields
                        and exactly what they do.

                        Use `npm install <pkg>` afterwards to install a package and
                        save it as a dependency in the package.json file.

                        Press ^C at any time to quit.
                        package name: (learn-npm)                                     
                        version: (1.0.0)
                        description:
                        entry point: (index.js)
                        test command:
                        git repository:
                        keywords:
                        author:
                        license: (ISC)
                        About to write to C:\Users\Admin\Desktop\VSCode Project Files\misc\NodeTestApps\learn-npm\package.json:

                        {
                        "name": "learn-npm",
                        "version": "1.0.0",
                        "description": "",
                        "main": "index.js",
                        "scripts": {
                            "test": "echo \"Error: no test specified\" && exit 1"
                        },
                        "author": "",
                        "license": "ISC"
                        }


                        Is this ok? (yes)

                        ______________________________________________


    •   In your project folder, you will now see a "package.json" file.
                        
                        package.json



    STEP 3: Install Express with "npm install express":
    ===================================================
    •   Running "npm install express" will install express and save it to "node_modules" directory and add a
        dependencies key in your package.json file.

                        ______________________________________________

                        npm install express
                        ______________________________________________

    •   The result will look something like this:
    
                        ______________________________________________

                        $ npm install express
                        npm notice created a lockfile as package-lock.json. You should commit this file.
                        npm WARN learn-npm@1.0.0 No description
                        npm WARN learn-npm@1.0.0 No repository field.

                        + express@4.17.1
                        added 50 packages in 1.486s
                        ______________________________________________

    •   In your project folder, you will see the following:
    
                        node_modules/   package.json   package-lock.json

            o   Note how many dependencies are contained in node_modules by running "ls node_modules":

                        accepts/              cookie-signature/  etag/          inherits/           mime-types/      qs/            setprototypeof/
                        array-flatten/        debug/             express/       ipaddr.js/          ms/              range-parser/  statuses/
                        body-parser/          depd/              finalhandler/  media-typer/        negotiator/      raw-body/      toidentifier/
                        bytes/                destroy/           forwarded/     merge-descriptors/  on-finished/     safe-buffer/   type-is/
                        content-disposition/  ee-first/          fresh/         methods/            parseurl/        safer-buffer/  unpipe/
                        content-type/         encodeurl/         http-errors/   mime/               path-to-regexp/  send/          utils-merge/
                        cookie/               escape-html/       iconv-lite/    mime-db/            proxy-addr/      serve-static/  vary/

            o   Because installed so many different packages (50) is because express itself has many dependencies which have many 
                dependencies themselves.
            o   


    STEP 4: Create a ".gitignore" file at the root of the project in gitbash:
    ========================================================================
    •   With npm, you can specify a list of dependencies  and commit that list of dependencies to a repository WITHOUT commiting the 
        dependencies themselves.
    •   So when a collaborator installs a project, they download the repo and THEN run "npm install" themselves to install the
        dependencies locally.

    •   To create a .gitigore, first make sure you are in your root project folder (i.e. learn-npm). Then:
                         ______________________________________________
                         
                         git init
                         echo "node_modules" > .gitignore
                         git add .gitignore
                         git add package.json
                         git commit -m 'initial commit'
                         ______________________________________________                       

    •   You could also create a .gitignore file in your text editor and list "node_modules" as well.














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
https://docs.npmjs.com/cli/install  -npm install info
https://javascript.tutorialhorizon.com/2015/08/11/what-does-npm-start-do-in-nodejs/
https://thecodebarbarian.com/3-neat-tricks-with-npm-run
*/
