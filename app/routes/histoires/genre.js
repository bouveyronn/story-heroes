import Route from '@ember/routing/route';
import GenreAdapter from 'story-heroes/adapters/histoires/genre';
import HistoireAdapter from 'story-heroes/adapters/histoires/detail';

export default Route.extend({
  model: function(params){
    var adapter = GenreAdapter.create();
    console.log(adapter.findHistoiresGenre(params.genre_id));
    return adapter.findHistoiresGenre(params.genre_id);
  }
});
