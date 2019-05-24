"use strict";
// TOPIC /////////////////////////////////////////////////////////////////////////////////////////////////////
//     Fundamentals of Server Side Programming
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     1. What is a web server?
//     2. What is a server-side web app?
//     3. What is a server-side client?
//     4. What is a client application?
//     5. What are server-side resources?
//     6. What kind of resources can server-side apps expose?
// 
// NOTES ////////////////////////////////////////////////////////////////////////////////////////////////////
//     1. Useful overview of information on Server side programming (in JavaScript) from study, research, tutorials, 
//        mentor meetings, peer discussions, and good ole' fashioned curiosity.  I've put the document in Question
//        and Answer format for improved readability.
// 
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* 
https://mdn.mozillademos.org/files/13839/Web%20Application%20with%20HTML%20and%20Steps.png

    •	

*/



/* 
1. What is a web server?
/////////////////////////
==SHORT ANSWER==
    •	A WEB SERVER refers to either the hardware, software, or both working together.

==EXTENDED ANSWER==
    •	A "Web Server" can refer either to the hardware that stores software and components(i.e.html, css, etc.) AND 
        the HTTP server which understands URL (web addresses) and HTTP (protocol the browser uses to view web pages) 
        which then access domain names (www.google.com) where the website is stored and delivers the content back to
        the client(you).	

==EXAMPLE==

                   
                <======(HTTP request)======|
    [Web Server]                       [Browser]  
         |======(HTTP request)========>


*/


/* 
2. What is a server-side web app?
//////////////////////////////////
==SHORT ANSWER==
    •	A server-side web app is a PROGRAM whose PRUPOSE is to EXPOSE RESOURCES to other applications.
*/


/*
3. What is a server-side client?
////////////////////////////////
==SHORT ANSWER==
    •   A single web server can support many CLIENTS such as WEB BROWSERS, MOBILE APPS, OTHER SERVERS, etc.	
*/


/* 
4. What is a client application?
/////////////////////////////////
==SHORT ANSWER==
    •	A client application REQUESTS RESOURCES from a SERVER.

    How would a basic client application work?
    ==========================================
    o	For example, if you build an application that searches Wikipedia via an API, the application you
        have built is a client application.
        o   The CLIENT APPLICATION requests data from a server (i.e. the API).                          [CA]===> [Server]
        o   The SERVER responds with the requested data.                                                [CA] <===[Server]
        o   Client applications can also SEND data to a server so it can be stored or processed.        [CS]==(Data)=> [Server]
*/


/*
5. What are server-side resources?
//////////////////////////////////
==SHORT ANSWER==
    •	Resources are 

•   Resources are things such as:
    o   index.html page                  [.html]
    o   data represesnting customers     {name:"joe"}
    o   main.css page                    [.css]
*/


/* 
6. What kind of resources can server-side apps expose?
///////////////////////////////////////////////////////
    1. Files
        o   Files include: HTML, CSS, JavaScript, JPEG's, MP3's, etc.

    2. Paramaterized data through an API layer
        o   For example, a web page for a shoe store might request data from an endpoint (i.e. URL) for shoes 
            that are for sale THEN a seperate request to a different endpoint would retrieve data about the
            customers shoe size or color preference.
*/
