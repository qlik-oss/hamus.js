# hamus.js

hamus.js is a collection of React hooks for sharing reusable functionality used when
dealing with Qlik Association Engine objects.

# Usage

You need to have React 16.8.1 or later installed to use React Hooks API. Some of the hooks requires other packages as well,
see each hook individually below.

You can import each hook individually, e.g `import { useModel } from 'hamus.js'`.

- [`useModel`](./docs/useModel.md) &mdash; creates a session object from a definition.
- [`useLayout`](./docs/useLayout.md) &mdash; fetches the layout from a model, and updates the layout on model changes.
- [`usePicasso`](./docs/usePicasso.md) &mdash; renders a [picasso.js](https://github.com/qlik-oss/picasso.js) visualization to an element.

# Example

The [example app](./example/) uses the hooks to connect to a Qlik Associative Engine running on localhost:9076, loads a csv file that is mounted into the docker container running the engine, creates a session app and renders a bar chart. The example is run with:
```bash
ACCEPT_EULA=yes docker-compose up -d
npm install
npm start example
```
