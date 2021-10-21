$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  responsive: {
    0: {
      items: 1 /*se minha tela for 0 ex: celular eu vou ter só um item ( que seria uma foto do filme) */
    },
    600: {
      items: 3 /*se minha tela for 600px minha tela vai aparecer 3 item por vez */
    },
    1000: {
      items: 5 /*Se minha tela tiver 1000px minha tela vai suporta 5 item por vez Ex: a tela completa do meu computador */
    }
  }
})
