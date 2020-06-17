import Route from '@ember/routing/route';
import GenreAdapter from 'story-heroes/adapters/histoires/genre';
import Ember from 'ember';

export default Ember.Route.extend({
    model: function(params) {
        var Genreadapter = GenreAdapter.create();
        return Ember.RSVP.hash({
            modelGenre: Genreadapter.findAll(),
        });
    }
    
});