# useModel

Creates a session object from a definition. The created object is saved in a cache to prevent multiple calls with the same app and definition.
[CreateSessionObject](https://core.qlik.com/services/qix-engine/apis/qix/doc/#createsessionobject) is the QIX API method called.

## Usage

```jsx
import useModel from 'hamus.js';

const Demo = (app, definition) => {
  const [model, modelError] = useModel(app, definition);
  
  let content = '';
  if (modelError) {
    content = 'oops an error occurred';
  } else if (!model) {
    content = 'Creating model..';
  } else {
    content = JSON.stringify(model);
  }
  return (
    <div>
      {content}
    </div>
  );
};
```

## Reference

Input parameters are 
- [`app`](https://core.qlik.com/services/qix-engine/apis/qix/doc/), fetched using [enigma.js](https://github.com/qlik-oss/enigma.js).
- [`definition`](https://core.qlik.com/services/qix-engine/apis/qix/definitions/#genericobjectproperties). 

Returns the created [model](https://core.qlik.com/services/qix-engine/apis/qix/definitions/#objectinterface). 