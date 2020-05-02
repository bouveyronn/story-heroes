import Controller from '@ember/controller';

function OnSuccess() {
  alert('Genre ajouté !');

}

export default Controller.extend({
  actions: {
    ajouter_genre() {
      let idGenre = this.get('genre').split('-')[0];
      let idHistoire = this.get('genre').split('-')[1];
      let data1 = {
          histoire: idHistoire,
          genre: idGenre
      };
      $.ajax({
          type: "POST",
          url: "http://localhost:8080/histoire-genre",
          data: JSON.stringify(data1),
          success: OnSuccess(),
          dataType: "json",
          contentType: "application/json",
      });

    },
    selectGenre(idGenre) {
      this.set('genre', idGenre);
    }
  }
});
