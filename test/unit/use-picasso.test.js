import { renderHook } from 'react-hooks-testing-library';
import picasso from 'picasso.js';
import { usePicasso } from '../../src/index';

const mockChart = {
  id: 'myPicassoChart',
  update: jest.fn(),
};

jest.mock('picasso.js');
picasso.chart = jest.fn().mockReturnValue(mockChart);

describe('usePicasso hook test', () => {
  let layout = { qInfo: 'myLayout', qHyperCube: { qSize: {}, qDimensionInfo: [] } };
  let settings = { scales: {}, components: [] };
  let element = { id: 'myElement', current: { sth: 'sth' } };

  beforeEach(() => {
    picasso.mockClear();
    picasso.chart.mockClear();
    mockChart.update.mockClear();
  });

  test('should return null object when having no element', () => {
    const { result } = renderHook(() => usePicasso(null, settings, layout));
    expect(result.current).toBeNull();
  });

  test('should return null object when having no settings', () => {
    const { result } = renderHook(() => usePicasso(element, null, layout));
    expect(result.current).toBeNull();
  });

  test('should return null object when having no layout', () => {
    const { result } = renderHook(() => usePicasso(element, settings, null));
    expect(result.current).toBeNull();
  });

  test('should return chart object', () => {
    const { result } = renderHook(() => usePicasso(element, settings, layout));
    expect(result.current).toEqual(mockChart);
  });

  test('element changes should update chart', () => {
    const { rerender } = renderHook(() => { usePicasso(element, settings, layout); });
    expect(picasso.chart).toHaveBeenCalledTimes(1);
    element = { new: 'sthnew', current: 'sthelse' };
    rerender();
    expect(picasso.chart).toHaveBeenCalledTimes(1);
    expect(mockChart.update).toHaveBeenCalledTimes(1);
  });

  test('layout changes should update chart', () => {
    const { rerender } = renderHook(() => { usePicasso(element, settings, layout); });
    expect(picasso.chart).toHaveBeenCalledTimes(1);
    layout = { qInfo: 'myLayout', qHyperCube: { qSize: {}, qDimensionInfo: [] } };
    rerender();
    expect(picasso.chart).toHaveBeenCalledTimes(1);
    expect(mockChart.update).toHaveBeenCalledTimes(1);
  });

  test('settings changes should update chart', () => {
    const { rerender } = renderHook(() => { usePicasso(element, settings, layout); });
    expect(picasso.chart).toHaveBeenCalledTimes(1);
    settings = { scales: {}, components: [] };
    rerender();
    expect(picasso.chart).toHaveBeenCalledTimes(1);
    expect(mockChart.update).toHaveBeenCalledTimes(1);
  });
});
