import { Component, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  @ViewChild(IonModal) modal: IonModal;

  public filmesPrincipal = [
    {
      nome: 'Minions 2: A Origem de Gru',
      foto: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tzFAboMUGJKoPQEtlxfxbbYsSWa.jpg',
      ano: 2022,
      categorias: ['Família', 'Animação', 'Aventura', 'Comédia', 'Fantasia'],
      avaliacao: 78
    },
    {
      nome: 'Homem-Aranha: Sem Volta Para Casa',
      foto: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/fVzXp3NwovUlLe7fvoRynCmBPNc.jpg',
      ano: 2021,
      categorias: ['Ação', 'Aventura', 'Ficção científica'],
      avaliacao: 80
    },
    {
      nome: 'Sonic 2: O Filme',
      foto: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/f4SvCKIUrC2cDR7Xo4k1kaGAqQ2.jpg',
      ano: 2022,
      categorias: ['Ação', 'Aventura', 'Família', 'Comédia'],
      avaliacao: 77
    }
  ];

  public filmesRoleta1 = [
    {
      nome: 'Morbius',
      foto: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/6JjfSchsU6daXk2AKX8EEBjO3Fm.jpg',
      ano: 2022,
      categorias: ['Ação', 'Ficção científica', 'Fantasia'],
      avaliacao: 65
    },
    {
      nome: 'Demon Slayer - Mugen Train: O Filme',
      foto: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/h8Rb9gBr48ODIwYUttZNYeMWeUU.jpg',
      ano: 2020,
      categorias: ['Animação', 'Ação', 'Aventura', 'Fantasia'],
      avaliacao: 84
    },
    {
      nome: 'O Poderoso Chefinho 2: Negócios da Família',
      foto: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/p033k6k8V9USI0TWZavIxoYzsGi.jpg',
      ano: 2021,
      categorias: ['Animação', 'Comédia', 'Aventura', 'Família'],
      avaliacao: 75
    },
    {
      nome: 'Larva: O Pingente Mágico',
      foto: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/jy2LLGv4ORGp72XSAUFVcVJCWxQ.jpg',
      ano: 2022,
      categorias: ['Comédia', 'Família', 'Animação'],
      avaliacao: 70
    },
  ];

  public filmesRoleta2 = [
    {
      nome: 'Um Sonho de Liberdade',
      foto: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/umX3lBhHoTV7Lsci140Yr8VpXyN.jpg',
      ano: 1994,
      categorias: ['Drama', 'Crime'],
      avaliacao: 87
    },
    {
      nome: 'A Viagem de Chihiro',
      foto: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/e7WdOF6j3wB5kFXIEoqGXKmGaTl.jpg',
      ano: 2001,
      categorias: ['Animação', 'Família', 'Fantasia'],
      avaliacao: 85
    },
    {
      nome: 'Três Homens em Conflito',
      foto: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/f6CoXpyZRqYJF3lTfxjWIahO6qM.jpg',
      ano: 1966,
      categorias: ['Faroeste'],
      avaliacao: 85
    },
    {
      nome: 'Clube da Luta',
      foto: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/r3pPehX4ik8NLYPpbDRAh0YRtMb.jpg',
      ano: 1999,
      categorias: ['Drama'],
      avaliacao: 84
    },
  ];

  public filmeModal = {
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

  public changeModal(filme) {
    this.filmeModal.nome = filme.nome;
    this.filmeModal.foto = filme.foto;
    this.filmeModal.ano = filme.ano;
    this.filmeModal.categorias = filme.categorias;
    this.filmeModal.avaliacao = filme.avaliacao;
    this.present();
  }

}
