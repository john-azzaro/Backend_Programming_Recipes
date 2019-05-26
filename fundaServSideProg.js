"use strict";
// TOPIC /////////////////////////////////////////////////////////////////////////////////////////////////////
//     Fundamentals of Server Side Programming
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//      1. What is server-side programming?      
//      2. What are important factors in server-side programming?
//      3. What is a web server?
//      4. What is the server-side and what is it's purpose?
//      5. What is the client-side and what is its purpose?
//      6. What is client-side vs. server-side scripting?
//      7. What is a client application?
//      8. What kind of resources can server-side apps expose?
//      9. What happens when you request resources from a server-side app? 
//      10. How does the HTTP Protocol request-response cycle work?
//      11. Why is it important to route requests to the right request handlers?
//      12. How is data persistence important to server-side programming?
//      13. What is buisness logic in the context of server-side programming?
//      14. What is software testing and what is the importance of software testing in server-side programming?
//
// NOTES ////////////////////////////////////////////////////////////////////////////////////////////////////
//     1. Useful overview of information on Server side programming (in JavaScript) from study, research, tutorials, 
//        mentor meetings, peer discussions, and good ole' fashioned curiosity.  I've put the document in Question
//        and Answer format for improved readability.
// 
//////////////////////////////////////////////////////////////////////////////////////////////////////////////


/* 
1. What is server-side programming?
///////////////////////////////////
==SHORT ANSWER==
    •   Server-side programming is writing programs that create dynamic pages.

==EXAMPLE==
    •   For example, Amazon will use server-side programming to construct search results for products
        based on the users buying habits, preferences, etc.
         
==EXTENDED ANSWERS==
    •   Server-side programming allows us to efficiently deliver information tailored for individual users.  
        o   JavaScript, where the programs run in the web browser, is called "client-side" programming.
*/


/*
2. What are important factors in server-side programming?
//////////////////////////////////////////////////////////
==EXTENDED ANSWER==        
    o   Web applications exposing resources
    o   Web servers and clients speaking http to each other
    o   Web servers route requests to the right request handlers
    o   Server-side programming is about data persistence
    o   Server-side programming is about business logic
    o   Server-side programming is software testing
    o   Server-side programming is about devops.
*/


/* 
3. What is a web server?
/////////////////////////
==SHORT ANSWER==
    •   A WEB SERVER stores and delivers content to a website.   

==EXAMPLE==
    •   For example, when a user uses a client-side browser to request information (i.e. www.amazon.com) from a website, 
        the physical server (a physical server like AWS) which also houses a server program (a back-end language like node.js),
        sends a request to the internet for viweing the corresponding page for that address.

==EXTENDED ANSWER==  
   •	The job of a WEB SERVER is simple: find the file and send it out. A "Web Server" can refer either to the hardware 
        that stores software and components(i.e.html, css, etc.) AND/OR the HTTP server which understands URL (web addresses) 
        and HTTP (protocol the browser uses to view web pages) which then accesses the domain name (www.google.com) where 
        the website is stored and delivers the content back to the client(you).	 
    •   A WEB SERVER commicates with a web browser using HTTP.  
    •   The content of most web pages is encoded in HTML.
    •   Content can be static (text or images) or dynamic (items user selects for purchase),
    •   To deliver dynamic content, web servers use server-side scripting languages to encode business logic.
    
*/


/* 
4. What is the server-side and what is it's purpose?
////////////////////////////////////////////////////
==SHORT ANSWER==
    •  "Server-side" refers to anything that happens on the server (back-end) instead of the client (front-end) and     
        the purpose of the serv-side program is to EXPOSE RESOURCES to other applications.
*/


/*
5. What is the client-side and what is its purpose?
//////////////////////////////////////////////////
==SHORT ANSWER==
    •   The client-side (aka Front-end) is everything in a web application that is displayed or takes place on the client
        device (e.g. phone, pc, etc.).
        o   For example, Netflix has html, css, and javascript that dictate how the site appears to the user when it is 
            interpreted in the client-side browser.

==EXAMPLE==
    •   When you use a web browser, you are using a server-side client.    

==ENTENDED ANSWERS==
    •   The client-side (i.e. user side) handles the STRUCTURE and PRESENTATION of the data the user gets.
    •   End user devices such as laptops, smartphones, and desktop computers are considered "clients" of a server.
    •   These devices send requests to servers for web pages or applications and the server typically serve up reponses.
    •   Client-side code handles the STRUCTURE and PRESENTATION of the data the user gets.  
    •   A server=side client is a: Web Browser, Mobile App,
    •   A single web server can support many CLIENTS such as WEB BROWSERS, MOBILE APPS, OTHER SERVERS, etc.	
    •   
*/


/* 
6. What is client-side vs. server-side scripting?
/////////////////////////////////////////////////
    •   Client-side scripting means running scripts on the front-end within the browser such as JavaScript.
    •   Server-side scripting means running scripts on the back-end on the server in order to deliver dynamic content
        to webpages in response to user actions.
*/


/* 
7. What is a client application?
/////////////////////////////////
==SHORT ANSWER==
    •	A client application REQUESTS RESOURCES from a SERVER. 

==EXAMPLE==
    •   The user utlizes a browser (client) to request resources (index.html, index.css, etc.) from a server.	

==EXTENDED ANSWERS==
    How would a basic client application work?
    ==========================================
    o	For example, if you build an application that searches Wikipedia via an API, the application you
        have built is a client application.
        o   The CLIENT APPLICATION requests data from a server (i.e. the API).                          [CliApp]=========>  [Server]
        o   The SERVER responds with the requested data.                                                [CliApp]  <=========[Server]
        o   Client applications can also SEND data to a server so it can be stored or processed.        [CliApp]==(Data)==> [Server]
*/



/* 
8. What kind of resources can server-side apps expose?
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
9. What happens when you request resources from a server-side app?
//////////////////////////////////////////////////////////////////
        o	Resources like HTML which are sent from the server to your browser are generated when you request it.
        o	The program on the web server looks at this request and creates an HTML page specifically for that request.
        o   The pages that come from that request are in .html files that are either static (unaltered from the server) 
            or dynamic (created as they are requested).
*/


/* 
10. How does the HTTP Protocol request-response cycle work?
///////////////////////////////////////////////////////////
==SHORT ANSWER==
    1.   The client makes a REQUEST to an HTTP server by opening a connection to the server and sending a request message.
    2.   Then, the server sends a RESPONSE to the request in the form of an HTML file with headers and a body.

==EXTENDED ANSWERS==
    •   Servers and clients communicate via HTTP Protocol.
    •   The client sends a REQUEST to the HTTP server.
    •   The server RESPONDS to the request with an HTML file with headers and a body.
 
What does the HTTP Protocol request-reponse cycle look like
===========================================================

    1. When you enter a URL in the address box of the browser, the browser will translate that into a request message.

            • http://www.myWebsite.com/index.html
        

    2. First, the client sends a request to the HTTP server to open a connection to the server.

            GET /docs/index.html HTTP/1.1                         // Request method using GET (retrieve data) at this endpoint
            HOST: www.myWebsite.com                               // The domain name of the server.
            Accept: image/gif, image/jpeg, •/•                    // Advertises which content types the client is able to understand.
            Accept-Language: en-us                                // Advertises which language the client is able to understand.
            Accept-Encoding: gzip, deflate                        // The encoding to be used when the resource is sent back.
            User-Agent: Mozilla/4.0                               // Allows network protocol peers to identify the application type, OS, etc.
            (blank line)                                          // 


    3. Second, the server will send a response to the request consisting of headers and a body

            HTTP/1.1 200 OK
            X-Powered-By: Express                                                  // note: should be disabled for security reason.
            Content-length: 47                                                     // size of the entity-body in bytes
            Connection: keep-alive                                                 // determines if the connection keeps open after transaction
            Last-Modified: Mon. 06 May 2019 00:00:01 GMT                           // last modification date of the resource
            Content-Type: text/html: charset=UTF-8                                 // media type of resource

            <html><body><header><h1>Hello world!</h1></header></body></html>
*/


/* 
11. Why is it important to route requests to the right request handlers?
////////////////////////////////////////////////////////////////////////
==SHORT ANSWER==
    •   Web servers need to have a way of ensuring that when a client requests a resource through a URL, 
        that request gets routed to the right code that knows how to handle it.
*/

/* 
12. How is data persistence important to server-side programming?
//////////////////////////////////////////////////////////////////
    •   Web servers store the common set of data that all client applications can access.
*/

/* 
13. What is buisness logic in the context of server-side programming?
///////////////////////////////////////////////////////////////////// 
    •   Across the layers of a server-side web application, the overriding purpose is to implement one or
        more pieces of business logic.
*/

/* 
14. What is software testing and what is the importance of software testing in server-side programming?
////////////////////////////////////////////////////////////////////////////////////////////////////////
    •   A software test is a peice of codesthat checks whether or not another peice of code bahves as it should.
        o   As code is written and refactored, suites of software tests can be run to let us know if any changes we
            made have broken any of our existing functionality.
        o   If the test fails, we know that the changes have broken some part of our web application and we can fix
            the broken code before it enters production.

    •   Web servers support user accounts and as soon as you start storing user information like email 
        addresses security becomes an important concern, especially with access control which is how
        a system ensures that its resources are accessible only to the right users.
*/




































/* 

https://mdn.mozillademos.org/files/13839/Web%20Application%20with%20HTML%20and%20Steps.png
https://www.cloudflare.com/learning/serverless/glossary/client-side-vs-server-side/
https://www.nginx.com/resources/glossary/web-server/
https://www.ntu.edu.sg/home/ehchua/programming/webprogramming/HTTP_Basics.html -- request/response example
https://expressjs.com/en/advanced/best-practice-security.html -- disable x-powered-by note

*/