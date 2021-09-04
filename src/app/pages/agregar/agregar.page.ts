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

  list: Lista;
  nombreItem: string;
  constructor(private deseosService: DeseosService,
    private router: ActivatedRoute) {
    const listId = this.router.snapshot.paramMap.get('listaId');
    this.list = this.deseosService.obterlista(listId);
  }

  ngOnInit() {
  }

  agregarItem() {
    if (this.nombreItem.length === 0) {
      return;
    }

    const nuevoItem = new ListaItem(this.nombreItem);
    this.list.items.push(nuevoItem);
    this.nombreItem = '';
    this.deseosService.guardarStorage();
  }

  cambioCheck(item: ListaItem) {
    const pendiente = this.list.items.filter(imteData => !imteData.completado).length;

    if (pendiente === 0) {
      this.list.terminadaEn = new Date();
      this.list.termina = true;
    } else {
      this.list.terminadaEn = null;
      this.list.termina = false;
    }

    this.deseosService.guardarStorage();
    console.log(this.deseosService.listas);
  }

  borrar(i: number) {
    this.list.items.splice(i, 1);
    this.deseosService.guardarStorage();
  }

}
