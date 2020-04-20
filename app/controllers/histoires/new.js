import Controller from '@ember/controller';
import jQuery from 'jquery';

export default Controller.extend({

    actions: {
        ajouter_Histoire() {
            let data1 = {
                titre: "Test 19/04/2020 de l'insertion d'une histoire via ember",
                resume: "Résumé de l'insertion, si ce message est visible ne bdd, cela à fonctionner via ember!",
                est_publiee: false,
                image: "https://via.placeholder.com/1080",
                fk_id_auteur: 1,
                etapes: [],
                genres: []
            };
            $.ajax({
                type: "POST",
                url: "http://localhost:8080/histoires",
                data: JSON.stringify(data1),
                success: alert("Ajout effectué"),
                dataType: "json",
                contentType: "application/json",
            });
        }
    }
});