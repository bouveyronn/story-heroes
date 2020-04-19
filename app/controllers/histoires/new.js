import Controller from '@ember/controller';
import jQuery from 'jquery';

export default Controller.extend({

actions: {
  ajouter_Histoire () {

    let data1 = {
      titre: "Test 05/04/2020 de l'insertion d'une histoire via ember",
      resume: "Résumé de l'insertion, si ce message est visible ne bdd, cela à fonctionner via ember!",
      est_publiee: true,
      image: "",
      fk_id_auteur: 1,
      etapes: [],
      genres: []
    };
    $.post('http://localhost:8080/histoires', data1).then(function() {
        alert('ajoute effecuté');
      });

  }
}
});


// type: 'post',
//   data: {
//   titre: "Test 05/04/2020 de l'insertion d'une histoire via ember",
//     resume: "Résumé de l'insertion, si ce message est visible ne bdd, cela à fonctionner via ember!",
//     est_publiee: true,
//     image: "Ressources/upload/yu-gi-oh.png",
//     fk_id_auteur: 1,
//     etapes: [],
//     genres: []
// }
