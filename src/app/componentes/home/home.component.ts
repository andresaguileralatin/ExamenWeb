import { Component, OnInit } from '@angular/core';
import { Item, ListaItems } from 'src/app/interfaces/item';
import { ActivatedRoute,Route } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  ListaItems=ListaItems;
  id:number=1;
  Item:any;

  constructor(private ruta:ActivatedRoute) {
    this.ruta.params.subscribe(datos=>{
      this.id=datos["id"];
    })
  }

  ngOnInit(): void {
  }

}
