import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {


  listas: Lista[] = [];
  constructor() { 
    const list1= new Lista('Recolectar piedras del infinito');
    const list2= new Lista('Héroe a desaparecer');
  
  this.listas.push(list1,list2);
console.log (this.listas);

}


}
