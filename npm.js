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
     
    How do you update NPM to the latest version?
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
        2.      package name: (npm-demo)                                               <== Name of your project (file name of npm-demo by default)
        3.      version: (1.0.0)                                                       <== Project version number
        4.      description:                                                           <== description of project
        5.      entry point: (index.js)
        6.      test command:
        7.      git repository:
        8.      keywords:
        9.      author:
        10.     license: (ISC)
                About to write to C:\Users\Admin\Desktop\npm-demo\package.json:

                {
                "name": "npm-demo",
                "version": "1.0.0",
                "description": "",
                "main": "index.js",
                "scripts": {
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