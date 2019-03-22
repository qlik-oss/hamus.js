import { renderHook, act } from 'react-hooks-testing-library';
import { useModel } from '../../src/index';
import TestPromise from './test-promise';

describe('useModel hook test', () => {
  let app;
  let promise;

  const def = {
    qInfo: { qType: 'dmi-field' },
    qListObjectDef: {
      qShowAlternatives: true,
      qDef: {
        qFieldDefs: ['field'],
      },
    },
  };

  beforeEach(() => {
    promise = new TestPromise();
    app = {
      id: Date.now(),
      createSessionObject: jest.fn(() => promise),
    };
  });

  test('should return model object', async () => {
    const mockModel = { id: 123 };
    const { result } = renderHook(() => useModel(app, def));
    act(() => promise.resolve(mockModel));
    const [model, error] = result.current;
    expect(model).toBe(mockModel);
    expect(error).toBeNull();
  });

  test('error upon object creation should be returned', async () => {
    const { result } = renderHook(() => useModel(app, def));
    const e = new Error('Error occurred');
    act(() => promise.reject(e));
    const [model, error] = result.current;
    expect(model).toBeNull();
    expect(error).toEqual(e);
  });

  test('should return null when no app is present', () => {
    const { result } = renderHook(() => useModel(null));
    const [model, error] = result.current;
    expect(model).toBeNull();
    expect(error).toBeNull();
  });

  test('pending promise returns null model', async () => {
    const { result } = renderHook(() => useModel(app, def));
    const [model, error] = result.current;
    expect(model).toBeNull();
    expect(error).toBeNull();
  });

  test('object should be created from def', async () => {
    renderHook(() => useModel(app, def));
    expect(app.createSessionObject).toBeCalledWith(def);
  });

  test('model object should be cached', async () => {
    renderHook(() => useModel(app, def));
    expect(app.createSessionObject).toHaveBeenCalledTimes(1);

    // calling useModel without any changed should fetch the object from cache
    renderHook(() => useModel(app, def));
    expect(app.createSessionObject).toHaveBeenCalledTimes(1);

    // changing app id should create a new object
    app.id = '1234';
    renderHook(() => useModel(app, def));
    expect(app.createSessionObject).toHaveBeenCalledTimes(2);

    // changing def should create a new object
    def.qListObjectDef.qShowAlternatives = false;
    renderHook(() => useModel(app, def));
    expect(app.createSessionObject).toHaveBeenCalledTimes(3);
  });
});
