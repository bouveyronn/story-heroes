import Controller from '@ember/controller';
import jQuery from 'jquery';

export default Controller.extend({
    actions: {
        ajouter_Histoire() {
            let data1 = {
                titre: this.get('titre'),
                resume: this.get('resume'),
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
                success: alert("histoire ajoutée"),
                dataType: "json",
                contentType: "application/json",
            });
        }
    }
});
