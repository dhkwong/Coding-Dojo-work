import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) {
    this.getPokemon();
  }
  getPokemon() {
    // our http response is an Observable, store it in a variable
    let tempObservable = this._http.get('https://pokeapi.co/api/v2/pokemon/1/');
    // subscribe to the Observable and provide the code we would like to do with our data from the response
    tempObservable.subscribe(bsaur => {
      // Make an API request from your service to get data about your favorite Pokemon (done)
      // Print the most interesting data about your Pokemon in a string(done)
      // Using the data from your first API call, construct another API call(done)
      // Print how many Pokemon share your favorite Pokemon's abilities
      // console.log("Got our pokemon!", bsaur);
      
      console.log("bulbasaur's coolest ability is",bsaur.abilities[1].ability.name);
      let charmander = this._http.get('https://pokeapi.co/api/v2/pokemon/2/');
      charmander.subscribe(charmander=>{
        console.log("the next pokemon after bulbasaur is", charmander.name)
      });
      let poke = this._http.get('http://pokeapi.co/api/v2/ability/chlorophyll');
      poke.subscribe(poke=>{
        console.log(poke);
        // for(let pokemon in poke){
        //   console.log("mypokemon",pokemon);
        //   console.log("mypokemon",poke[pokemon].name);
        // }
      });
      
      
    });
  }
}
