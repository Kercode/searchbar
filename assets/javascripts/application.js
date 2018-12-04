$(document).ready(function () {
  // Au moment du clic
  $('#submit-button').click(function () {
    // Je conserve la valeur de la barre de recherche
    let searchBarVal = $('#search-bar').val();

    // Je transforme en expression régulière
    let regexp = new RegExp(searchBarVal, 'g');

    // Je génère mon texte avec span (interpolation)
    let spanContent = `<span class='yellow'>${searchBarVal}</span>`

    // Je génère un nouveau contenu à partir de l'ancien
    let newContent =
      $('#content p').html().replace(regexp, spanContent);

    // Je remplace le contenu par le nouveau contenu
    $('#content p').html(newContent);
  });
});
