/*
Ciao ragazzi,
Esercizio di oggi: Vue Slider
nome repo: vue-slider
Descrizione:
Rifare l'esercizio dello slider come fatto assieme in classe.
Bonus:
Applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente.
IMPORTANTE: Non perdete troppo tempo sui dettagli grafici, l'importante sono le funzionalità , non riterremo  errori se la grafica non rispecchia in maniera identica quello che abbiamo fatto in classe
*/

console.log("js ok");

Vue.config.devtools = true;

const app = new Vue({
  el: "#app",
  data: {
    currentIndex: 0,
    linkImage: [
      "./img/image1.jpg",
      "./img/image2.jpg",
      "./img/image3.jpg",
      "./img/image4.jpg",
    ],
  },
  methods: {
    isActive(index) {
      return this.currentIndex === index ? "active" : "";
    },
    increaseIndex() {
      if (
        this.currentIndex === this.linkImage.length - 1 ||
        this.currentIndex > this.linkImage.length - 1
      ) {
        this.currentIndex = 0;
      } else this.currentIndex++;
    },
    decreaseIndex() {
      if (this.currentIndex === 0) {
        this.currentIndex = this.linkImage.length - 1;
      } else this.currentIndex--;
    },
  },
});
