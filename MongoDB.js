"use strict";
// TOPIC /////////////////////////////////////////////////////////////////////////////////////////////////////
//     MongoDb
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//      1. 
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
            o   Make sure to install MongoDB Compass (this is the client application to connect to the MongoDB server).
        o   Second, navigate to the installation folder 
            o   Navigate to this file:  C:\Program Files\MongoDB\Server\4.0\bin
            o   Find "mongod", which is mongo daemon (the mongoDB server) and copy the directory as it is above.
        o   Third, in windows search bar, search for "advanced system settings"
            o   Then, select "enviroment variables".
            o   Edit the PATH variable and add a new entry using the previous path.

    STEP 2: In command prompt, run "mongod":
    ========================================
    •   When you run "mongod" in command prompt, you will see multiple lines of output like "2019-06-25T12:11:32.446-0800 I Control [initandlisten] MonogDb starting : ..."
    •   If you get "exception in initandlisten: NonExitentPath: Data directory C:\data\db not found, terminating", this means that by default
        MongoDB stores your data in this folder, but the folder is not there yet.
        o   So in Gitbash, write "md c:\data\db".
        o   After you do this, MongoDB should run.              

*/





















/* 
https://www.freecodecamp.org/news/introduction-to-mongoose-for-mongodb-d2a7aa593c57/
*/