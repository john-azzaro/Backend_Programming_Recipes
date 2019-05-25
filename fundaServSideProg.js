"use strict";
// TOPIC /////////////////////////////////////////////////////////////////////////////////////////////////////
//     Fundamentals of Server Side Programming
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     1. What is server-side programming?
//     2. What is a web server?
//     3. What is a server-side web app?
//     4. What is a server-side client?
//     5. What is a client application?
//     6. What are server-side resources?
//     7. What kind of resources can server-side apps expose?
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
==EXAMPLE==
    •	
*/

/* 
1. What is server-side programming?
///////////////////////////////////
    •   Server-side programming is writing programs that create dynamic pages.
        o   JavaScript, where the programs run in the web browser, is called "client-side" programming.  

    •   Server-side programming allows us to efficiently deliver information tailored for individual users.
        o   For example, Amazon will use server-side programming to construct search results for products
            based on the users buying habits, preferences, etc.

    What is server-side programming is about?
    =========================================
        o   Web applications exposing resources
        o   Web servers and clients speaking http to each other
        o   Web servers route requests to the right request handlers
        o   Server-side programming is about data persistence
        o   Server-side programming is about business logic
        o   Server-side programming is software testing
        o   Server-side programming is about devops.
*/


/* 
2. What is a web server?
/////////////////////////
==SHORT ANSWER==
    •   A web server holds the server-side code (e.g. node.js) and controls what information is sent to the user.
        o   Conversely, "client-side" code handles the structure and presentation of the data the user gets.

    •	A WEB SERVER refers to either the hardware, software, or both working together.
    •   The job of a WEB SERVER is simple: find the file and send it out.		

==EXTENDED ANSWER==
    •	A "Web Server" can refer either to the hardware that stores software and components(i.e.html, css, etc.) AND 
        the HTTP server which understands URL (web addresses) and HTTP (protocol the browser uses to view web pages) 
        which then accesses the domain name (www.google.com) where the website is stored and delivers the content back 
        to the client(you).	
*/


/* 
3. What is the server-side?
///////////////////////////
==SHORT ANSWER==
    •	The server-side is a PROGRAM whose PRUPOSE is to EXPOSE RESOURCES to other applications.

•   
•
•
•

    What happens when you request resources from a server-side app?
    ===============================================================
        o	Resources like HTML which are sent from the server to your browser are generated when you request it.
        o	The program on the web server looks at this request and creates an HTML page specifically for that request.
        o   The pages that come from that request are in .html files are either static (unaltered from the server) or
            dynamic (created as they are requested).
*/


/*
4. What is the client-side?
///////////////////////////
==SHORT ANSWER==
    •   Client-side code handles the STRUCTURE and PRESENTATION of the data the user gets    
    •   A server=side client is a: Web Browser, Mobile App,
    •   A single web server can support many CLIENTS such as WEB BROWSERS, MOBILE APPS, OTHER SERVERS, etc.	
    •   
*/


/* 
5. What is a client application?
/////////////////////////////////
==SHORT ANSWER==
    •	A client application REQUESTS RESOURCES from a SERVER. 

==EXAMPLE==
    •   The user uses a browser (client) to request resources (index.html, index.css, etc.) from a server.	

    How would a basic client application work?
    ==========================================
    o	For example, if you build an application that searches Wikipedia via an API, the application you
        have built is a client application.
        o   The CLIENT APPLICATION requests data from a server (i.e. the API).                          [CliApp]===> [Server]
        o   The SERVER responds with the requested data.                                                [CliApp] <===[Server]
        o   Client applications can also SEND data to a server so it can be stored or processed.        [CliApp]==(Data)=> [Server]
*/


/*
6. What are server-side resources?
//////////////////////////////////
==SHORT ANSWER==
    •	Resources are either STATIC (stylesheets or javascript files that do not change) or DYNAMIC(e.g. logging into a bank account).
    •	Resources should be reliable 
*/


/* 
7. What kind of resources can server-side apps expose?
///////////////////////////////////////////////////////
==SHORT ANSWER==
    •	Server-side apps can expose two types of resources: FILES and PARAMETERIZED DATA.

==EXTENDED ANSWER==    
    1. Files
        o   Files include: HTML, CSS, JavaScript, JPEG's, MP3's, etc.

    2. Paramaterized data through an API layer
        o   For example, a web page for a shoe store might request data from an endpoint (i.e. URL) for shoes 
            that are for sale THEN a seperate request to a different endpoint would retrieve data about the
            customers shoe size or color preference.
*/


/* 
8.
*/

