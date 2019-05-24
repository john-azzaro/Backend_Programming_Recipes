"use strict";
// TOPIC /////////////////////////////////////////////////////////////////////////////////////////////////////
//     Fundamentals of Server Side Programming
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     1. What is a server-side web app?
//     2. What is a client application?
//     3. What are resources?
//     4. What kind of resources can server-side apps expose?
// 
// NOTES ////////////////////////////////////////////////////////////////////////////////////////////////////
//     1. Useful overview of information on Server side programming (in JavaScript) from study, research, tutorials, 
//        mentor meetings, peer discussions, and good ole' fashioned curiosity.  I've put the document in Question
//        and Answer format for improved readability.
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* 
•	Int
    o	int

1. What is a server-side web app?
//////////////////////////////////
•	A server-side web app is a program whose purpose is to EXPOSE RESOURCES to other applications.

    What can a server-side web app do?
    ==================================
    •	A single web server can support many CLIENTS.
    •	Clients on a web server can be: WEB BROWSERS, MOBILE APPS, OTHER SERVERS, etc.	
*/


/* 
2. What is a client application?
/////////////////////////////////
•	A client application REQUESTS RESOURCES from a server.

    EXAMPLE: WikiPedia API
    =======================
    o	For example, if you build an application that searches Wikipedia via an API, the application you
        have built is a client application.
        o   The CLIENT APPLICATION requests data from a server (i.e. the API).                          [CA]===> [Server]
        o   The SERVER responds with the requested data.                                                [CA] <===[Server]
        o   Client applications can also SEND data to a server so it can be stored or processed.        [CS]==(Data)=> [Server]
*/

/*
3. What are resources?
//////////////////////
•   Resources are things such as:
    o   index.html page
    o   data represesnting customers
    o   main.css page
*/

/* 
4. What kind of resources can server-side apps expose?
///////////////////////////////////////////////////////
    1. Files
        o   Files include: HTML, CSS, JavaScript, JPEG's, MP3's, etc.
    2. Paramaterized data through an API layer
        o   For example, a web page for a shoe store might request data from an endpoint (i.e. URL) for shoes 
            that are for sale THEN a seperate request to a different endpoint would retrieve data about the
            customers shoe size or color preference.
*/
