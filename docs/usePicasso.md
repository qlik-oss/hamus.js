# usePicasso

Renders a [picasso.js](https://github.com/qlik-oss/picasso.js) visualization to an html element.
If any of the input parameters are changed/updated (typically the `layout`), the rendered chart will be updated.
For picasso.js docs, head over to [picassojs.com](https://picassojs.com/).

In addition to React 16.8.1 or later, [picasso.js](https://www.npmjs.com/package/picasso.js) and [picasso-plugin-q](https://www.npmjs.com/package/picasso-plugin-q) must be installed to use this hook.

## Usage

```jsx
import { useRef } from 'react';
import { usePicasso } from 'hamus.js';

const Demo = (settings, layout) => {
  const element = useRef(null);
  const layout = usePicasso(element, settings, layout);
  
  return (
    <div className="chart-div" ref={element} />
  );
};
```

## Reference
- The `element` is the html element where the chart will be rendered.
- `settings`  is the picasso.js settings object ([docs](https://picassojs.com/docs/chart.html)) which contains info about the chart (components, scales etc).
- `layout` is the object containing the hypercube data which will be shown in the chart.
