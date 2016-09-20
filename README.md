# REST API Server

API for shop website based on Node.js and KOA.js

## Getting Started

### Requirements

[Node.js](https://nodejs.org/en/) v.4.5.0 or higher

### Installing

Just clone the repo and install the necessary node modules:

```shell
$ git clone https://github.com/ZakharDolozhevskiy/sun_gate.git
$ git checkout -b shop-backend-koa origin/shop-backend-koa
$ npm install # Install Node modules listed in ./package.json (may take a while the first time)
```

To start server application use the next commads

```
npm run dev
npm run dev:watch
```

For uses on window machines

```
npm run dev:window
npm run dev:window:watch
```

## Running the tests

```
npm run test-mocha
npm run test-mocha-watch
```

NOTE: If you run tests on window os you have to set NODE_ENV=testing manually 

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
