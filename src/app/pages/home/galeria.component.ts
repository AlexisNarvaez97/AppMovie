import { Component, OnInit, Input } from '@angular/core';


//Recibir data importando el INPUT
// Es como decir que esta información vendra fuera del componente.


@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styles: []
})
export class GaleriaComponent implements OnInit {

  // peliculas: any[] = [];

  @Input('peliculas') peliculas;
  @Input('titulo') titulo;

  constructor() { }

  ngOnInit() {
  }

}
