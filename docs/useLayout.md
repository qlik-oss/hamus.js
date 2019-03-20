# useLayout

Fetches the layout from a model, and updates the layout on model changes.
Calls either the QIX API method [getAppLayout](https://core.qlik.com/services/qix-engine/apis/qix/doc/#getapplayout) or [GetLayout](https://core.qlik.com/services/qix-engine/apis/qix/genericobject/#getlayout).

In addition to React 16.8.1 or later, [react-use-promise](https://www.npmjs.com/package/react-use-promise) must be installed to use this hook.

## Usage

```jsx
import { useLayout } from 'hamus.js';

const Demo = (model) => {

  const [layout, layoutError] = useLayout(model);
  
  let content = '';
  if (layoutError) {
    content = 'oops an error occurred';
  } else if (!layout) {
    content = 'Fetching layout...';
  } else {
    content = JSON.stringify(layout);
  }
  return (
    <div>
      {content}
    </div>
  );
};
```

# Reference

```jsx
const [layout, layoutError] = useLayout(model);
```
where `model` is either a QIX API [Doc](https://core.qlik.com/services/qix-engine/apis/qix/doc/) or a [GenericObject](https://core.qlik.com/services/qix-engine/apis/qix/genericobject/).

Returns a layout object which is either an [AppLayout](https://core.qlik.com/services/qix-engine/apis/qix/definitions/#nxapplayout)
or a [GenericObjectLayout](https://core.qlik.com/services/qix-engine/apis/qix/definitions/#genericobjectlayout).

