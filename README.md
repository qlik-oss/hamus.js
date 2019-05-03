[![CircleCI](https://circleci.com/gh/qlik-oss/hamus.js/tree/master.svg?style=svg)](https://circleci.com/gh/qlik-oss/hamus.js/tree/master)
[![Coverage Status](https://coveralls.io/repos/github/qlik-oss/hamus.js/badge.svg?branch=master)](https://coveralls.io/github/qlik-oss/hamus.js?branch=master)
# hamus.js

hamus.js is a collection of React hooks for sharing reusable functionality used when
dealing with Qlik Associative Engine projects.

- [`useModel`](./docs/useModel.md) &mdash; creates a session object from a definition.
- [`useLayout`](./docs/useLayout.md) &mdash; fetches the layout from a model, and updates the layout on model changes.
- [`usePicasso`](./docs/usePicasso.md) &mdash; renders a [picasso.js](https://github.com/qlik-oss/picasso.js) visualization to an element.

# Usage

You need to have React 16.8.1 or later installed to use the React Hooks API. Some of the hooks requires other packages as well,
see each hook individually above.

This module uses ES6 import syntax, which means that you need Babel to transpile the code.

You can import each hook individually, e.g `import useModel from 'hamus.js/src/use-model'`,

or you can use ES6 named imports, e.g. `import { useModel } from 'hamus.js'`.

When using ES6 named imports you might run into missing dependency errors from hooks that you don't actually use in your project.
To resolve these errors, you either have to install the dependencies, or you can tranform the named import statements to individual
import statements with `[babel-plugin-import](https://github.com/ant-design/babel-plugin-import)`. The `.babelrc` file will look something
like this:

```
  "plugins": [
    ["import", { "libraryName": "hamus.js", "libraryDirectory": "src"}] 
  ]
  ```

# Example

The [example app](./example/) uses the hooks to connect to a Qlik Associative Engine running on localhost:9076, loads a csv file that is mounted into the docker container running the engine, creates a session app and renders a bar chart. The example is run with:
```bash
ACCEPT_EULA=yes docker-compose up -d
npm install
npm start example
```
