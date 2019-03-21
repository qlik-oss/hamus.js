import usePromise from 'react-use-promise';

const objectCache = {};

export default function useModel(app, def) {
  let model = null;
  let error = null;
  [model, error] = usePromise(() => {
    if (!app) {
      return null;
    }
    const key = JSON.stringify(def) + app.id;
    if (objectCache[key]) {
      return objectCache[key];
    }
    objectCache[key] = app.createSessionObject(def);
    return objectCache[key];
  }, [app && app.id + JSON.stringify(def)]);
  return [model, error];
}
