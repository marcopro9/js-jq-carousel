$(document).ready( // attendo il caricamento del documento
  function carousel(){ // funzione carosello
    $('.next').click( // qui fa scorrere in avanti le immagini e l'indice
      function() {
        showNextImage();
      }
    )
    $('.prev').click( // qui fa scorrere indietro le immagini e l'indice
      function() {
        showPrevImage();
      }
    )
  }
)

function showNextImage() { // funzione per scorrere in avanti le immagini e l'indice
  var image = $('.images img.active');
  var indexCarousel = $('.nav i.active');

  image.removeClass('active');
  indexCarousel.removeClass('active');

  if (image.hasClass('last')) { // Se l'ultima immagine ha classe last
    $('.images img.first').addClass('active'); // dai all'immagine con classe first la classe active
    $('.nav i.first').addClass('active');// dai al cerchietto dell'indice con classe first la classe active
  } else { // altrimenti prosegui normalmente a scorrere dando classe active alle immagini e ai cerchietti successivi
      image.next('img').addClass('active');
      indexCarousel.next('i').addClass('active');
    }
}

function showPrevImage() { // funzione per scorrere indietro le immagini e l'indice
  var image = $('.images img.active');
  var indexCarousel = $('.nav i.active');

  image.removeClass('active');
  indexCarousel.removeClass('active');

  if (image.hasClass('first')) { // Se l'ultima immagine andando indietro ha classe first
    $('.images img.last').addClass('active');// dai all'immagine con classe last la classe active
    $('.nav i.last').addClass('active');// dai al cerchietto dell'indice con classe last la classe active
  } else { // altrimenti continua a scorrere indietro dando classe active alle immagini e ai cerchietti
      image.prev('img').addClass('active');
      indexCarousel.prev('i').addClass('active');
    }
}
