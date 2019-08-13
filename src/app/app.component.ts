import { Component } from '@angular/core';
import { PeliculasService } from './services/peliculas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AppMovie';

  constructor(private peliculas: PeliculasService){


    this.peliculas.getPopulares().subscribe( resp =>{
      console.log('Populares', resp);
    });


  }




}
