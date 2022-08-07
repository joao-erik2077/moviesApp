import { Component, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  @ViewChild(IonModal) modal: IonModal;

  public seriesPrincipal = [
    {
      nome: 'Flash',
      foto: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/lJA2RCMfsWoskqlQhXPSLFQGXEJ.jpg',
      ano: 2014,
      categorias: ['Drama', 'Sci-Fi & Fantasy'],
      avaliacao: 78
    },
    {
      nome: 'Game of Thrones',
      foto: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/l2ezB41chGDjXcKo24lseuXYtKP.jpg',
      ano: 2011,
      categorias: ['Sci-Fi & Fantasy', 'Drama', 'Action & Adventure'],
      avaliacao: 84
    },
    {
      nome: 'The Good Doctor: O Bom Doutor',
      foto: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/jtLB7xJKcbekmOYkb5NZditBsgk.jpg',
      ano: 2017,
      categorias: ['Drama'],
      avaliacao: 85
    }
  ];

  public seriesRoleta1 = [
    {
      nome: 'Stranger Things',
      foto: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/49WJfeN0moxb9IPfGn8AIqMGskD.jpg',
      ano: 2016,
      categorias: ['Drama', 'Sci-Fi & Fantasy', 'Mistério'],
      avaliacao: 86
    },
    {
      nome: 'The Boys',
      foto: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/stTEycfG9928HYGEISBFaG1ngjM.jpg',
      ano: 2019,
      categorias: ['Sci-Fi & Fantasy', 'Action & Adventure'],
      avaliacao: 85
    },
    {
      nome: 'Peaky Blinders: Sangue, Apostas e Navalhas',
      foto: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/i0uajcHH9yogXMfDHpOXexIukG9.jpg',
      ano: 2013,
      categorias: ['Drama', 'Crime'],
      avaliacao: 86
    },
    {
      nome: 'Spy x Family',
      foto: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/3r4LYFuXrg3G8fepysr4xSLWnQL.jpg',
      ano: 2022,
      categorias: ['Animação', 'Comédia', 'Action & Adventure'],
      avaliacao: 87
    },
  ];

  public seriesRoleta2 = [
    {
      nome: 'Eu Não Sou um Animal',
      foto: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/qG59J1Q7rpBc1dvku4azbzcqo8h.jpg',
      ano: 2004,
      categorias: ['Animação', 'Comédia'],
      avaliacao: 92
    },
    {
      nome: 'Arcane',
      foto: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/xQ6GijOFnxTyUzqiwGpVxgfcgqI.jpg',
      ano: 2021,
      categorias: ['Animação', 'Sci-Fi & Fantasy', 'Action & Adventure', 'Drama'],
      avaliacao: 91
    },
    {
      nome: 'The Rising of the Shield Hero',
      foto: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/baX1tMzHeA7K3eTP4fOvPGwVgAG.jpg',
      ano: 2019,
      categorias: ['Animação', 'Action & Adventure', 'Sci-Fi & Fantasy', 'Drama'],
      avaliacao: 89
    },
    {
      nome: 'Kuroko no Basket',
      foto: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/5CEIm6RPRU9iy4jBpfreUwJkydv.jpg',
      ano: 2012,
      categorias: ['Animação', 'Comédia'],
      avaliacao: 87
    },
  ];

  public serieModal = {
    nome: '',
    foto: '',
    ano: 0,
    categorias: [],
    avaliacao: 0
  };

  constructor() {}

  present() {
    this.modal.present();
  }

  public changeModal(serie) {
    this.serieModal.nome = serie.nome;
    this.serieModal.foto = serie.foto;
    this.serieModal.ano = serie.ano;
    this.serieModal.categorias = serie.categorias;
    this.serieModal.avaliacao = serie.avaliacao;
    this.present();
  }

}
