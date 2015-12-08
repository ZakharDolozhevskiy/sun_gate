Highcharts
=======================

Table of Contents
-----------------
1. [Requirements](#requirements)
1. [Features](#features)
1. [Getting Started](#getting-started)
1. [Usage](#usage)
1. [Structure](#structure)

Requirements
------------

Node `^4.0.0`

Features
--------
* [Express] (http://expressjs.com/) (`^4.13.3`)
* [Jade] (http://jade-lang.com/)
* [Babel] (https://github.com/babel/babel)
* [WebSocket] (https://github.com/websockets/ws)

Getting Started
---------------

Just clone the repo and install the necessary node modules:

```shell
$ git clone https://github.com/ZakharDolozhevskiy/sun_gate.git
$ git checkout origin/Highcharts
$ cd server
$ npm install                   # Install Node modules listed in ./package.json (may take a while the first time)
$ npm start                     # Compile and launch
```

Usage
-----

#### `npm run auto-start`
Runs the node server with file watcher that restart server if files changed.

Structure
---------

The folder structure provided is only meant to serve as a guide, it is by no means prescriptive. It is something that has worked very well for me and my team, but use only what makes sense to you.

```
.
└── server                   # Application server side
    ├── bin                  # Web server core
    ├── constants            # Constants
    ├── documentation        # Server side documentation
    ├── public               # The static content for client side
    ├── routes               # Server routers
    └── services             # Services
       ├── generators         # Random data generators
    ├── socket               # WebSocket implementation
    ├── view                 # Jade templates
    └── app.js               # Application main file (entry point)
```