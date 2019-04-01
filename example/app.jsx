import React, { useEffect, useMemo, useRef } from 'react';
import enigma from 'enigma.js';
import schema from 'enigma.js/schemas/12.170.2.json';
import picasso from 'picasso.js';
import picassoQ from 'picasso-plugin-q';
import usePromise from 'react-use-promise';
import { useModel, useLayout, usePicasso } from '../src/index';
import script from './data';

const props = {
  qInfo: {
    qType: 'visualization',
    qId: '',
  },
  type: 'my-picasso-chart',
  labels: true,
  qHyperCubeDef: {
    qDimensions: [{
      qDef: {
        qFieldDefs: ['movie'],
        qSortCriterias: [{
          qSortByAscii: 1,
          qSortByLoadOrder: 1,
        }],
      },
    }],
    qMeasures: [{
      qDef: {
        qDef: 'Count(word)',
      },
      qSortBy: {
        qSortByLoadOrder: 1,
        qSortByNumeric: -1,
      },
    },
    ],
    qInitialDataFetch: [{
      qTop: 0, qHeight: 500, qLeft: 0, qWidth: 17,
    }],
    qSuppressZero: false,
    qSuppressMissing: false,
  },
};

const settings = {
  scales: {
    x: {
      data: { extract: { field: 'qDimensionInfo/0', props: { name: { field: 'qDimensionInfo/0', label: v => v.qText } } } },
      padding: 0.2,
    },
    y: {
      data: { field: 'qMeasureInfo/0' },
      include: [0],
      invert: true,
      ticks: { values: [0, 100, 200, 300, 400, 500] },
    },
    color: {
      data: { extract: { field: 'qDimensionInfo/0' } },
      type: 'color',
    },
  },
  components: [
    { type: 'axis', dock: 'left', scale: 'y' },
    { type: 'axis', dock: 'bottom', scale: 'x' },
    { type: 'text', text: 'Total swear word usage per movie', dock: 'top' },
    { type: 'text', text: 'Total swear word', dock: 'left' },
    { type: 'text', text: 'Movie', dock: 'bottom' },
    {
      key: 'bars',
      type: 'box',
      data: {
        extract: {
          field: 'qDimensionInfo/0',
          props: {
            start: 0,
            end: { field: 'qMeasureInfo/0' },
          },
        },
      },
      settings: {
        major: { scale: 'x' },
        minor: { scale: 'y' },
        box: {
          maxWidthPx: 200,
          fill: { scale: 'color' },
          strokeWidth: 1,
        },
      },
      brush: {
        trigger: [{
          on: 'tap',
          contexts: ['highlight'],
        }],
        consume: [{
          context: 'highlight',
          style: {
            inactive: {
              opacity: 0.3,
            },
          },
        }],
      },
    }],
};

const useGlobal = session => usePromise(() => session.open(), [session]);

function useSessionApp(global) {
  const [sessionApp] = usePromise(async () => {
    if (!global) return null;
    const app = await global.createSessionApp();
    await app.setScript(script);
    await app.doReload();
    return app;
  }, [global]);
  return sessionApp;
}

// we need to register the q plugin in order for picasso to understand the QIX hypercube.
picasso.use(picassoQ);

export default function App() {
  // we need to keep track of an element reference for the picasso chart.
  const element = useRef(null);
  // we need to use the useMemo hook to avoid creating new enigma.js sessions each time.
  const session = useMemo(() => enigma.create({ schema, url: 'ws://localhost:9076/app' }), [false]);
  // open the session.
  const [global] = useGlobal(session);
  // create session app, set load script and reload.
  const app = useSessionApp(global);
  // fetch the model
  const [model, modelError] = useModel(app, props);
  // fetch the layout.
  const [layout, layoutError] = useLayout(model);
  // render picasso chart.
  const pic = usePicasso(element, settings, layout);

  // we want to start with one value highlighted in the chart.
  useEffect(() => {
    if (!pic) return;
    // access the brush instance
    const highlighter = pic.brush('highlight');
    // highlight a value
    highlighter.addValue('qHyperCube/qDimensionInfo/0', 1);
  }, [pic]);

  let msg = '';
  if (!app) {
    msg = 'Fetching app...';
  } else if (modelError) {
    msg = 'Oops, there was some problems fetching the model';
  } else if (layoutError) {
    msg = 'Oops, there was some problems fetching the layout';
  } else if (!layout) { msg = 'Fetching layout...'; }

  return (
    <div className="chart">
      <div ref={element}>{msg}</div>
    </div>
  );
}
