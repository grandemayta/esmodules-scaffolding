# my-component 
[![NPM version](https://d25lcipzij17d.cloudfront.net/badge.svg?id=gh&type=6&v=1.0.0)](http://badge.fury.io/js/badge-list)
[![made-with-javascript-doc](https://img.shields.io/badge/Made%20with-Javascript-1f425f.svg)](https://www.sphinx-doc.org/)

## Summary
- [Requirements](#requirements)
- [Getting Started](#getting-started)
- [Commands Available](#commands-available)
- [Component Structure](#component-structure)
- [Enviroments Constants](#enviroments-constants)
- [Unit Testing](#unit-testing)
- [E2E Testing](#e2e-testing)
- [Development](#development)
- [Production](#production)
- [Integration](#integration)
- [Javascript Guidelines](#javascript-guidelines)
- [Documentation](#documentation)
- [Polyfills](#polyfills)
- [Browsers Support](#browsers-support)
- [Docs](#docs)

## Requirements
To launch the application you need to install the followings applications:

- [NodeJS LTS version](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/lang/en/)

```sh
$ npm install -g yarn
```

:warning: **NB: After installed yarn you mustn't use npm to install dependencies or launch automated tasks.** :warning:

## Getting Started
Launch the following command to start the application:

```sh
$ yarn start
```

## Commands Available:

| Command | Description |
| ------ | ------ |
| yarn start | Lift the application in local mode |
| yarn dev | Generate a build in dev mode |
| yarn prod | Generate a build in prod mode |
| yarn analyse | Launch a dashboard with the situation of the application in prod mode |
| yarn test | Launch unit testing |
| yarn test:coverage | Generate a code coverage report in coverage directory |
| yarn e2e | Enable End to End testing |
| yarn docs | Add documentation in the readme file |
| yarn pretest | Fix eslint errors |

## Component Structure

    .
    ├── config                      # Define constants to use across the application
        ├── config.dev.js
        ├── config.jest.js
        ├── config.local.js
        ├── config.prod.js
    ├── fixtures                    # Main template
        ├── data
            ├── example.json
        ├── index.pug
    ├── scripts                     # Webpack setup for differents enviroments
        ├── webpack.analyse.js
        ├── webpack.common.js
        ├── webpack.dev.js
        ├── webpack.local.js
        ├── webpack.prod.js
    ├── src
        ├── assets                  # Images, fonts and others media
        ├── component.js            # Component code
        ├── component.spec          # Component unit testing
        ├── component.e2e           # Component end to end testing
        ├── component.scss          # Component styles
        ├── component.pug           # Component template
        ├── index.js                # Bootstrap of the applicaton
        ├── routes.js               # Routes configuration
        ├── polyfills.js            # Polyfills configuration
    ├── babel.config.js             # Babel setup
    ├── .eslintignore               # Specifies files to ignore for Eslint
    ├── .eslintrc                   # Eslint setup
    ├── .gitignore                  # Specifies files to ignore for Git
    ├── cypress.json                # Cypress setup
    ├── package.json
    ├── README.md

## Enviroments Constants
You can set up constants to use in base the enviroment. There is a directory called **config** where you can find 4 files one for every enviroment available. Below you can see an example:

```sh
$ File: config/config.local.js
$
$ module.exports = {
$  build: {
$    entryPublicPath: ''
$  },
$  message: 'This message arrive from config/local.config.js'
$ };
$
$ File: src/component.js
$
$ import config from 'config';
$
$ export default class Component {
$  constructor(selector) {
$    this.myEl = document.querySelector(selector);
$    this.message = config.message;
$
```

## Unit Testing
For Unit Testing we use [Jest](https://facebook.github.io/jest/) because is easy to integrate and you have many features out the box like (assertions, async functions, ecc).

Launch unit testing
```sh
$ yarn test
```

Launch Code Coverage Test
```sh
$ yarn test:coverage
```

## E2E Testing
For E2E testing we use [Cypress](https://docs.cypress.io/guides/overview/why-cypress.html#In-a-Nutshell). Enable E2E testing:

```sh
$ yarn e2e
```

## Development
In development enviroment we generate an unminified version of css and javascript.
To generate a build for develpment you have to launch the following command:

```sh
$ yarn dev
```

## Production
In production we generate a minified version of css and javascript.
To generate a build for production you have to launch the following command:

```sh
$ yarn prod
```

## Integration
Below you can find an example of a component integration.

- **Step1**: The first step is include the script generated.
```sh
$ <script src="https://my-component/v2/index.min.js"></script>
```

- **Step2**: Add the html of your component. You have to use an id or a class selector.
If you need to pass params across the component you can use data attributes.
```sh
$ <div id="my-selector" data-title="My title" data-href="https://some-link.com"><div>
```

- **Step3**: To render the component, follow this syntax:
```sh
$ var myComponent = new MyComponent("#my-selector");
$ myComponent.render();
```

## Javascript Guidelines
In this application we use [Eslint](https://eslint.org/) to have an standard when write Javascript. The only thing that you need is download [Visual Studio Code](https://code.visualstudio.com/) and then install from marketplace the plugin eslint.

You can launch the following task to fix eslint errors:
```sh
$ yarn pretest
```

:warning: **NB: It's important to fix warnings from console before commit changes** :warning:

## Documentation
Write code is amazing but write the documentation is important and useful for others developers.
For this reason we support [documentation](http://documentation.js.org/) a tool that use the [JSDoc](http://usejsdoc.org/) format. Launch the following command to generate the documentation for this application.

```sh
$ yarn docs
```

## Polyfills
ES6 is awesome because introduce useful features like includes, values, keys, but the features aren't available in all browsers. 
In this project the polyfills will be loaded at runtime. For example if you're surfing on Chrome the polyfill library isn't necessary. Below you can check the features supported:

- Generics
    - Symbol
    - fetch
    - Promise

- Arrays
    - entries
    - from
    - find
    - findIndex
    - includes
    - keys
    - values

- Objects
    - assign
    - entries
    - values

- Strings
    - endsWith
    - includes
    - startsWith

## Browsers support

:white_check_mark: Chrome
<br/>
:white_check_mark: Firefox
<br/>
:white_check_mark: Safari
<br/>
:white_check_mark: Edge
<br/>
:white_check_mark: IE11

## Docs