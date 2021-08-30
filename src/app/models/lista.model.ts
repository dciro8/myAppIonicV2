import { ListaItem } from "./lista-item.model";

export class Lista{
    
    id:number;
    titulo:string;
    creedaEd:Date;
    terminadaEn:Date;
    termina:boolean;
    items:ListaItem[];


    constructor(titulo:string){
        this.titulo=titulo;
        this.creedaEd=new Date();
        this.termina=false;
        this.items=[];
        this.id= new Date().getTime();
    }

}