# Unit Testing

What even is unit testing? Unit testing is the process of testing a single unit of code. This is done by writing a test that verifies that a single unit of code works as expected.

Let's start by setting up a simple test project to verify that our dummy controller is working as expected.

---

## Setup

Start by creating a new project in the existing solution by doing the following:

![picture 1](images/db72b61a9221d225b3237255bec025bcb9a98bcd51733b064d3bbdc89be7c4ff.png)  

Then you want to add an NUnit test project:

![picture 2](images/94d0d0f971320605843f4961be76a364b829daa1b27f21b3ecba7dd2ba3ffaf5.png)  


You should then see the following contents in the project:

![picture 3](images/fa4418d22075fd0581be925819a3dcce54f814f71c0bd6291131fdecb1fb3af5.png)  


And by clicking run tests:

![picture 4](images/261d1577b8760a3d3d405aa4d3db6ec34bd9c5405fac26eac74c01c3f672068d.png)  


Horray! The default test in the project passes. Happy testing!

## Additional Reading

If you want to learn more about how to test in depth, here are some links to some great libraries and documentation for how to unit test:

- [Nunit](https://www.nuget.org/packages/NUnit.Runners/)
- [FluentAssertions](https://fluentassertions.com/)
- [NSubstitute](https://nsubstitute.github.io/)
