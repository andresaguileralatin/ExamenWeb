import { Component, OnInit } from '@angular/core';
import { ListaItems, Item } from 'src/app/interfaces/item';
import { ActivatedRoute,Router,RouteReuseStrategy } from '@angular/router';
import { Carrito, ListaCarrito } from 'src/app/interfaces/carrito';


@Component({
  selector: 'app-detalle-item',
  templateUrl: './detalle-item.component.html',
  styleUrls: ['./detalle-item.component.scss']
})
export class DetalleItemComponent implements OnInit {
  ListaItems=ListaItems;
  ListaCarrito=ListaCarrito;
  id:number=1;
  Item:any;
  i:number=0;
  constructor(private ruta:ActivatedRoute, private router:Router) {
    this.ruta.params.subscribe(datos=>{
      this.id=datos["id"];
    }
    )
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    };
  }

  ngOnInit(): void {
    this.Item=ListaItems.find(objeto=>objeto.id==this.id);
  }

  agregarCarro(quantidad:string){
    let carrito:Carrito={id:this.id,cantidad:parseInt(quantidad)};
    ListaCarrito.push(carrito);
    console.log(ListaCarrito);
  }
}
