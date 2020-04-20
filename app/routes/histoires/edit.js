import Route from '@ember/routing/route';
import HistoireAdapter from 'story-heroes/adapters/histoires/edit';

export default Route.extend({

    model: function(params) {
        var adapter = HistoireAdapter.create();
        return adapter.find(params.histoire_id);
    }
});