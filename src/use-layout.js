import { useState, useEffect } from 'react';
import debounce from './render-debouncer';

export default function useLayout(model) {
  let canceled = false;
  const [error, setError] = useState(null);
  const [layout, setLayout] = useState(null);

  useEffect(() => {
    if (!model) return undefined;
    const fetchModel = async () => {
      try {
        const newLayout = model.getAppLayout ? await model.getAppLayout() : await model.getLayout();
        if (!canceled) {
          debounce(() => {
            setLayout(newLayout);
          });
        }
      } catch (err) {
        setError(err);
      }
    };
    model.on('changed', fetchModel);
    fetchModel();

    return () => {
      canceled = true;
      model.removeListener('changed', fetchModel);
    };
  }, [model && model.id]);

  return [layout, error];
}
