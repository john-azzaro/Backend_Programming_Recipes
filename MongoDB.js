"use strict";
// TOPIC /////////////////////////////////////////////////////////////////////////////////////////////////////
//     MongoDb
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//      1. What is MongoDB and why is a database management system necessary?
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
1. What is MongoDB and why is a database management system necessary?
/////////////////////////////////////////////////////////////////////
==SHORT ANSWER==    
    •   MongoDB is a popular, schema-less NoSQL document database that allows you to simply store your json object in the database. 
    •   MongoDB stores "documents" of data and will store it unlike data stored to memory which will be lost when the application is restarted.

==EXTENDED ANSWER==
    •   Although in some applications you can store data to memory, when the server restarts you will lose all your data so you 
        need to store your data in a database.
    •   Using Node and Express, you have a large number of database choices, including MongoDB.
    •   Using MongoDB, we can store objects in a collection in MongoDB.
         o  Additionally, when querying data out of MongoDB, you get JSON objects which can be returned to the client.
    •   MongoDB is a popular database management system.
    •   MongoDB is a schema-less NoSQL document database. 
    •   MongoDB differs from traditional databases that use concepts like tables, schemas, views, records, columns, etc. 
    •   MongoDB is different from relational databases where you have to design your database ahead of time.
    •   With MongoDB, It means you can:
        o   store JSON documents in it, 
        o   structure of these documents can vary as it is not enforced like SQL databases. 
            o   This is one of the advantages of using NoSQL as it speeds up application development and 
                reduces the complexity of deployments.
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
    •   Within MongoDB Compass, you can see your databases.
            
                > admin
                > config
                > local
                > testDB         
        
    •   Inside those databases, you can see collections within those databases, how many documents in each collection, and 
        other information such as document size, number of indexes, and total index size. 

            Collection Name    Documents   Avg. Document Size   Total Document Size    Num. Indexes    Total Index Size    Properties
            _______________    _________   __________________   ___________________    ____________    ________________    __________
                books            3,950          451.2 B               1.8 MB                1               45.1 KB             
    

        o   "Collection" is like a table in a relational database.
        o   "Documents" are like rows in relational databases.
            o   Inside each document are a list of key/value pairs.

                {"_id":"59074c7c057aaffaafb0da64",
                "Author": Object,                      
                "genre":"fiction",
                "uisinec":"Italian",
                "reviews" Array:
                "name":"Making Bread the Easy Way",
                "book_id":"40365784"}

*/




/* 
What is a schema and how do you create one?
///////////////////////////////////////////
==SHORT ANSWER==
   •   A "schema" is used to define the shape (i.e. layout of properties) of documents within a collection in MongoDB.
   •   To create a schema, you                  

==EXTENDED ANSWER==
   •   A schema is used to define the properties we have in a collection's document.  
   •   In other words, a schema is a template that you can plug data into and save in a collection in MongoDB.  
   •   In MongoDB Compass for each database you will see "collections".
   •   A "document" in a MongoDB "collection" is an individual instance of each schema with unique values in the standard properties.
   •   Think of schemas like the difference between Classes and objects.  
        o   A Class would be a human.
        o   An object would be a person named "Joe". 
        o   So in the example below, our Class will be the "Course" blueprint and our object will be an instance of that 
            blueprint, like "Intro to Cooking".
                    
==PRACTICAL EXAMPLE==

   How do you create a schema?
   ===========================

        STEP 1: First, create  the "blueprint" of your document in MongoDB:
        ====================================================================
        •   In index.js, create a constant called "courseSchema" which will define the shape of 
            course documents in MongoDB and set it to new mongoose.Schema class.
        

                    const courseSchema = new mongoose.Schema({
                        // properties go here
                    });



        STEP 2: Second, create the properties for your schema with names and types for values:
        =======================================================================================
        •   Because this creates a new instance of the class, you pass an object with the key/value pairs in the course documents.
        •   This course "schema" will define the shape (layout) of the course documents (individual instances) in the Mongo database.

                    const courseSchema = new mongoose.Schema({
                        name: String,                                <== name key with value that will be a String
                        author: String,
                        tags: [ String ],                           <== will be an array of strings
                        date: { type: Date, default: Date.now },    <== can either be Date or object with a type property set to dat and default date when course created. 
                        isPublished: Boolean
                    });


        What types can you use when creating a schema?
        ============================================== 
            •  There are types you can use, such as:
                o  String             
                o  Number             
                o  Date             
                o  Buffer           <== used for string binary data.   
                o  Boolean              
                o  ObjectID         <== used for assinging unique identifiers.     
                o  Array             
    */



/* 
What is a Model and how do you create one? 
///////////////////////////////////////////
    •   To create a class (i.e. course), you need to compile a schema into a model.
          
    
    STEP 0: Once you have an existing schema...
    ============================================

                    const courseSchema = new mongoose.Schema({
                        name: String,
                        author: String,
                        tags: [ String ],
                        date: { type: Date, default: Date.now },
                        isPublished: Boolean
                    });                   



    STEP 1: Compile that schema into a "model" that gives you a "Class":
    ====================================================================

    •   Create a mongoose object with the method "model" with 2 arguments, the name of the collection the model is 
        for and the second is the name of the schema that defines the documents in this collection:
            o   First argument is the collection you want to apply the schema to.
            o   Second argument is the schema model you want to use for the collection you just specified.
    •   Then set as a constant with the name "Course" with a capital.
            o   Remember, capital is using pascal naming conventions to denote a Class (i.e. not an object).
    •   Once you do this, you can create an object based on this class.
   

                                            collection name
                                                        \
                        const Course = mongoose.model('Course', courseSchema);
                            /                                       \
                        Class name                                "courseSchema" blueprint
                                                                            |      
                                                                            |
                                                                           \|/
                                                                        const courseSchema = new mongoose.Schema({
                                                                            name: String,
                                                                            author: String,
                                                                            tags: [ String ],
                                                                            date: { type: Date, default: Date.now },
                                                                            isPublished: Boolean
                                                                        });


    STEP 2: Create an object based on the class you just created which maps to a document in Mongo database:
    ========================================================================================================

    •   To create a new object, create a new Course (see step 1) and store as "course" and pass the new object.
    •   Note here that in noSQL databases like Mongo, the document can have complex objects (i.e. tags with an array of strings). 
            o   Relational databases like SQL have simple attributes and the same structure below will have 3 tables such as:
                Courses, tags, and an intermediary table called course tags.

                        const Course = mongoose.model('Course', courseSchema);
                        const course = new Course({                              <== create a "new Course" and pass an object that fills the schema model...
                            name: 'Italian Cooking Course',
                            author: 'Joe Franco',
                            tags: ['italian', 'food'],
                            isPublished: true                                    <== note here that "date" was already defined to have a defautl value so you dont need it here. 
                        });

*/



/* 
How do you save a document based on a schema to Mongo database?
///////////////////////////////////////////////////////////////
    •   To save the new objects (that are modeled on repsective schemas), you need to 






*/




















/* 
https://www.freecodecamp.org/news/introduction-to-mongoose-for-mongodb-d2a7aa593c57/
https://stackoverflow.com/questions/50448272/avoid-current-url-string-parser-is-deprecated-warning-by-setting-usenewurlpars -- workaround for mongodb connection
*/