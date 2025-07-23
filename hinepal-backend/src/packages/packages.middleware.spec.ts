import { PackagesMiddleware } from './packages.middleware';

describe('PackagesMiddleware', () => {
  it('should be defined', () => {
    expect(new PackagesMiddleware()).toBeDefined();
  });
});
