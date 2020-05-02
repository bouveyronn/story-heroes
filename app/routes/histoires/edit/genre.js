import Route from '@ember/routing/route';
import Ember from 'ember';

import GenreAdapter from 'story-heroes/adapters/histoires/edit/genre';
import HistoireAdapter from 'story-heroes/adapters/histoires/edit';

export default Route.extend({
  model: function(params) {
    var Genreadapter = GenreAdapter.create();
    var Histoireadapter = HistoireAdapter.create();
    //Permet de recupérer l'url courant
    let url = this._router.url;
    //Récupère l'id de l'histoire
    let idHistoire = url.split('/')[3];

    //Permet d'utiliser plusieurs model
    return Ember.RSVP.hash({
      modelGenre: Genreadapter.findAll(),
      modelHistoire: Histoireadapter.find(idHistoire)
    });
  }
});
