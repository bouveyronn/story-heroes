import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | histoires/edit', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:histoires/edit');
    assert.ok(route);
  });
});
