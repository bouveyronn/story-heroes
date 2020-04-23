import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | histoires/edit/genre', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:histoires/edit/genre');
    assert.ok(route);
  });
});
