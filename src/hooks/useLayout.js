import { useState, useEffect } from 'react';
import usePromise from 'react-use-promise';

export default function useLayout(model) {
  const [changed, setChanged] = useState(null);
  let canceled = false;
  let layout = null;
  let error = null;

  [layout, error] = usePromise(() => {
    if (model) {
      const newLayout = model.getAppLayout ? model.getAppLayout() : model.getLayout();
      if (!canceled) {
        return newLayout;
      }
    }
    return null;
  }, [model, changed]);

  useEffect(() => {
    if (!model) {
      return undefined;
    }
    const modelChanged = () => {
      setChanged(new Date());
    };
    model.on('changed', modelChanged);
    return () => {
      canceled = true;
      model.removeListener('changed', modelChanged);
    };
  }, [model && model.id]);

  return [layout, error];
}
