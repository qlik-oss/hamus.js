import { renderHook, act } from 'react-hooks-testing-library';
import { useLayout } from '../../src/index';

describe('useLayout', () => {
  let model;

  const mockLayout = {
    id: 'myLayout',
  };

  beforeEach(() => {
    model = {
      id: 'myModel',
      on: jest.fn(),
      removeListener: jest.fn(),
      getLayout: () => jest.fn().mockReturnValue(mockLayout),
    };
  });

  test('should return null when no model is present', () => {
    const { result } = renderHook(() => useLayout(null));
    const [layout, error] = result.current;
    expect(layout).toBeNull();
    expect(error).toBeNull();
  });

  test('should catch and return error', async () => {
    const rejectedError = new Error('Error occurred');
    model.getLayout = () => { throw rejectedError; };
    const { result } = renderHook(() => useLayout(model));
    const [layout, error] = result.current;
    expect(layout).toBeNull();
    expect(error).toEqual(rejectedError);
  });

  test('should return layout object', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useLayout(model));
    await act(async () => waitForNextUpdate());
    const [layout, error] = result.current;
    expect(layout).toEqual(mockLayout);
    expect(error).toBeNull();
  });

  test('should add listener for model changes', async () => {
    model.getLayout = jest.fn();
    renderHook(() => useLayout(model));
    expect(model.getLayout).toHaveBeenCalledTimes(1);
    expect(model.on).toHaveBeenCalledTimes(1);
    expect(model.on).toHaveBeenCalledWith('changed', expect.any(Function));
    // fake a changed event
    const modelChangedHandler = model.on.mock.calls[0][1];
    modelChangedHandler();
    expect(model.getLayout).toHaveBeenCalledTimes(2);
    expect(model.removeListener).toHaveBeenCalledTimes(0);
  });

  test('should remove event listener for model changes on unmount', async () => {
    const { waitForNextUpdate, unmount } = renderHook(() => useLayout(model));
    await act(async () => waitForNextUpdate());
    unmount();
    expect(model.removeListener).toHaveBeenCalledTimes(1);
    expect(model.removeListener).toHaveBeenCalledWith('changed', expect.any(Function));
  });

  test('side effect should run when model is updated', async () => {
    const { rerender, waitForNextUpdate } = renderHook(() => useLayout(model));
    await act(async () => waitForNextUpdate());
    rerender();
    expect(model.on).toHaveBeenCalledTimes(1);
    model.id = 'myNewId';
    rerender();
    expect(model.on).toHaveBeenCalledTimes(2);
  });

  test('if model object is a Doc, getAppLayout should be called', async () => {
    model = {
      id: 'myApp',
      on: jest.fn(),
      removeListener: jest.fn(),
      getAppLayout: jest.fn().mockReturnValue(mockLayout),
    };
    const { result, waitForNextUpdate } = renderHook(() => useLayout(model));
    await act(async () => waitForNextUpdate());
    const [layout, error] = result.current;
    expect(model.getAppLayout).toBeCalledTimes(1);
    expect(layout).toEqual(mockLayout);
    expect(error).toBeNull();
  });

  test('layout should not be updated if component has been unmounted when promise resolves', async () => {
    model.getLayout = jest.fn();
    const { result, unmount } = renderHook(() => useLayout(model));
    unmount();
    const [layout, error] = result.current;
    expect(layout).toBeNull();
    expect(error).toBeNull();
  });
});
