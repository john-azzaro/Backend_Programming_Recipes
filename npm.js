"use strict";
// TOPIC /////////////////////////////////////////////////////////////////////////////////////////////////////
//     Node Package Manager (NPM)
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//      1. What is Node Package Manager (NPM)?
//         +  How do you install NPM? 
//         +  How do you verify your NPM installation? 
//         +  How do you update NPM to the latest version?
//         +  How do you access npm help? 
//         +  How do you install a specific version of npm?
//      2. What is package.json?
//         +  How do you create a package.json file?
//         +  If you want to bypass these questions and make a package.json file in a rush
//      3. How do you install an npm package (i.e. third party library)?
//         +  How do you update a package to the latest version?
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
    •   Node Package Manager, or NPM, is a command line tool (such as using Gitbash) is a command line tool that 
        installs, updates, or uninstalls Node.js packages in your application.
            o  NPM is also an online repository for open-source Node.js packages where the community creates useful modules
               and published them as packages to the repository.
            o  NPM and Node are developed independently, so if you check the version of npm and node, they will be different.

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
What is package.json?
////////////////////////
    •   The package.json file is the core of the node ecosystem.
    •   The package.json file is used as a manifest about applications, packages, etc.
    •   The package.json file is used to make development streamlined, modular, and efficient.

==EXTENDED ANSWER==
    •   Package.json is a JSON file that include basic information about your application.
            o   When created, the package.json file will have a JSON object with key/value pairts
    •   Before you create any files in your project you need to create a package.json.
    •   All applications have as a standard the package.json file.
    •   Package.json includes "metadata" information for your application such as:
            o   name
            o   version
            o   authors
            o   git repo address
            o   dependencies
            o   etc.


==PRACTICAL EXAMPLE==

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


        OPTIONAL: If you want to bypass these questions and make a package.json file in a rush
        ======================================================================================
            •   write npm init --yes
*/



/* 
3. How do you install an npm package (i.e. third party library)?
////////////////////////////////////////////////////////////////
==SHORT ANSWER==
    •   To install an npm package (i.e. third party library) as a node module, you find a package in the npmjs.com
        library and install with "npm i [package-name-here]".

==EXTENDED ANSWER==
    •   To find a npm package, you first need to go to npmjs.com and find the name of the package you want to install.
    •   To install a npm package, in Gitbash (in you project folder), you install using "i" or "install" and the name 
        of the package.
            o   When you install, two things will happen:
                1.   The package.json file will have an updated DEPENDENCIES property with the new npm package and its version.
                2.   A new "node_modules" folder will be created (or if this is not your first package, then it will be updated).
                        o   Inside the "node_modules" folder you will have the package and a package.json with the metadata 
                            of your installed package.

==EXAMPLES==



    How do you install an npm package?
    ==================================
    
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


    How do you update a package to the latest version?
    ==================================================
    •  write "npm update [package name]"
*/



/* 
4. How do you USE a npm module? 
////////////////////////////////
==SHORT ANSWER==
    •   


==EXTENDED ANSWERS==
    •   Once you have installed a library (e.g. underscore) as a node module, you can use it in your code.
    •   To use an npm module, you need to load the module using the require function and store it as a const.
    •   Then, we can use the built-in methods outlined in the documentation of underscore (https://underscorejs.org/).
    
    STEP 1: In the file you wish to use the module, load the library and store it as a const variable.
    ==================================================================================================
            
                const _ = require('underscore');              <== note here that the symbol "_" is used for the underscore library by convention.


    STEP 2: To USE the module
    ========================
        •   To use the module, find your desired method in the module documentation (http://underscorejs.org).
        •   For this example, lets use the "contains" method returns a boolean value (i.e. true or false) searching for 
            a value in an array.
                o   In the example below, we're looking for the value of 3 in an array of [1,2,3].

                let result = _.contains([1,2,3], 3);                 //=> In Gitbash, when you run "node index.js" you will get true.
*/



/* 
What are package dependencies in package.json?
///////////////////////////////////////////////
==SHORT ANSWER==
    •   In your package.json file you will see a list of dependencies in the dependency property
    •   The package dependencies property is where dependencies (i.e. the othe rmodules that THIS module uses) are defined.

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


    How do you know what package version is installed?
    ==================================================
        •   There are THREE ways: 
            o   First way is to look at package.json
                    
                    ode_modules ==> mongoose ==> package.json ==> "version": "4.13.6"

            o   Second way is to go to Gitbash and write "npm list".
                
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

            o   Third way is to find the dependencies of only YOUR application with "--depth=0"

                    $ npm list --depth=0
                    npm-demo@1.0.0 C:\Users\Admin\Desktop\NodeTestApps\npm-demo
                    +-- mongoose@5.5.13
                    `-- underscore@1.9.1

*/



/* 
What is gitignore and why do you need to include it?
////////////////////////////////////////////////////
==SHORT ANSWER==
    •   Because the node_modules files can grow in size (potentially 100's of mb's), when you check your code into a source code repository, 
        you want to make sure you DO NOT include this folder.
            o   The main reason is because if someone checks out your code, they would have to wait for those files to download.

    To exclude the node_modules file from your git repository:
    ==========================================================
        •   To exclude node_modules from git, simple create a file called ".gitignore".
        •   Inside .gitignore, you put down all the files you want git to ignore (with a forward slash because it is a folder):

                node_modules/
        
        •   In the terminal, you should expect to see "node_modules" omitted from untracked files!


    To restore dependencies:
    =======================
        •   Suppose you were on a different machine or downloaded this project and didnt have these installed.
        •   When you run "npm install", it will restore all dependencies listed in package.json.
        •   npm will look up package.json and download those dependencies from the npm registry.
*/



/* 
What is semantic versioning?
/////////////////////////////

*/




























/*
https://www.npmjs.com/ -- npmjs main
https://underscorejs.org/  underscore documentation
https://nodesource.com/blog/the-basics-of-package-json-in-node-js-and-npm/ -- package.json but other good info too
*/