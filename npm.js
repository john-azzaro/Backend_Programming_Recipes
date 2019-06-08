"use strict";
// TOPIC /////////////////////////////////////////////////////////////////////////////////////////////////////
//     Node Package Manager (NPM)
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//      1. What is Node Package Manager?. 
//         +  How do you install NPM?
//         +  How do you verify your NPM installation?
//         +  How do you install NPM to the latest version?
//         +  How do you access npm help?
//         +  How do you install a specific version of npm?
//      2. What is package.json?
//         +  How do you create a package.json file?
//         +  OPTIONAL: Is there a way to create a package.json file quickly? 
//      3. How do you install an npm package?
//         +  How do you install a specific version of a package?
//         +  How do you find out which packages are outdated?
//         +  How do you update a package to the latest version of minor and patch releases?
//         +  How do you update to the latest version of major releases using ncu?
//      4. How do you uninstall a npm package?
//      5. How do you use a npm module? 
//      6. What are package dependencies in package.json?
//         +  What is semantic versioning?
//         +  How do you view the registry of your package on Gitbash?
//         +  How do you view ONLY dependencies of your package on Gitbash?
//         +  How do you know what package version is installed?
//         +  How do you check for all the versions of a dependencies?
//      7. What are DevDependencies and what do they do?
//         +  How do you install a DevDependency?
//      8. What is .gitignore and why do you need it with version control?
//         +  How do you exclude the node_modules file from your git repository?
//         +  How do you restore dependencies?
//      9. How do you publish your own node package and publish on npm registry?
//     10. How do you update an uploaded node package and publish on npm registry?
//
// NOTES ////////////////////////////////////////////////////////////////////////////////////////////////////
//     1. Useful overview of information on Node Package Manager from study, research, tutorials, mentor
//        meetings, peer discussions, and good ole' fashioned curiosity.  I've put the document in Question
//        andAnswer format for improved readability.
//     3. Download node.js: https://nodejs.org/en/
//     2. Documentation for Node.js: https://nodejs.org/en/docs/
// 
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* 
1. What is Node Package Manager (NPM)?
//////////////////////////////////////
==SHORT ANSWER==
    •   Node Package Manager, or NPM, is a command line tool (such as using Gitbash) that installs, updates, 
        or uninstalls Node.js packages in your application.

==EXAMPLE==
    •   When you write "npm install underscore", you are using Node Package Manager (NPM) to install the 
        third-party library "underscore" to your project.

==EXTENDED ANSWER==
    •   NPM is also an online repository for open-source Node.js packages where the community creates useful modules
        and published them as packages to the repository.
    •   NPM and Node are developed independently, so if you check the version of npm and node, they will be different.

    
    How do you install NPM?
    =======================
        •   NPM is installed with your Node.js installation.

    How do you verify your NPM installation?
    ========================================
        •   write "npm -v" in your Gitbash terminal.
     
    How do you install NPM to the latest version?
    ============================================
        •   write "npm install npm -g".

    How do you access npm help?
    ===========================
        •   write "npm help".

    How do you install a specific version of npm?
    =============================================
        •   write "npm i -g npm@5.5.1"

            o   "i" stands for install
            o   -g stands for global
            o   "npm@5.5.1" is the package and version number
*/



/* 
2. What is package.json?
////////////////////////
==SHORT ANSWER==
    •   Package.json is a file that contains metadata about applications, packages, and other information 
        about your application in JSON format

==EXAMPLE==

        
==EXTENDED ANSWER==       
    •   Before you create any files in your project you need to create a package.json.
    •   The package.json file is the core of the node ecosystem.    
    •   Every Node application has a package.json file that includes metadata about the application.
    •   The package.json file is used to make development streamlined, modular, and efficient.
    •   When created, the package.json file will have a JSON object with key/value pairts 
    •   All node applications have as a standard the package.json file.
    •   Package.json includes "metadata" information for your application such as:
            o   name
            o   version
            o   authors
            o   git repo address
            o   dependencies
            o   etc.

    How do you create a package.json file?
    ======================================
        STEP 1: in Gitbash, write "npm init"
        ====================================

        1.      $ npm init

        STEP 2: When you run "npm init", you will be guided through the process of creating a package.json file.
        ========================================================================================================

                $ npm init
                This utility will walk you through creating a package.json file.
                It only covers the most common items, and tries to guess sensible defaults.

                See `npm help json` for definitive documentation on these fields
                and exactly what they do.

                Use `npm install <pkg>` afterwards to install a package and
                save it as a dependency in the package.json file.

                Press ^C at any time to quit.
        2.      package name: (npm-demo)                                               <== Name property (must be url friendly)
        3.      version: (1.0.0)                                                       <== Version property (current version of the module)
        4.      description:                                                           <== Decription property is a string telling what the module does.
        5.      entry point: (index.js)
        6.      test command:
        7.      git repository:                                                        <== where the source code lives (full url of version control)
        8.      keywords:                                                              <== keywords (in array) in the module that help identify it.
        9.      author:
        10.     license: (ISC)                                                         <== License describes what license the module that pack.json is describing
                About to write to C:\Users\Admin\Desktop\npm-demo\package.json:

                {
                "name": "npm-demo",
                "version": "1.0.0",
                "description": "",
                "main": "index.js",                                                    <== direction to the entry point to the module package.json is describing
                "scripts": {                                                           <== object with many key/values for building, testing of commands needed to work with the module.
                    "test": "echo \"Error: no test specified\" && exit 1"
                },
                "author": "",
                "license": "ISC"
                }

        11.     Is this ok? (yes)                                                        <== creates a package.json file in your project folder


        OPTIONAL: Is there a way to create a package.json file quickly?  
        ===============================================================
            •   write "npm init --yes"
*/



/* 
3. How do you install an npm package?
/////////////////////////////////////
==SHORT ANSWER==
    •   To install an npm package as a node module, you find a package on the npmjs.com website, then go to
        Gitbash and install that library with "npm i [package-name-here]".

==EXTENDED ANSWER==
    •   To find a npm package, you first need to go to npmjs.com and find the name of the package you want to install.
    •   To install a npm package, in Gitbash (in you project folder), you install using "i" or "install" and the name 
        of the package.
            o   Following installation, two things will happen:
                1.  The package.json file will have an updated DEPENDENCIES property with the new npm package 
                    and its version.
                2.  A new "node_modules" folder will be created (or if this is not your first package, then it will be updated).
                        o   Inside the "node_modules" folder you will have the package and a package.json with the metadata 
                            of your installed package.

==PRACTICAL EXAMPLES==
    How do you install an npm package?
    =================================

        STEP 1: Find an npm package on npmjs.com.
        =========================================
            •   For this example, we'll install the "underscore" package.
            •   On the package page, you will see the command line install line: 
                
                npm i underscore


        STEP 2: Install the npm package in Gitbash
        ==========================================
        • In Gitbash, run the command line install line and you will see


                $ npm install underscore
                npm notice created a lockfile as package-lock.json. You should commit this file.
                npm WARN npm-demo@1.0.0 No description
                npm WARN npm-demo@1.0.0 No repository field.

                + underscore@1.9.1
                added 1 package in 0.398s


    How do you install a specific version of a package?
    ===================================================
    •   To install a specific version of a package, install the package, then the "@" symbol followed by the version number.
        
                npm install [package-name]@5.8.2

        
    How do you find out which packages are outdated?
    ================================================
    •   To find out if you have a package that is outdated, you write "npm outdated" and you will see a list of 
        current, wanted, latest, and location.

                npm outdated
    
                
    How do you update a package to the latest version of minor and patch releases?
    ==============================================================================
    •  write "npm update [package-name]" for a specific package
    •  write "npm update" for project wide update of packages.


    How do you update to the latest version of major releases using ncu?
    ====================================================================
    •  write "npm install -g npm-check-updates"
        o   This will give you a new command line tool called "npm check updates"

                npm install -g npm-check-updates


    •  When you write "npm-check-updates", you will see all the packages you have installed and the newest version available.

                npm-check-updates

    • To update the packages, you simply write "npm-check-updates -u" or "ncu -u"   
        o   However, this will only update the package.json.
        o   To complete this upgrade, you need to install the dependency with "npm i"

                ncu -u
                npm i
*/



/* 
4. How do you uninstall a npm package?
//////////////////////////////////////
    •   If you have a package that you no longer need in your application, simply write:

                npm uninstall [package-name]  
                    (or)  
                npm un [package-name]
*/



/* 
5. How do you use a npm module? 
////////////////////////////////
==SHORT ANSWER==
    •   To use an npm module, you need to load the module using the require function and store it as a const.  

==EXTENDED ANSWERS==
    •   Once you have installed a library (e.g. underscore) as a node module, you can use it in your code.
    •   To use an npm module, you need to load the module using the require function and store it as a const.
    •   Then, we can use the built-in methods outlined in the documentation of underscore (https://underscorejs.org/).
    
==PRACTICAL EXAMPLE==
    STEP 1: In the file you wish to use the module, load the library and store it as a const variable.
    ==================================================================================================
            
                const _ = require('underscore');              <== note here that the symbol "_" is by convention used for the underscore library.


    STEP 2: To USE the module
    ========================
        •   To use the module, find your desired method in the module documentation (http://underscorejs.org).
        •   For this example, lets use the "contains" method returns a boolean value (i.e. true or false) searching for 
            a value in an array.
                o   In the example below, we're looking for the value of 3 in an array of [1,2,3].

                let result = _.contains([1,2,3], 3);                 //=> In Gitbash, when you run "node index.js" you will get true.
*/



/* 
6. What are package dependencies in package.json?
//////////////////////////////////////////////////
==SHORT ANSWER==
    •   Package dependencies are used to specify any other modules that a given module requires to work.             

==EXTENDED ANSWERS==
    •   In your package.json file you will see a list of dependencies in the dependency property FOR YOUR APPLICATION.
            o   The application NEEDS these depencies in order to function properly.
    •   The package dependencies property is where dependencies (i.e. the other modules that THIS module uses) are defined.

==EXAMPLE==
        "dependencies": {                        <== dependencies object
            "underscore": "^0.2.10",             <== dependency with version number as a value.
            "async": "^0.2.10",
            "npm2es": "~0.4.2",
            "optimist": "~0.6.0",
        },

    What is semantic versioning?
    ============================
    •   Semantic versioning helps keep your application up to date with the latest releases.
    •   Semantic versioning (or samver), the version of a node package has 3 components: major.minor.patch.
 
                  major version        patch version
                               \      /
                "underscore": "^0.2.10",
                                |
                              minor version

        Semantic versioning components
        ==============================   
        •   The patch number will increase if there is a bug that is fixed.
        •   The minor number will increase if there are new features that are added that dont break the existing api.  
            o   note that the patch number will be reset to 0 until bugs are discovered and fixed.
        •   The major number will increase if there is something that could break the dependencies of mongoose. 
        
        Symbols (or none)
        =================
        •   The carot symbol (^) means that we would be interested in anything that has the current major version (e.g. minor or patch update).
        •   The tilde symbol (~) means that you want any version so long as the version is better than the current.
        •   No symbol ( ) means that you want to keep the same version of the module so it cannot break.

    


    How do you view the registry of your package on Gitbash?
    ========================================================
        •   If you cannot get to the npm registry to see the list of dependencies, you simply go to Gitbash and type:
            o   This will show the package.json file in gitbash. 

                    npm view [package-name-here]
           

    How do you view ONLY dependencies of your package on Gitbash?
    =============================================================
        •   To view dependencies property ONLY:

                    npm view [package-name-here] dependencies


    How do you know what package version is installed?
    ==================================================
        •   There are THREE ways:
            o   Look at package.json.
            o   Write "npm list" in Gitbash.
            o   Write "npm list --depth=0" in Gitbash.
        

            1.  First way is to look at package.json
                    
                    node_modules ==> mongoose ==> package.json ==> "version": "4.13.6"

            2.  Second way is to go to Gitbash and write "npm list".
                
                    $ npm list
                    npm-demo@1.0.0 C:\Users\Admin\Desktop\NodeTestApps\npm-demo
                    +-- mongoose@5.5.13
                    | +-- async@2.6.2
                    | | `-- lodash@4.17.11
                    | +-- bson@1.1.1
                    | +-- kareem@2.3.0
                    | +-- mongodb@3.2.6
                    ...
                    more
                    ...

            3.  Third way is to find the dependencies of only YOUR application with "--depth=0"

                    $ npm list --depth=0
                    npm-demo@1.0.0 C:\Users\Admin\Desktop\NodeTestApps\npm-demo
                    +-- mongoose@5.5.13
                    `-- underscore@1.9.1


    How do you check for all the versions of a dependencies?
    ========================================================
        •   npm view [package-name-here] versions
*/



/* 
7. What are DevDependencies and what do they do?
////////////////////////////////////////////////
    •   A DevDependency is a dependency that is used only in development, such as tools for running unit tests, static analysis 
        code, dependencies for bundling JavaScript code, etc.
    •   Since DecDependencies are for development and not for essential for successful operation of the application, they should
        NOT go in the same production enviroment where we deploy our application.
    •   DevDependencies are stored in the "node_modules" folder but seperated in package.json

    How do you install a DevDependency?
    ===================================
    •   To install a DevDependency, you install the package and add "--save-dev" at the end.

            $ npm install jshint --save-dev

    •   In your package.json file, you will see a new propery "devDependencies" with the new package installed.

            {
                "name": "npm-demo",
                "version": "1.0.0",
                "description": "",
                "main": "index.js",
                "scripts": {
                    "test": "echo \"Error: no test specified\" && exit 1"
                },
                "author": "",
                "license": "ISC",
                "dependencies": {
                    "mongoose": "^5.5.13",
                    "underscore": "^1.9.1"
                },
                "devDependencies": {                        <== This tells node this is a development dependency and should NOT go in production enviroment.
                    "jshint": "^2.10.2"
                }
            }        
*/



/* 
8. What is .gitignore and why do you need it with version control?
//////////////////////////////////////////////////////////////////
==SHORT ANSWER==
    •   Because the node_modules files can grow in size (potentially 100's of mb's), when you check your code into a source code repository, 
        you want to make sure you DO NOT include this folder.
            o   The main reason is because if someone checks out your code, they would have to wait for those files to download.

    How do you exclude the node_modules file from your git repository?
    ==================================================================
        •   To exclude node_modules from git, simple create a file called ".gitignore".
        •   Inside .gitignore, you put down all the files you want git to ignore (with a forward slash because it is a folder):

                node_modules/
        
        •   In the terminal, you should expect to see "node_modules" omitted from untracked files!


    How do you restore dependencies?
    ================================
        •   Suppose you were on a different machine or downloaded this project and didnt have these installed.
        •   When you run "npm install", it will restore all dependencies listed in package.json.
        •   npm will look up package.json and download those dependencies from the npm registry.
*/



/* 
9. How do you publish your own node package and publish on npm registry?
/////////////////////////////////////////////////////////////////////////
    •   
*/


/* 
10. How do you update an uploaded node package and publish on npm registry?
///////////////////////////////////////////////////////////////////////////
    •   
*/

























/*
https://www.npmjs.com/ -- npmjs main
https://underscorejs.org/  underscore documentation
https://nodesource.com/blog/the-basics-of-package-json-in-node-js-and-npm/ -- package.json but other good info too
*/