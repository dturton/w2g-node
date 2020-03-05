import { mocked } from 'ts-jest/utils';
import W2g from '../index';
import { w2gOrderResponse } from './mock';
import { IOrder } from '../types';

jest.mock('../index');

beforeEach(() => {
  // Clear all instances and calls to constructor and all methods:
  mocked(W2g).mockClear();
});

it('We can check if the consumer called the class constructor', () => {
  const w2gApi = new W2g({
    env: 'stage',
    token: 'token',
    secret: 'secret',
    merchantId: 999,
  });
  expect(W2g).toHaveBeenCalledTimes(1);
});

it('should get order', async () => {
  const w2gApi = new W2g({
    env: 'stage',
    token: 'asdfasfd',
    secret: 'asdfasdf',
    merchantId: 999,
  });
  mocked(w2gApi).getOrder.mockResolvedValue(w2gOrderResponse);

  const result = await w2gApi.getOrder(420949);
  expect(result).toBe(w2gOrderResponse);
});
