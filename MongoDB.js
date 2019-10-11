"use strict";
// TOPIC /////////////////////////////////////////////////////////////////////////////////////////////////////
//     MongoDb
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//      1. What is MongoDB and why is a database management system necessary?
//      2. How do you use MongoDB?
//         +  How do you install MongoDB?
//         +  What is mongod and why do you use it?
//         +  How do you view the defautl Mongo database?
//      3. What is mongoose and how do you install it?
//      4. How do you connect with MongoDB?
//      5. What is MongoDB compass and what does it do?
//      X. What is an example of the flow of saving a user to a mongoDB database?
//      6. What is a schema and how do you create one?
//         + How do you create a schema?
//         + What types can you use when creating a schema?
//      7. What is a Model and how do you create one? 
//      8. How do you save a document (based on a schema) to Mongo database?
//      9. How do you build queries (i.e. retrieve documents from a Mongo database)?
//         + How do you filter queried documents?
//         + How do you add more querying options?
//     10. What are comparison operators and how do you use them while querying documents?
//     11. What are logical query operators and how do you use them while querying documents? 
//     12. What are regular expressions and how do you use them while querying documents? 
//     13. How do you find out how many documents you have in your database? 
//     14. What is pagination and how do you use it while querying documents? 
//     15. How do you update document in the MongoDB database? 
//         + How do you update a document with the "Query first" approach?
//         + How do you update a document with "update first"?
//     16. How do your remove a document from MongoDB?  
//         + How do you delete a single document?
//         + How do you delete a multiple document?
//         + How do you make sure a document was deleted?
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
2. How do you use MongoDB?
///////////////////////////

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
3. What is mongoose and how do you install it?
///////////////////////////////////////////////
    •   Mongoose is a simple API to work with a MongoDB database.
    •   MOngoose is an Object Data Modeling (ODM) library for MongoDB and Node.js.
    •   Mongoose manages relationships betwene data, provides schema validation, and is used to translate betwene objects in code and represetn those
        objects in MongoDB. 
    •   Mongoose is an Object Document Mapper (ODM) that makes MongoDB easier to translate documents in a MongoDB database to objects in a program.
    •   There are alternatives to Mongoose such as Doctrine, MongoLink, and Mandango.
    •   Mongoose creates an easy to use object reference when interacting with MongoDB.

    STEP 1: Make sure you have your project folder run "npm init":
    ===============================================================
           
                    mkdir mongo-test
                    npm init

    STEP 2: Install the node package "mongoose":
    =============================================

                    npm install mongoose

                    */




/* 
4. How do you connect with MongoDB?
////////////////////////////////////
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


    Note that although the method is sufficient, for a more detailed connection method with more feature, please see the mongoose study repository:


*/



/* 
5. What is MongoDB compass and what does it do?
///////////////////////////////////////////////
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
What is an example of the flow of saving a user to a mongoDB database?
///////////////////////////////////////////////////////////////////////
    1. Connect to your database.
    2. Create a schema of a person
    3. Register that model to mongoose.
    4. Create a new instance of Person with the new data.
    5. Then call save method to save the data to the database.



*/



/* 
6. What is a schema and how do you create one?
///////////////////////////////////////////////
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
7. What is a Model and how do you create one? 
//////////////////////////////////////////////
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
8. How do you save a document (based on a schema) to Mongo database?
////////////////////////////////////////////////////////////////////
==SHORT ANSWER==
    •   To save the new objects, create a new async/await function and directly after your new object, add the ".save" method to your
        new object and store the "result" as a constant.
            o   This will save the course to MongoDB and this will be assigned a unique identifier for the document (i.e document) 
                and when "result" is finally stored, you can see the id assigned to it.
    
==EXAMPLE==
 
                            "await"...        ... the promise of the course object which uses the method ".save"...    
                             /                /
            const result = await course.save() 
                    \
                     ...and store the course object as "result" to the database.


==PRACTICAL EXAMPLE==

    STEP 0: With your new object...
    ================================== 
                        ...                        
                        const course = new Course({                    <== create a course object...              
                            name: 'Italian Cooking Course',
                            author: 'Joe Franco',
                            tags: ['italian', 'food'],
                            isPublished: true                                   
                        });
                        ...
                        ...
                        

    STEP 1:  Insert the object into a new async function...
    ==============================================================
    
                        async function createCourse() {                  <== add async/await function...
                            const course = new Course({                  
                                name: 'Italian Cooking Course',
                                author: 'Joe Franco',
                                tags: ['italian', 'food'],
                                isPublished: true
                            });
                            ...
                            ...
                        }
                        createCourse();

    STEP 2: Save the object to mongoDB:
    ===================================
    •   ".save()" is an asynchronous operation because it will take time to save the "course" to the database because we 
        need to access the file system (thus it is an asynchronous operation) which will be ready in the future.                   
            •   So ".save()" returns a promise which we can "await" and get the result.


                        async function createCourse() {
                            const course = new Course({
                                name: 'Italian Cooking Course',
                                author: 'Joe Franco',
                                tags: ['italian', 'food'],
                                isPublished: true
                            });
                            const result = await course.save();        <== await the async operation of course.save()...
                            console.log(result)                        <== and log result to the console.
                        }
                        createCourse();
                

                o   The result in the console should be:

                        $ node index.js
                        Connected to MongoDB...
                        { tags: [ 'italian', 'food' ],               <== this is the document that is stored in MongoDB!
                        _id: 5d17e75a3d52921858ce5658,               <== Note that MongoDB assigned a unique identifier as well!
                        name: 'Italian Cooking Course',
                        author: 'Joe Franco',
                        isPublished: true,
                        date: 2019-06-29T22:34:02.188Z,              <== also note the default that is Date.now!
                        __v: 0 }


    •   And when you check compass, your mongo database, you will see under "documents" your new object saved to the database. 
    

    OPTIONAL: To create another document, you would simply change the values of your object and run again.
    =======================================================================================================
    •   And when you check compass again, you will have another document added below with the new information.
*/




/* 
9. How do you build queries (i.e. retrieve documents from a Mongo database)?
/////////////////////////////////////////////////////////////////////////////
==SHORT ANSWER==
    •   To retrieve documents from a Mongo database, within an async function you use the ".find" method on your given Class (in this case Course). 

==EXTENDED ANSWER==
    •   Note that There are a few variations of the ".find" method, including:
            o   ".find" to find a list of documents.
            o   ".findByID" which finds the document by ID.
            o   ".findOne" which returns a single document.
            o   etc. 
    
==PRACTICAL EXAMPLE==

                        async function getCourses() {
                            const courses = await Course.find();    <== gets all of the existing documents in the database.
                        }                                     
                        getCourses();                       
                        
                o   In the console, you will see all the current documents in your database.

                        $ node index.js
                        Connected to MongoDB...
                        [ { tags: [ 'italian', 'food' ],
                            _id: 5d153cee8f15e62a6cc54372,
                            name: 'Italian Cooking Course',
                            author: 'Joe Franco',
                            isPublished: true,
                            date: 2019-06-27T22:02:22.484Z,
                            __v: 0 },
                        { tags: [ 'french', 'paris' ],
                            _id: 5d17ea0ec72d880db8ae89a8,
                            name: 'French Cooking Course',
                            author: 'Joe Schmo',
                            isPublished: true,
                            date: 2019-06-29T22:45:34.620Z,
                            __v: 0 } ]


    How do you filter queried documents?
    =====================================
    •   To filter queried documents, you simply pass an argument in the .find() method and add one or more
        key/value pairs to filter for your deisred document.
    •   Remember that you can filter with more than one key/value pair, so you could search for a key word AND
        return only, such as in the example below, those which have been published.  
                                
                        async function getCourses() {
                            const courses = await Course.find( { tags: 'italian'} );     <== passed an object with key/value pairs for filtering.
                        }                                     
                        getCourses();      


                o   In the console, you will see all the current documents in your database.

                        $ node index.js
                        Connected to MongoDB...
                        [ { tags: [ 'italian', 'food' ],                                <== MongoDB returns the object with the tag "italian" in it.
                            _id: 5d153cee8f15e62a6cc54372,
                            name: 'Italian Cooking Course',
                            author: 'Joe Franco',
                            isPublished: true,
                            date: 2019-06-27T22:02:22.484Z,
                            __v: 0 } ]


    How do you add more querying options?
    =======================================
    •   To add more querying options, you simply chain additional methods to narrow down your search using dot-notation.

                                                                   find document with "italian" tags        sort (i.e. order) in ascending order... -1 is in descending order.
                        async function getCourses() {                  /                                    /
                            const courses = await Course.find( { tags: 'italian'} ).limit(10).sort( { name: 1 } ).select( { name: 1, tags: 1 } );
                            console.log(courses)                                           \                         \
                        }                                                               limit results to 10          select the properties we want returned... 1 means return them

*/



/* 
10. What are comparison operators and how do you use them while querying documents?
///////////////////////////////////////////////////////////////////////////////////
==SHORT ANSWER==
    •   Comparison operators enhance querying power.
    •   To use a comparison operator, you replace a simple value with an object to express our query and use an operator like greater-than X,
        less-than X, etc.

==EXTENDED ANSWER==
    •   In MongoDB, you have a bunch of operators for comparing values.
    •   Since mongoose is built on top of the MongoDB driver, the standard operators that Mongo understands are also available in mongoose.
    •   Here are a few comparison operators we can use:
            o   eq (equal)
            o   ne (not equal)
            o   gt (greater than)
            o   gte (greater than or equal to)
            o   lt (less than)
            o   lte (less than or equal to)   
            o   in (in)
            o   nin (not in)    

==EXAMPLE==
    Finding a specific value:
    =========================
            o   For example, suppose you are looking for a course that costs 10:

                    .find( { price: 10 } )

    Finding a value ABOVE a certain value:
    ============================================
            o   Now suppose you wanted to look for courses that were at and above 10 dollars:
            o   To do this, you would use a comparison operator.

                    .find( { price: { $gt: 10 } })

    Finding a value AT OR ABOVE a certain value:
    ============================================
            o   To find a price greater than or equal to 10...

                    .find( { price: { $gte: 10 } })    

    Finding a value within a given range:
    ==================================
            o   To find a price greater than or equal to 10 AND less than or equal to 20...

                    .find( { price: { $gte: 10, $lte: 20 } })

    Finding multiple values:
    ========================
            o   To find multiple prices such as 10, 15, and 20, you use an array with the multiple values inside...

                    .find( { price: { $in: [10, 15, 20]} })    
*/



/* 
11. What are logical query operators and how do you use them while querying documents?
/////////////////////////////////////////////////////////////////////////////////////
==SHORT ANSWER==    
    •   logical query operators consist of either ".or" or ".and" methods which filter based on either "or" or "and" logical conditions.
    •   To use logical query operators, you first use the .find method WITHOUT any filters and then
        chain ".or" or ".and" folloing it.
            o   When you use ".or", you pass an ARRAY and inside that array pass one or more filters (i.e. objects).
            o   When you sue ".and", you also pass an array and one or more object filters.

==EXAMPLE==

                    .find().or([ { author: "Joe Franco"}, { isPublished: true} ])
                    .find().and([ { author: "Joe Franco"}, { isPublished: true} ])
*/



/* 
12. What are regular expressions and how do you use them while querying documents?
//////////////////////////////////////////////////////////////////////////////////
    •   Regular expressions allow you to have more control over filtering strings.
    •   To use a regular expressions, replace the value with a pattern between forward slashes (i.e. /pattern/ ).                     

==EXAMPLE==

    •   If you are looking for an author "Joe", add a carot symbol (i.e. ^) to the beginning of the string:
        
                    .find( { author: /^Joe/ } )           <== The carot symbol (i.e. ^) represents a string that starts with something, in this case Joe.

    •   If you want to look for an author which ENDS with a specific string, add cash sign to the end of the string: 

                    .find( { author: /Franco$/ } )          <==add the forward slashes, the string and a dollar sign ($ represents the end of string) at the end.

    •   If you want to make either of these case insensitive, you add an "i" to the end:

                    .find( { author: /^Joe/i } ) 
                    .find( { author: /Franco$/i } ) 

    •   If you want to look for a specific word in the string, you add ".*" to the beginning and end of the string:

                    .find( { author: /.*Joe.* / } )     <== this means that we can have 0 or more characters before or after "Joe".

*/




/* 
13. How do you find out how many documents you have in your database?
//////////////////////////////////////////////////////////////////////
==SHORT ANSWER==
    •   To find out how many documents you have in your database, you need to use ".count"   
    
==EXAMPLE==

                        async function getCourses() {
                            const courses = await Course
                                .find( author: "Joe Franco", isPublished: true)
                                .count();                                            <== this will return the number of documents in your database
                            console.log(courses)        
                        }
*/


/* 
14. What is pagination and how do you use it while querying documents?
///////////////////////////////////////////////////////////////////////
==SHORT ANSWER==    
    •   Closely related to the ".limit" method, the ".skip" is used to implement pagination by escaping all the documents in the 
        previous page using the formula:  .skip((pageNumber - 1) * pageSize)    
    
==EXAMPLE==   

                    async function getCourses() {
                        const pageNumber = 2;           <== although these are hard coded here, these would be query string parameters (i.e. ${pageNumber}) via api.
                        const pageSize = 10;            <== same thing here too

                        const courses = await Course
                            .find( { tags: 'italian'} )
                            .skip((pageNumber - 1) * pageSize)                <== formula for pagination
                            .limit(pageSize)                                  <== limit is the page size query string parameter passed in.
                            .select( { name: 1, tags: 1} );
                        console.log(courses)
                    }
*/



/* 
15. How do you update document in the MongoDB database?
///////////////////////////////////////////////////////
==SHORT ANSWER==
     •   To update a document in MongoDB, there are two ways:
            1. Query first
            2. Update first

    •   With "Query first", you:
            1. findById()
            2. Modify it's properties
            3. save()

    •   With "Update first", you:
            1. Update the document in the database directly.
            2. Optionally, you can get the updated document as well.
    

    How do you update a document with the "Query first" approach?
    ==============================================================                

        STEP 1: create an async function which takes "id" as a parameter:
        =================================================================

                        async function updateCourse(id) {          <== async function with id passed in.
                            ...
                            ...
                            ...
                            ...
                        }

        STEP 2: Find the course by the given ID:
        ========================================

                        async function updateCourse(id) {
                            const course = await Course.findById(id);          <== await the promise Course object, and with the "findById", pass in the "id" you want to find.
                            ...
                            ...
                            ...
                        }

        STEP 3: Check to see if the course actually exists with an "if" statement:
        ==========================================================================

                        async function updateCourse(id) {
                            const course = await Course.findById(id);          
                            if (!course) {                                     <== if there is NO course, return immediately.
                               return;
                            } 
                            ...
                            ...
                        }

        STEP 4.1: If there IS a course, update the properties by updating each property in "course" individually:
        =========================================================================================================                

                        async function updateCourse(id) {
                            const course = await Course.findById(id);          
                            if (!course) {                                     
                               return;
                            } 
                            course.isPublished = true;              <== otherwise, properties are updated such as updating the property "isPublished" to true.
                            course.author = 'Mike Jones'            <== and updating the author property to another author name.
                            ...
                        }

        STEP 4.2: If there IS a course, use the ".set" method:
        ======================================================

                        async function updateCourse(id) {
                            const course = await Course.findById(id);          
                            if (!course) {                                     
                               return;
                            } 
                            course.set({                            <== calling the .set method, passing an object with the updated properties.
                                isPublished: true,
                                author: 'Mike Jones'
                            });
                            ...
                        }

        STEP 5. Call the .save method to update the document in MongoDB:
        ================================================================

                        async function updateCourse(id) {
                            const course = await Course.findById(id);          
                            if (!course) {                                     
                               return;
                            } 
                            course.set({                            
                                isPublished: true,
                                author: 'Mike Jones'
                            });

                            const result = await course.save();        <== same as creating a new course, so it returns a promise that we await and store as "result"
                            console.log(result);                       <== and print to the console.
                        }

        STEP 6: Them to update the course, simply use a valid course id from your database:
        ===================================================================================

                        updateCourse('5d153cee8f15e62a6cc54372');

    
    How do you update a document with "update first"?
    =================================================
    •   Useful if you receive an input from the client and you want to make sure the update is a valid operation.   
    •   Useful updating documents directly in your database.   
    •   To do this, you use ".update" and first pass a filter object (i.e. {_id = id}) and the second argument is a MongoDB update operators.
            o   See https://docs.mongodb.com/manual/reference/operator/update/ for full list of operators.

        What are some update operators in MongoDb?
        ==========================================
            $currentDate - set value of field to current date
            $inc - increment (or decrement) the value of a field by a certain amount (i.e. increment the thumbs up of a youtube video).
            $min - only updates the field if the specified value is LESS than the existing field
            $max - only updates the filed is the value is MORE than the existing field
            $mul - similar to increment but multiplies the value.
            $rename - rename a field
            $set - set the value of a field.
            $unset - remove a specified field from a document.
            $setOnInsert - sets value fo a field IF update results in insert of a document.

        How do you update with "update first":
        =======================================                

                        async function updateCourse(id) {
                            const result = await Course.update({_id: id}, {              <== instead of "findById", you use "update" and in this case update "result" with a particualr id.
                                $set: {                                                  <== in this example, we use $set to set the value of a field and set to an object...
                                   author: 'Alan',                                        <== add in one or more key/value pairs.
                                   isPublished: false
                                }
                            });              
                            console.log(result);                       
                        }

                         updateCourse('5d153cee8f15e62a6cc54372');

        What if you want to get the document that was updated?
        =======================================================

                        async function updateCourse(id) {
                            const course = await Course.findByIdAndUpdate( id, {     <== use ".findByIdAndUpdate", pass "id" instead of a query object       
                                $set: {                                              <== and then pass your update object.          
                                   author: 'Bob',                                        
                                   isPublished: True
                                }
                            }, { new: true });                                                     <== but also pass a second argument, an object with the "new:" property to true. 
                            console.log(course);                       
                        }

                         updateCourse('5d153cee8f15e62a6cc54372');
*/



/* 
16. How do your remove a document from MongoDB?
//////////////////////////////////////////////
    •   To delete a document from MongoDB, you need you use:
        o   ".deleteOne()" which will delete one document 
        o   ".deleteMany()" which will delete all document specified in the query object.                


    How do you delete a single document?
    =====================================                    

                        async function removeCourse(id) {
                            const result = await Course.deleteOne({ _id: id });           <== takes a filter or a query object, can also do generic in query object  "isePublished: false"
                            console.log(result);                 
                        }

                         removeCourse('5d153cee8f15e62a6cc54372');

    How do you delete a multiple document?
    ======================================                    

                        async function removeCourse(id) {
                            const result = await Course.deleteMany({ _id: id });            <== use ".deleteMany() method"
                            console.log(result);                 
                        }

                         removeCourse('5d153cee8f15e62a6cc54372');

    How do you make sure a document was deleted?
    ============================================              

                        async function removeCourse(id) {
                            const course = Course.findByIdAndRemove(id)            <== If you try find the course again, it will return null because it was already deleted.
                            console.log(result);                 
                        }

                         removeCourse('5d153cee8f15e62a6cc54372');

*/



















/* 
https://www.freecodecamp.org/news/introduction-to-mongoose-for-mongodb-d2a7aa593c57/
https://stackoverflow.com/questions/50448272/avoid-current-url-string-parser-is-deprecated-warning-by-setting-usenewurlpars -- workaround for mongodb connection
https://docs.mongodb.com/manual/core/databases-and-collections/  -- database and collections
https://intellipaat.com/blog/what-is-mongodb/  -- mongodb overview
https://www.freecodecamp.org/news/introduction-to-mongoose-for-mongodb-d2a7aa593c57/ -- mongoose
https://medium.com/chingu/an-overview-of-mongodb-mongoose-b980858a8994  --- mongo and mongoose
https://blog.cloudboost.io/everything-you-need-to-know-about-mongoose-63fcf8564d52  --- mongoose
*/