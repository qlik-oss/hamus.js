import React, { useMemo, useRef } from 'react';
import enigma from 'enigma.js';
import schema from 'enigma.js/schemas/12.170.2.json';
import usePromise from 'react-use-promise';
import useModel from '../src/hooks/useModel';
import useLayout from '../src/hooks/useLayout';
import usePicasso from '../src/hooks/usePicasso';

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
    }],
};

const useGlobal = session => usePromise(() => session.open(), [session]);

function useSessionApp(global) {
  const [sessionApp] = usePromise(async () => {
    if (!global) return null;
    const app = await global.createSessionApp();
    await app.createConnection({ qName: 'data', qConnectionString: '/data/', qType: 'folder' });
    const script = `Tarantino:
    LOAD * FROM [lib://data/tarantino.csv]
    (txt, utf8, embedded labels, delimiter is ',');`;
    await app.setScript(script);
    await app.doReload();
    return app;
  }, [global]);
  return sessionApp;
}

export default function App() {
  const element = useRef(null);
  const session = useMemo(() => enigma.create({ schema, url: 'ws://localhost:9076/app' }), [false]);
  const [global] = useGlobal(session);
  const app = useSessionApp(global);
  const [model, modelError] = useModel(app, props);
  const [layout, layoutError] = useLayout(model);
  usePicasso(element, settings, layout);
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
