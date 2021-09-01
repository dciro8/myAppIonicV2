import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {


  listas: Lista[] = [];
  constructor() {
    // const list1 = new Lista('Recolectar piedras del infinito');
    // const list2 = new Lista('Héroe a desaparecer');
    // this.listas.push(list1, list2);
    console.log(this.listas);
    this.cargarStorage();
  }

  crearlista(titulo:
    string) {
    const nuevaLista = new Lista(titulo);
    this.listas.push(nuevaLista);
    this.guardarStorage();

return nuevaLista.id;
  }

  guardarStorage() {
    localStorage.setItem('data', JSON.stringify(this.listas));
  }

  cargarStorage() {

    if (localStorage.getItem('data')) {
      this.listas = JSON.parse(localStorage.getItem('data'));
    } else {
      this.listas = [];
    }
  }

  obterlista(id:string | number){
    id=Number(id);
    return this.listas.find(listaData=>listaData.id === id);
  }


}
