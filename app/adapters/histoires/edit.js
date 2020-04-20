import ajax from "ember-fetch/ajax";
import Ember from "ember";

const Api = 'http://localhost:8080';

// eslint-disable-next-line ember/new-module-imports
export default Ember.Object.extend({
    find: function(histoire_id) {
        return ajax(Api + '/histoires/' + histoire_id);
    }
});