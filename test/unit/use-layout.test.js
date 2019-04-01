import { renderHook, act } from 'react-hooks-testing-library';
import { useLayout } from '../../src/index';
import TestPromise from './test-promise';

describe('useLayout', () => {
  let promise;
  let model;

  const mockLayout = {
    id: 'myLayout',
  };

  beforeEach(() => {
    promise = new TestPromise();
    model = {
      id: 'myModel',
      on: jest.fn(),
      removeListener: jest.fn(),
      getLayout: jest.fn(() => promise),
    };
  });

  test('should return undefined when no model is present', () => {
    const { result } = renderHook(() => useLayout(null));
    const [layout, error] = result.current;
    expect(layout).toBeUndefined();
    expect(error).toBeUndefined();
  });

  test('should return undefined on pending promise', () => {
    const { result } = renderHook(() => useLayout(model));
    const [layout, error] = result.current;
    expect(layout).toBeUndefined();
    expect(error).toBeUndefined();
  });

  test('should throw error on rejected promise', () => {
    const { result } = renderHook(() => useLayout(model));
    const rejectedError = 'Error occurred';
    act(() => promise.reject(rejectedError));
    const [layout, error] = result.current;
    expect(layout).toBeUndefined();
    expect(error).toEqual(rejectedError);
  });

  test('should return layout object', () => {
    const { result } = renderHook(() => useLayout(model));
    act(() => promise.resolve(mockLayout));
    const [layout, error] = result.current;
    expect(layout).toEqual(mockLayout);
    expect(error).toBeUndefined();
  });

  test('should add listener for model changes', () => {
    renderHook(() => useLayout(model));
    act(() => promise.resolve(mockLayout));
    expect(model.on).toHaveBeenCalledTimes(1);
    expect(model.on).toHaveBeenCalledWith('changed', expect.any(Function));
    expect(model.removeListener).toHaveBeenCalledTimes(0);
  });

  test('should remove event listener for model changes on unmount', () => {
    const { unmount } = renderHook(() => useLayout(model));
    act(() => promise.resolve(mockLayout));
    unmount();
    expect(model.removeListener).toHaveBeenCalledTimes(1);
    expect(model.removeListener).toHaveBeenCalledWith('changed', expect.any(Function));
  });

  test('side effect should run when model is updated', () => {
    const { rerender } = renderHook(() => useLayout(model));
    act(() => promise.resolve(mockLayout));
    rerender();
    expect(model.on).toHaveBeenCalledTimes(1);
    model.id = 'myNewId';
    rerender();
    expect(model.on).toHaveBeenCalledTimes(2);
  });

  test('if model object is a Doc, getAppLayout should be called', () => {
    model = {
      id: 'myApp',
      on: jest.fn(),
      removeListener: jest.fn(),
      getAppLayout: jest.fn(() => promise),
    };
    const { result } = renderHook(() => useLayout(model));
    act(() => promise.resolve(mockLayout));
    const [layout, error] = result.current;
    expect(model.getAppLayout).toBeCalledTimes(1);
    expect(layout).toEqual(mockLayout);
    expect(error).toBeUndefined();
  });

  test('layout should not be updated if component has been unmounted when promise resolves', () => {
    const { result, unmount } = renderHook(() => useLayout(model));
    unmount();
    act(() => promise.resolve(mockLayout));
    const [layout, error] = result.current;
    expect(layout).toBeUndefined();
    expect(error).toBeUndefined();
  });
});
