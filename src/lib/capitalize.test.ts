import { describe, assert, it } from 'vitest';
import { capitalize } from './capitalize';

describe('capitalize', () => {
  it('should handle one word no spaces', () => {
    assert.equal(capitalize('foo'), 'Foo');
  });

  it('should handle multiple words with spaces', () => {
    assert.equal(capitalize('john smith'), 'John Smith');
  });
});
