# Create React Redux App Structure #

[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php) [![Build Status](https://travis-ci.org/shystruk/create-react-redux-app-structure.svg?branch=master)](https://travis-ci.org/shystruk/create-react-redux-app-structure)

Create React + Redux app structure with build configurations

## Prepare config.json for build configurations ##
For running builds you need to have **config.json** in app/ folder.
So you can create new one or rename **app/config.json.example**.  

Inside that file:
 - **PATHS** is used in Grunt and Gulp tasks
 - **assetHost** CDN path for each build
 - **serverHost** is used for running e2e Cypress tests

## Getting Started ##
### Installation ###
**`npm install`** or **`yarn install`**

#### Run server ####
`node index.js`


## Build scripts ##
Development - **`npm/yarn run dev`** or **`yarn run dev`**

Production - **`npm/yarn run prod`** or **`yarn run prod`**

Staging - **`npm/yarn run staging`** or **`yarn run staging`**


## Tests ##
Unit - **`npm run test`** or **`yarn run test`**

Unit with watch - **`npm run test:watch`** or **`yarn run test:watch`**

E2E - **`npm run e2e`** or **`yarn run e2e`**

Coverage is here - *app/tests/__tests__/coverage/Icon-report/index.html*


## Automation tests ##
Let's images that for automation tests we need to get access to the Redux store.
We can do that by adding to the `window` object property with reference to the store. For e.g. in `app.jsx` file.
Automation tests run only in **staging**, so for production build we remove them out by Grunt task `strip_code` 

```javascript
/* staging-code */
window.store = store;
/* end-staging-code */
```
