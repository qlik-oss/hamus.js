import { useState, useEffect } from 'react';
import picassoQ from 'picasso-plugin-q';
import picasso from 'picasso.js';

picasso.use(picassoQ);

export default function usePicasso(element, settings, layout) {
  const [chart, setPicasso] = useState(null);

  useEffect(() => {
    if (!element || !element.current || !settings || !layout) return;

    const data = [{
      type: 'q',
      key: 'qHyperCube',
      data: layout.qHyperCube,
    }];

    if (!chart) {
      setPicasso(picasso.chart({
        element: element.current,
        data,
        settings,
      }));
    } else {
      chart.update({ settings, data });
    }
  }, [element, settings, layout]);
  return chart;
}
