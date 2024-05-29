import { Component, OnInit, HostBinding } from '@angular/core';
import { Datos } from '../model/datos';
import { DatosService } from '../service/datos.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  //@HostBinding('class') clases = 'row';

  datos: Datos = {
    /*id: 0,
    Nombre: "",
    Descripcion: "",
    Tipo: "",
    Precio: "",
    Imagen: ""*/
  };

  dato: any = []
  constructor(private datosService: DatosService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getDatos();

    //const params = this.activatedRoute.snapshot.params;
  }

  getDatos(){
    this.datosService.envio().subscribe(
      res => {
        this.dato = res;
      },
      err => console.log(err)
    );
  }

  /*
  guardar() {
    delete this.datos.id;
 
      this.datosService.guardar(this.datos)
        .subscribe(
          res => {
            console.log(res);
            this.router.navigate(['/paneladmin']);
          },
          err => console.error(err)
        )
    }*/

}
