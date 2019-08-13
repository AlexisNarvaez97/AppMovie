import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  cartelera: any;

  populares: any;

  popularesNinos: any;


  constructor(private servicesPeli: PeliculasService) {
    this.servicesPeli.getCartelera().subscribe((data: any) =>{
      console.log('Cartelera', data);
      console.log('Cartelera', data.results);
      this.cartelera = data.results;
    });


    this.servicesPeli.getPopulares().subscribe((data:any) => {
      console.log('Populares', data);
      console.log('Populares', data.results);
      this.populares = data.results;
    })

    this.servicesPeli.getPopularesNinos().subscribe((data:any) => {
      this.popularesNinos = data.results;
    })

  }

  ngOnInit() {
  }

}
