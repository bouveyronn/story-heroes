import Route from '@ember/routing/route';
import HistoireAdapter from 'story-heroes/adapters/histoires/catalogue';

export default Route.extend({
  model: function(){
    var adapter = HistoireAdapter.create();
    return adapter.findAll();
  }
});

