import { readPath } from '../../../helpers/read-path';
import { module, test } from 'qunit';

module('Unit | Helper | read path');

// Replace this with your real tests.
test('it works', function(assert) {
  var object = 'object';
  var path = '1';
  var result = readPath([object, path]);
  assert.ok(result);
});
