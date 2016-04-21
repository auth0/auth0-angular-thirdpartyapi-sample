# Auth0 + AngularJS + Third Party API Seed

This is the seed project you need to use if you're going to create an AngularJS app that will use Auth0 and a Third party API like Firebase or Amazon.

To see the example working, just go to http://auth0.github.io/auth0-angular-thirdpartyapi-sample/compile/

If you want to connect to an API that you're going to develop in any language, please [this other seed](https://github.com/auth0/auth0-angular-api-sample).

## Running the example

In order to run the example you need to have `npm`, `bower` and `grunt` installed.

If you don't have `bower` or `grunt` installed please run:

````js
npm install -g bower
npm install -g grunt-cli
````

Then, in the project main folder run the following commands:

````js
npm install
bower install
grunt watch
````

Go to `http://localhost:3000` and you'll see the app running :).

## What is Auth0?

Auth0 helps you to:

* Add authentication with [multiple authentication sources](https://docs.auth0.com/identityproviders), either social like **Google, Facebook, Microsoft Account, LinkedIn, GitHub, Twitter, Box, Salesforce, amont others**, or enterprise identity systems like **Windows Azure AD, Google Apps, Active Directory, ADFS or any SAML Identity Provider**.
* Add authentication through more traditional **[username/password databases](https://docs.auth0.com/mysql-connection-tutorial)**.
* Add support for **[linking different user accounts](https://docs.auth0.com/link-accounts)** with the same user.
* Support for generating signed [Json Web Tokens](https://docs.auth0.com/jwt) to call your APIs and **flow the user identity** securely.
* Analytics of how, when and where users are logging in.
* Pull data from other sources and add it to the user profile, through [JavaScript rules](https://docs.auth0.com/rules).

## Create a free account in Auth0

1. Go to [Auth0](https://auth0.com) and click Sign Up.
2. Use Google, GitHub or Microsoft Account to login.

## Issue Reporting

If you have found a bug or if you have a feature request, please report them at this repository issues section. Please do not report security vulnerabilities on the public GitHub issue tracker. The [Responsible Disclosure Program](https://auth0.com/whitehat) details the procedure for disclosing security issues.

## Author

[Auth0](auth0.com)

## License

This project is licensed under the MIT license. See the [LICENSE](LICENSE) file for more info.
