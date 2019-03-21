# useLayout

Fetches the layout from a model, and updates the layout on model changes.
Calls either the QIX API method [getAppLayout](https://core.qlik.com/services/qix-engine/apis/qix/doc/#getapplayout) or [GetLayout](https://core.qlik.com/services/qix-engine/apis/qix/genericobject/#getlayout).

## Usage

```jsx
import useLayout from 'hamus.js';

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
where `model` is an [enigma.js](https://github.com/qlik-oss/enigma.js) version of either a QIX API [Doc](https://core.qlik.com/services/qix-engine/apis/qix/doc/) or a [GenericObject](https://core.qlik.com/services/qix-engine/apis/qix/genericobject/). The model can be fetched with the `useModel()` hook.

Returns a layout object which is either an [AppLayout](https://core.qlik.com/services/qix-engine/apis/qix/definitions/#nxapplayout)
or a [GenericObjectLayout](https://core.qlik.com/services/qix-engine/apis/qix/definitions/#genericobjectlayout).

