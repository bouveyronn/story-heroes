import ajax from "ember-fetch/ajax";
import Ember from "ember";

const Api = 'http://localhost:8080';

// eslint-disable-next-line ember/new-module-imports
export default Ember.Object.extend({
  findHistoiresGenre: function (genre_id) {
      var jsonGenre = ajax(Api + '/histoire-genre/' + genre_id);
      console.log(jsonGenre);
      return ajax(Api + '/histoire-genre/' + genre_id);
  }
});
