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
6. Unit Testing using NUnit and FluentAssertions
7. Unit Testing using NSubstitute

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

### Section Three

You will need to:

* Demonstrate the use of NUnit to unit test your code.
* Explain and demonstrate the use of FluentAssertions in your tests.
* Use at least one substitute to test your code.
* Demonstrate an understanding of why the middleware libraries made your code easier to test.