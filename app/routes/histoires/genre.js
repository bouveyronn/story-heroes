import Route from '@ember/routing/route';
import GenreAdapter from 'story-heroes/adapters/histoires/genre';

export default Route.extend({
  model: function(params){
    var adapter = GenreAdapter.create();
    return Ember.RSVP.hash({
      modelGenreAll: adapter.findHistoiresGenre(params.genre_id),
      modelGenreUn: adapter.findGenre(params.genre_id),
  });
  }
});