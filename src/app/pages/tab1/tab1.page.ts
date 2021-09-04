import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Lista } from 'src/app/models/lista.model';
import { DeseosService } from 'src/app/services/deseos.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  listas: Lista[] = [];


  constructor(public deseosService: DeseosService,
    private router: Router,
    private alertController: AlertController) {

    this.listas = deseosService.listas;
    console.log('this.listas ' + this.listas);
  }

  async agregarLista() {

    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Nueva lista',
      inputs: [
        {
          name: 'titulo',
          type: 'text',
          placeholder: 'Nombre de la Lista'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancelar');
          }
        },
        {
          text: 'Crear',
          handler: (data) => {

            if (data.length === 0) {
              return;
            }
            const listaId = this.deseosService.crearlista(data.titulo);
            console.log('data.titulo' + data.titulo);
            this.router.navigateByUrl(`/tabs/tab1/agregar/${listaId}`);
            //Metodo para crear la lista
          }
        }
      ]
    });

    alert.present();
  }

  listaSeleccionada(lista: Lista) {

    this.router.navigateByUrl(`/tabs/tab1/agregar/${lista.id}`);
  }

}
