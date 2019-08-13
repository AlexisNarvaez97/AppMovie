import { Injectable } from '@angular/core';
import 'rxjs';
import { map, delay } from 'rxjs/operators';
import { HttpClient, HttpClientJsonpModule, JsonpClientBackend, JsonpInterceptor } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private apikey:string = "b6488682f3568e34b42363e67701d255";
  private urlMoviedb:string = "https://api.themoviedb.org/3";

  peliculas: any[] = [];


  constructor( private jsonp: HttpClientJsonpModule, private http: HttpClient) { }
  

  // getCartelera(){

  //   let hasta = new Date();
  //   let desde = new Date();

  //   //Cambiar la fecha, agregarle tiene 7 días.
  //   hasta.setDate( hasta.getDate() + 7);

  //   let desdeStr = `${ desde.getFullYear()}-${desde.getMonth()+1}-${desde.getDate()}`;
  //   let hastaStr = `${ hasta.getFullYear()}-${hasta.getMonth()+1}-${hasta.getDate()}`;

  //   let url = `${this.urlMoviedb}/discover/movie?primary_release_date.gte=${desdeStr}&primary_release_date.lte=${hastaStr}&api_key=${ this.apikey }&language=es`;
  //   return this.http.jsonp(url, 'callback');
  // }

  getCartelera() {
 
    let desde = new Date();
    let hasta = new Date();
    hasta.setDate( hasta.getDate() + 7);
 
    let desdeStr = `${ desde.getFullYear()}-${desde.getMonth() + 1}-${desde.getDay()}`;
    let hastaStr = `${ hasta.getFullYear()}-${hasta.getMonth() + 1}-${hasta.getDay()}`;
 
    let url =`${ this.urlMoviedb }/discover/movie?primary_release_date.gte=${desdeStr}&primary_release_date.lte=${hastaStr}&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;
    return this.http.jsonp(url, '').pipe(map(res => res));
  }

  getPopulares(){
    let url = `${ this.urlMoviedb }/discover/movie?sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;
    return this.http.jsonp(url, '').pipe(map(res => res));
  }

  getPopularesNinos(){
    let url = `${ this.urlMoviedb }/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc${ this.apikey }&language=es&callback=JSONP_CALLBACK`;
    return this.http.jsonp(url, '').pipe(map(res => res));
  }

  buscarPelicula(texto:string){
    let url = `${this.urlMoviedb}/search/movie?query=${texto}&sort_y=popularity&language=es`
    return this.http.get(url).pipe(map((res: any) => {
      this.peliculas = res.results;
      console.log(this.peliculas);
      return res
    }));
  }

  
  getPelicula(id:string) {

    let url = `${this.urlMoviedb}/movie/${id}?api_key=${this.apikey}&language=es`;
    return this.http.get(url).pipe(map((resp: any) =>{
      console.log(resp);
      return resp
    }));


  }

}
