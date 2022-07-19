# App Configuration
app configuration is used when we want to configure our app for different environments. For example, we might want to configure our app for development, but not for production. We can do this by creating a file called `appsettings.json` in the `App Configuration` folder. This file will contain the configuration for our app.

We will also create a file called `appsettings.Development.json` in the `App Configuration` folder. This file will contain the configuration for our app in the development environment.

We can then use the `dotnet` command to run our app, and pass in the `--environment` flag to tell it which environment we want to run it in.

Take a look at the differences between the `appsettings.json` and `appsettings.Development.json` files in the example project.

## Accessing Configuration

```c#
services.AddHttpClient(Configuration["RedditClientName"], configureClienclient =>
{
    client.BaseAddress = new Uri(Configuration["RedditAddress"]);
});
```

The above code is how we access the configuration for a specific key.

## Summary

We learned about how to set up app configuration. We also learned how to access the configuration for a specific key. The [next module](https://github.com/NZMSA/2022-Phase-2/tree/main/2.%20Backend/Unit%20Testing/Readme.md) is on using 