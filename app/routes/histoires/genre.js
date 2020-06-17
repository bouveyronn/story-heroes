import Route from '@ember/routing/route';
import GenreAdapter from 'story-heroes/adapters/histoires/genre';

export default Route.extend({
  model: function(params){
    var adapter = GenreAdapter.create();
    return adapter.findHistoiresGenre(params.genre_id);
  }
});
