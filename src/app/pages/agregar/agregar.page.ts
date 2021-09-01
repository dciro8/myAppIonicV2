import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListaItem } from 'src/app/models/lista-item.model';
import { Lista } from 'src/app/models/lista.model';
import { DeseosService } from 'src/app/services/deseos.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {

  list:Lista;
nombreItem:string;
  constructor(private deseosService: DeseosService,
    private router: ActivatedRoute) {
    const listId = this.router.snapshot.paramMap.get('listaId');
    
    this.list=this.deseosService.obterlista(listId);
    console.log('listId ' +this.list);
    // this.deseosService.obterlista()
  }

  ngOnInit() {
  }

  agregarItem(){
   if (this.nombreItem.length===0){
     return;
   }

   const nuevoItem=new ListaItem(this.nombreItem);
   this.list.items.push(nuevoItem);
   this.nombreItem='';
  }
}
