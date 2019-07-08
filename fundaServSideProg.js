"use strict";
// TOPIC /////////////////////////////////////////////////////////////////////////////////////////////////////
//     Fundamentals of Server Side Programming
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//      1. What is server-side programming?            
//      2. What is a web server?
//      3. What is the server-side and what is it's purpose?
//      4. What is the client-side and what is its purpose?
//      5. What is client-side vs. server-side scripting?
//      6. What is a client application and what are some key parts?
//      7. What kind of assets (i.e. resources) can server-side apps serve (i.e. expose)? 
//         + What is a dynamic asset?
//         + What is a static asset?
//      8. Why is it important to route requests to the right request handlers?
//      9. How is data persistence important to server-side programming?
//     10. What is buisness logic in the context of server-side programming?
//     11. What is software testing and what is the importance of software testing in server-side programming?
//     12. How does the HTTP Protocol request-response cycle work?
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
    •   "Server-side programming" is about writing programs that create dynamic pages.
    •   Server-side programming is generally about:

==ABSTRACT EXAMPLE==
    •   For example, Amazon will use server-side programming to construct search results for products
        based on the users buying habits, preferences, etc.
         
==EXTENDED ANSWERS==
    •   Server-side programming allows us to efficiently deliver information tailored for individual users.  
        o   Note that JavaScript (where the programs run in the web browser) is called "client-side" programming.
*/



/* 
2. What is a web server?
////////////////////////
==SHORT ANSWER==
    •   A WEB SERVER is a system (device and/or program) that stores and delivers content to a users browser over the internet.   

==ABSTRACT EXAMPLE==
    •   For example, when a user uses a client-side browser to request information (i.e. www.amazon.com) from a website, 
        the physical server (a physical server like AWS) which also houses a server program (a back-end language like node.js),
        sends a request to the internet for viweing the corresponding page for that address.

==EXTENDED ANSWER==  
   •	The job of a WEB SERVER is simple: find the file and send it out. 
   •    A "Web Server" can refer either to the hardware that stores software and components(i.e.html, css, etc.) AND/OR 
        the HTTP server which understands URL (web addresses) and HTTP (protocol the browser uses to view web pages) 
        which then accesses the domain name (www.google.com) where the website is stored and delivers the content back 
        to the client(you).	 
    •   A WEB SERVER commicates with a web browser using HTTP.  
    •   The content of most web pages is encoded in HTML.
    •   Content can be static (text or images) or dynamic (items user selects for purchase),
    •   To deliver dynamic content, web servers use server-side scripting languages to encode business logic.
    •   A web server runs a website by returning HTML files over an HTTP connection.    
*/




/* 
3. What is the server-side and what is it's purpose?
////////////////////////////////////////////////////
==SHORT ANSWER==
    •  "Server-side" refers to anything that happens on the server (back-end) instead of the client (front-end).    
        The purpose of a server-side program is to EXPOSE RESOURCES to other applications.

==EXAMPLE==
    •   For example, when you type in a URL to go to a website, you send a request a SERVER (which is both a
        device and computer program) that accepts and responds to requests made by your browser.
*/



/*
4. What is the client-side and what is its purpose?
//////////////////////////////////////////////////
==SHORT ANSWER==
    •   The client-side (Front-end) is everything in a web application that is displayed or takes place on the 
        client device (e.g. phone, pc, etc.).   

==ABSTRACT EXAMPLE==
    •   For example, When you use a web browser, you are using a server-side client and when you visit a site like Netflix,
         it has html, css, and javascript that dictate how the site appears to the user when it is interpreted in the client-side browser.    

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
5. What is client-side vs. server-side scripting?
/////////////////////////////////////////////////
==SHORT ANSWER==
    •   Client-side scripting refers to running scripts within the front-end browser like JavaScript while 
        server-side scripting refers to running scripts within the back-end like node.js.

==EXTENDED ANSWER==
    •   Client-side scripting means running scripts on the front-end within the browser such as JavaScript.
    •   Client-side scripting has faster response times, more interactive applications, and less overhead on the web server.
    •   Client-side code is embedded on the clients web page and processed in the clients browser.
    •   Client-side scripts are written in scripting language (i.e. JavaScript) and interact with the page's HTML elements.

    •   Server-side scripting means running scripts on the back-end on the server in order to deliver dynamic content
        to webpages in response to user actions.
    •   Server-side processing is used to interact with permenant storage like databases or files.
    •   Server-side processing occurs when a page is first requested and when pages are posted back to the server.
    •   Examples of server-side processing are: user validation, saving and retrieving data, and navigating pages.
*/



/* 
6. What is a client application and what are some key parts?
////////////////////////////////////////////////////////////
==SHORT ANSWER==
    •	A client application has a UI, runs on the users machine in a web browser, and requests resources from a server. 
    •   A client application consists of a few key parts:
            o   A way to listen for HTTP requests over a port.
            o   A way to inspect and interact with HTTP request and response objects.
            o   A way to route HTTP requests from clients to the right request handlers.
            o   A way to serve static assets to clients to client browsers.
            o   A way to serve data to clients

==EXAMPLE==
    •   The user utlizes a browser (client) to request resources (index.html, index.css, etc.) from a server.	
    •   For example, suppose you have an application that searches wikipedia via an API.  
        o   The CLIENT APPLICATION requests data from a server (i.e. the API).                          [CliApp]=========>  [Server]
        o   The SERVER responds with the requested data.                                                [CliApp]  <=========[Server]
        o   Client applications can also SEND data to a server so it can be stored or processed.        [CliApp]==(Data)==> [Server]
*/



/* 
7. What kind of assets (i.e. resources) can server-side apps serve (i.e. expose)?
/////////////////////////////////////////////////////////////////////////////////
==SHORT ANSWER==
    •	Server-side apps can serve two types of assets: 
        o   Dynamic
        o   Static


    What is a dynamic asset?
    =========================
    •   A DYNAMIC asset is created when it is requested.
        o   For example, suppose you were on a shopping website and your browser might request account data from an endpoint
            at shopping.com/api/account/12345
        o   The server would look for the account with the id 12345 and if the account can be located, it will send
            back a json obejct representing the state of the account at the time of the request.


    What is a static asset?
    =======================
    •   A STATIC asset is a file that does NOT change between requests (unless a new version is uploaded).
        o   For example, if you visit a shopping site shopping.com/my-account in the web browser, the server would send back
            an HTML file, which could link to stylesheets or client-side JavaScript files located on the same server.
        o   HTML, CSS, and JavaScript files would all be considered static assets.


    OPTIONAL: How do you serve static assets?
    ==========================================
    •   To serve a static asset, see express.js outline, "how do you use built-in middleware?" under the sub-question 
        "What is the "static" method and what does it do?"  

*/




/* 
8. Why is it important to route requests to the right request handlers?
////////////////////////////////////////////////////////////////////////
==SHORT ANSWER==
    •   Web servers need to have a way of ensuring that when a client requests a resource through a URL, 
        that request gets routed to the right code that knows how to handle it.
*/



/* 
9. How is data persistence important to server-side programming?
//////////////////////////////////////////////////////////////////
    •   Web servers store the common set of data that all client applications can access.
*/



/* 
10. What is buisness logic in the context of server-side programming?
///////////////////////////////////////////////////////////////////// 
    •   Across the layers of a server-side web application, the overriding purpose is to implement one or
        more pieces of business logic.
*/



/* 
11. What is software testing and what is the importance of software testing in server-side programming?
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
12. How does the HTTP Protocol request-response cycle work?
///////////////////////////////////////////////////////////
==SHORT ANSWER==
    •   Web servers and clients speak http to each other   
            1.   The client makes a REQUEST to an HTTP server by opening a connection to the server and sending a request message.
            2.   Then, the server sends a RESPONSE to the request in the form of an HTML file with headers and a body.

==EXTENDED ANSWERS==
    •   Servers and clients communicate via HTTP Protocol.
            o   Resources like HTML which are sent from the server to your browser are generated when you request it.
    •   The client sends a REQUEST to the HTTP server.
            o	The program on the web server looks at this request and creates an HTML page specifically for that request.
    •   The server RESPONDS to the request with an HTML file with headers and a body.           
            o   The pages that come from that request are in .html files that are either static (unaltered from the server) 
                or dynamic (created as they are requested).
 

    Example of an HTTP Protocol request-reponse cycle 
    ==================================================

        1. When you enter a URL in the address box of the browser, the browser will translate that into a request message.

                • http://www.myWebsite.com/index.html
                

        2. First, in order to load the page the client sends a request to the HTTP server to open a connection to the server for an HTML file
           in the "public" folder where all our static assets live.

                        
                GET /public/index.html HTTP/1.1                       // Request method using GET (retrieve data) at this endpoint (in a public folder).
                HOST: www.myWebsite.com                               // The domain name of the server.
                Accept: image/gif, image/jpeg, •/•                    // Advertises which content types the client is able to understand.
                Accept-Language: en-us                                // Advertises which language the client is able to understand.
                Accept-Encoding: gzip, deflate                        // The encoding to be used when the resource is sent back.
                User-Agent: Mozilla/4.0                               // Allows network protocol peers to identify the application type, OS, etc.


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
Additional resources
/////////////////////
https://mdn.mozillademos.org/files/13839/Web%20Application%20with%20HTML%20and%20Steps.png  --  infromative diagram for server cycle.
https://www.cloudflare.com/learning/serverless/glossary/client-side-vs-server-side/  --  client vs server side article
https://www.nginx.com/resources/glossary/web-server/ -- about web servers.
https://www.ntu.edu.sg/home/ehchua/programming/webprogramming/HTTP_Basics.html -- request/response example
https://expressjs.com/en/advanced/best-practice-security.html -- disable x-powered-by note
https://www.seguetech.com/client-server-side-code/ -- client vs server side scripting, good AJAX and jQuery summary
https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Introduction -- interesting MDN intor to server side programming


*/