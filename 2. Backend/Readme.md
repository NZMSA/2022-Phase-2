# Backend

This is the backend module for phase 2 of MSA this year. This is a short project to get you started, and hopefully have you designing some great APIs for your project! We will be primarily focused on one part of the backend stack, as the backend consists of many different layers, which would be beyond the scope of phase 2.

## Introduction to Web APIs

You would have learnt about what a web API is, and played around with one during phase 1. Now, let's get started on creating our own web API. Start [here](https://github.com/NZMSA/2022-Phase-2/tree/main/2.%20Backend/Setup/Readme.md).

## Table of Contents - Modules

1. Setup
2. Swagger
3. Creating Controllers
4. Calling other APIs
5. Using Application Configuration
6. Unit Testing using NUnit

## Phase 2 Briefing

To complete Phase 2, you will need to create an API that is capable of making calls to other APIs, and do some processing on the data returned from those APIs. This could be an API that returns data from Reddit API, for example, and compiles the GIFs together into an HTML document.

This could be an API that takes your date of birth, and randomly searches PokeAPI to create your perfect pokemon team! Go wild, go crazy, but make sure that you fulfil the requirements listed down below to pass phase 2.

The modules included in this section are to help you gain a better understanding of how to fulfil the requirements for phase 2, as well as to provide you a codebase to get started on your project.

## Phase 2 Requirements - Backend

### Section One

You will need to:

* Create at least one controller that implements CRUD operations for a resource (Create, Read, Update, Delete).
* Call at least one other API.
* Create at least two configuration files, and demonstrate the differences between starting the project with one file over another.

### Section Two

You will need to:

* Demonstrate an understanding of how these middleware via DI (dependency injection) simplifies your code.
   *******************************************************************************************************************************************************
By configuring swagger it allowed me to implement the NSwag middleware that available for configuration when the application starts running. With the NSwag middleware I was able to use a third-party API that incorporates swagger to generate a client implementation without the use of an existing API. With the middleware configured, I was able to easily add in app.UseOpenApi() and app.UseSwaggerUi3() to run an OpenAPI specification generator and view from a web browser, respectively. In general, the middleware allowed me to just a few simple lines of code to get a lot of work done. 
 *********************************************************************************************************************************************************          
### Section Three

You will need to:

* Demonstrate the use of NUnit to unit test your code.
* Use at least one substitute to test your code.
* Demonstrate an understanding of why the middleware libraries made your code easier to test.

*********************************************************************************************************************************************************
From my coding experience during this week's phase 2, the middleware libraries made it easier to test because of the swaggerUI web browser. It allowed me to see if my CRUD operations worked or not by simply executing them on the browser. By doing so, I was able to get response types that I implemented and figure out what the issue was from there. 
*********************************************************************************************************************************************************
