"use strict";
// TOPIC /////////////////////////////////////////////////////////////////////////////////////////////////////
//     MongoDb
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//      1. What is MongoDB?
//      2. How do you use MongoDB?
//         +  How do you install MongoDB?
//         +  What is mongod and why do you use it?
//         +  How do you view the defautl Mongo database?
//
// NOTES ////////////////////////////////////////////////////////////////////////////////////////////////////
//     1. Useful overview of information on MongoDB from study, research, tutorials, mentor meetings,
//         peer discussions, and good ole' fashioned curiosity.  I've put the document in Question
//        and Answer format for usefulness and improved readability.
// 
//////////////////////////////////////////////////////////////////////////////////////////////////////////////


/* 
What is MongoDB?
/////////////////
==SHORT ANSWER==    
    •   MongoDB is a schema-less NoSQL document database that allows you to simply store your json object in the database. 


==EXTENDED ANSWER==
    •   Although in some applications you can store data to memory, when the server restarts you will lose all your data so you 
        need to store your data in a database.
    •   Using Node and Express, you have a large number of database choices, including MongoDB.
    •   MongoDB is a popular database management system that 
    •   MongoDB is a schema-less NoSQL document database. 
    •   MongoDB differs from traditional databases that use concepts like tables, schemas, views, records, columns, etc. 
    •   MongoDB is different from relational databases where you have to design your database ahead of time.
    •   With MongoDB, It means you can:
        o   store JSON documents in it, 
        o   structure of these documents can vary as it is not enforced like SQL databases. 
            o   This is one of the advantages of using NoSQL as it speeds up application development and 
                reduces the complexity of deployments.


==EXAMPLE==
    •   In the example below, you have an array of books, with objects representing individual books.

                    const books = [
                    { id: 1, name: 'Fiction' },  
                    { id: 2, name: 'Non-Fiction' },  
                    { id: 3, name: 'Romance' },  
                    ];

    •   Using MongoDB, we can store all these objects in the array above in a collection in MongoDB.
    •   Additionally, when querying data out of MongoDB, you get JSON objects which can be returned to the client.
*/



/* 
How do you use MongoDB?
///////////////////////

    STEP 1: Install MongoDB:
    =======================
    •   To use MongoDB, you first need to install MongoDB on your computer 
        o   First, install MongoDB by going to: https://www.mongodb.com/download-center/community
            o   Make sure to install Complete installation. 
            o   DO NOT INSTALL (i.e. uncheck) MongoDB Compass, there are issues doing this with complete installation so better to install seperately
                after the rest of the program is installed.     
            o   Make sure to install MongoDB Compass (this is the client application to connect to the MongoDB server).
        o   Second, navigate to the installation folder 
            o   Navigate to this file:  C:\Program Files\MongoDB\Server\4.0\bin
            o   Find "mongod", which is mongo daemon (the mongoDB server) and copy the directory as it is above.
        o   Third, in windows search bar, search for "advanced system settings"
            o   Then, select "enviroment variables".
            o   Edit the PATH variable and add a new entry using the previous path.
        o   Lastly, install "MongoDB Compass" community version to use the database GUI.


    STEP 2: In command prompt, run "mongod":
    ========================================

                    mongod                

    •   When you run "mongod" in command prompt, you will see multiple lines of output like "2019-06-25T12:11:32.446-0800 I Control [initandlisten] MonogDb starting : ..."
    •   If you get "exception in initandlisten: NonExitentPath: Data directory C:\data\db not found, terminating", this means that by default
        MongoDB stores your data in this folder, but the folder is not there yet.
        o   So in Gitbash, write "md c:\data\db".
        o   After you do this, MongoDB should run and you will see at the end "waiting for connections on port 27017" which verifies that MongoDB server IS RUNNING.
        

    STEP 3: In Gitbash, run "mongo" to start the interactive Mongo shell:
    =====================================================================
    •   When you run "mongo", you will see this:

                    $ mongo
                    MongoDB shell version v4.0.5
                    connecting to: mongodb://127.0.0.1:27017/?gssapiServiceName=mongodb
                    Implicit session: session { "id" : UUID("fdfdb4ce-ecfc-4fd1-b426-3887a1ac7fd3") }
                    MongoDB server version: 4.0.5


    OPTIONAL: To show the default database for mongo, run the command "show dbs;"
    =============================================================================                

                    $ mongo
                    MongoDB shell version v4.0.5
                    connecting to: mongodb://127.0.0.1:27017/?gssapiServiceName=mongodb
                    Implicit session: session { "id" : UUID("805e412e-6b52-4869-a045-a1dad11ccd05") }
                    MongoDB server version: 4.0.5
                    show dbs;                                                                      <== to see the local database.
                    admin            0.000GB                                                       <== Default database.
                    config           0.000GB
                    local            0.000GB                                                       <== Default database.


    OPTIONAL: To exit Mongo shell (in Gitbash), write "quit()":
    ===========================================================

                    quit()

    OPTIONAL: To exit Mongod (in command prompt), press ctrl-c
    ==========================================================
                    
                    ctrl-c
*/


/* 
What is mongoose and how do you install it?
////////////////////////////////////////////
    •   Mongoose is a simple API to work with a MongoDB database. 

    STEP 1: Make sure you have your project folder run "npm init":
    ===============================================================
           
                    mkdir mongo-test
                    npm init

    STEP 2: Install the node package "mongoose":
    =============================================

                    npm install mongoose

                    */




/* 
How do you connect with MongoDB?
////////////////////////////////
    •   In your index.js file:

    STEP 1: Connect to MongoDB by first loading the mongoose module and storing it as a constant:
    =============================================================================================

                    const mongoose = require('mongoose');         <==
 

    STEP 2: Use the ".connect" method to connect to MongoDB:
    ========================================================
                    
                    const mongoose = require('mongoose');

                    mongoose.connect('')                          <==


    STEP 3: Pass a connection string that references the mongo database we have installed on the computer FOR LOCAL DEVELOPMENT:
    ============================================================================================================================
        •   Note that when the application is deployed to the production enviroment, you use a different connection string. 
        •   Also note that the database "playground" will be created          

                    const mongoose = require('mongoose');

                    mongoose.connect('mongodb://localhost/playground')  
                    

    STEP 4: The ".connect" method FRST returns a PROMISE that when the promise is fulfilled, log "Connected to MongoDB..."
    ======================================================================================================================

                    const mongoose = require('mongoose');

                    mongoose.connect('mongodb://localhost/playground')  
                        .then(() => console.log('Connected to MongoDB...'));        <== "then", when the promise is fulfilled (i.e.()=>) log "connected to mongodb..."


    STEP 5: And lastly add a "catch" if there is an error
    =====================================================

                    const mongoose = require('mongoose');

                    mongoose.connect('mongodb://localhost/playground')
                        .then( () => console.log('Connected to MongoDB...'))
                        .catch( (err) => console.log('Could not connect to MongoDB...', err))


*/



/* 
What is MongoDB compass and what does it do?
////////////////////////////////////////////
    •   MongoDB Compass is a simple GUI that allows users to explore data.
    •   MongoDB Compass lets you explore, insert, modify, and delete from your database visually as well as run ad hoc queries.

*/




/* 
What is a schema?
////////////////////
==SHORT ANSWER==
   •   A "schema" is used to define the shape of documents within a collection in MongoDB.

=+EXTENDED ANSWER==
   •   In MongoDB Compass for each database you will see "collections".
   •   A "collection"    
        
   How do you create a schema?
   ===========================

        STEP 1: 


*/





















/* 
https://www.freecodecamp.org/news/introduction-to-mongoose-for-mongodb-d2a7aa593c57/
https://stackoverflow.com/questions/50448272/avoid-current-url-string-parser-is-deprecated-warning-by-setting-usenewurlpars -- workaround for mongodb connection
*/