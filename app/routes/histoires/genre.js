import Route from '@ember/routing/route';
import GenreAdapter from 'story-heroes/adapters/histoires/genre';
import HistoireAdapter from 'story-heroes/adapters/histoires/detail';

async function getData(idHistoire){
  var adapter = HistoireAdapter.create();
  return await adapter.find(idHistoire);
}

export default Route.extend({
  model: function(params){
    var adapter = GenreAdapter.create();
    return adapter.findHistoiresGenre(params.genre_id);
  },
  afterModel(model) {

    var jsonOuput=null;

    for (var i=0; i<model.length; i++){
      jsonOuput = function (){
          getData(model[i].histoire).then((response) => {
          try {
            console.log(response);
          }
          catch{
            alert("Wallah ca marche pas");
          }
        });
      };

    }


  }
});
