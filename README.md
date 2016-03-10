# Service Status API

[![Build status](https://img.shields.io/wercker/ci/56e1de0b8b8eccd53600aa8c.svg "Build status")](https://app.wercker.com/project/bykey/a9dbc41d2e608c70fbfbd5ec57c50db0)
[![NPM downloads](https://img.shields.io/npm/dm/@starefossen/status-api.svg "NPM downloads")](https://www.npmjs.com/package/@starefossen/status-api)
[![NPM version](https://img.shields.io/npm/v/@starefossen/status-api.svg "NPM version")](https://www.npmjs.com/package/@starefossen/status-api)
[![Node version](https://img.shields.io/node/v/@starefossen/status-api.svg "Node version")](https://www.npmjs.com/package/@starefossen/status-api)
[![Dependency status](https://img.shields.io/david/Starefossen/status-api.svg "Dependency status")](https://david-dm.org/Starefossen/status-api)

Microservice for returning the status of various services monitored through
Pingdom. Using the Pingdom API under the hood.

## Requirements

* Node.JS >= v4.0.0

## Start

```
npm start
```

### Environment

* `PINGDOM_KEY` - Pingdom API app key
* `PINGDOM_USER` - Pingdom user
* `PINGDOM_PASS` - Pingdom password

## API

| Method | Path             | Desc                  |
|--------|------------------|-----------------------|
| `GET`  | `/api/v1/checks` | Get all status checks |

## [MIT Licensed](https://github.com/Starefossen/status-api/blob/master/LICENSE)
